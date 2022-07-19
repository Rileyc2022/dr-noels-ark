import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import { addDoc, collection } from "firebase/firestore";
import { Field, FieldProps, Form, Formik } from "formik";
import moment from "moment";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { analytics, db } from "../constants/firebase";

interface MakeAppointmentProps {}

const MakeAppointment: React.FC<MakeAppointmentProps> = ({}) => {
    const toast = useToast();
    // const form = [
    //     {
    //         heading: "Owner's Contact Information",
    //         subsections: [
    //             {
    //                 title: "Name",
    //                 subfields: [
    //                     {
    //                         label: "First Name",
    //                         required: true,
    //                     },
    //                     { label: "Last Name", required: true },
    //                 ],
    //             },
    //             {
    //                 title: "Address",
    //                 subfields: [
    //                     {
    //                         label: "Street Address",
    //                         required: true,
    //                     },
    //                     { label: "Address Line 2", required: true },
    //                     { label: "City", required: true },
    //                     { label: "State / Province / Region", required: true },
    //                     { label: "ZIP / Postal Code", required: true },
    //                     { label: "Country", required: true },
    //                 ],
    //             },
    //             {
    //                 title: "Phone numbers",
    //                 subfields: [
    //                     {
    //                         label: "Day-Time phone number",
    //                         required: true,
    //                     },
    //                     {
    //                         label: "Evening number",
    //                         required: true,
    //                     },
    //                     {
    //                         label: "Mobile number",
    //                         required: true,
    //                     },
    //                 ],
    //             },
    //             {
    //                 title: "Email",
    //                 subfields: [
    //                     {
    //                         label: "Email address",
    //                         required: true,
    //                     },
    //                     {
    //                         label: "Cofirm email address",
    //                         required: true,
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    // ];

    const appointmentFields = [
        {
            label: "First name",
            required: true,
        },
        {
            label: "Last name",
            required: true,
        },
        {
            label: "Email address",
            required: true,
        },
        {
            label: "Phone number",
            required: true,
            special: "phone-number",
        },
        {
            label: "City",
            required: true,
            special: "dropdown",
            helperText: "Only these cities are in my range.",
            options: [
                "Berkeley",
                "Albany",
                "Kensington",
                "Montclair",
                "Piedmont",
                "Moraga",
                "Orinda",
                "Lafayette",
                "Walnut Creek",
                "Mill Valley",
            ],
        },
        {
            label: "Prefered day of week",
            required: true,
            special: "dropdown",
            // helperText: "Only these cities are in my range.",
            options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
            label: "Prefered time of day",
            required: true,
            special: "dropdown",
            // helperText: "Only these cities are in my range.",
            options: ["Morning", "Afternoon", "No preference"],
        },
        {
            label: "Message",
            required: true,
            special: "text-area",
            helperText: "Please describe your pet, and their health challenge.",
        },
    ];
    // array above but only labels:
    // ["First name", "Last name", "Email address", "Phone number", "City", "Message"]
    //then each string in array above is a stringkey with value of an empty string: { "First name": "", "Last name": "", "Email address": "", "Phone number": "", "City": "", "Message": "" }
    // ["First name", "Last name", "City", "Message"] but each string is a key with value of an empty string: { "First name": "", "Last name": "", "City": "", "Message": "" }

    return (
        <>
            <Navbar
                variant="dark"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
            <Box minH="100vh" bgColor={"gray.100"} py="120">
                <Flex alignItems="center" flexDirection={"column"}>
                    <Box
                        bgColor="white"
                        width={"80%"}
                        p={{ base: "50px", lg: "120" }}
                        shadow="md"
                    >
                        <Text
                            fontSize={{ base: 25, lg: 40 }}
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            // pt="50"
                        >
                            Make Appointment
                        </Text>
                        <Text
                            fontSize={{ base: 16, lg: 25 }}
                            color={"brand.400"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            // pt="50"
                        >
                            with Dr. Noel
                        </Text>
                        <Divider my={10} />

                        <Formik
                            initialValues={{
                                "Date and Time": "",
                                "First name": "",
                                "Last name": "",
                                "Email address": "",
                                "Phone number": "",
                                City: "",
                                Message: "",
                                "Prefered day of week": "",
                                "Prefered time of day": "",
                            }}
                            onSubmit={async (values, actions) => {
                                console.log(values);
                                try {
                                    values["Date and Time"] = moment().format(
                                        "MM/DD/YYYY hh:mm:ss A"
                                    );
                                    // await logIn(email, password);
                                    // setDoc(doc(db, "save"), {  userData: values });
                                    await addDoc(
                                        collection(db, "appointment_requests"),
                                        values
                                    );
                                    actions.setSubmitting(false);
                                    // router.push("/portal");
                                    toast({
                                        title: "Appointment Request Sent",
                                        description:
                                            "Dr. Noel will be alerted to your request, and get back to you soon.",
                                        status: "success",
                                    });
                                    analytics.then((analytics) => {
                                        analytics &&
                                            logEvent(
                                                analytics,
                                                "appointment_requested_success"
                                            );
                                    });
                                    actions.resetForm();
                                } catch (err) {
                                    actions.setSubmitting(false);
                                    toast({
                                        title: "Failed to submit.",
                                        description:
                                            "Please check each box, or your wifi connection.",
                                        status: "error",
                                    });
                                    analytics.then((analytics) => {
                                        analytics &&
                                            logEvent(
                                                analytics,
                                                "appointment_requested_fail"
                                            );
                                    });
                                    console.log(err);
                                }
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <Stack spacing={8} maxWidth="100%" mb={20}>
                                        {/* <Text
                                                        fontSize={25}
                                                        fontWeight="bold"
                                                        pt="20"
                                                        color={"brand.600"}
                                                        key={section.heading}
                                                    >
                                                        {section.heading}
                                                    </Text> */}
                                        {/* 
                                                    <Text
                                                        fontSize={25}
                                                        fontWeight="bold"
                                                        pt="20"
                                                        color={"brand.600"}
                                                    >
                                                        {section.heading}
                                                    </Text> */}
                                        {/* <Text
                                            fontSize={15}
                                            fontWeight="bold"
                                            pt="15"
                                            color={"brand.700"}
                                        >
                                            Your full name
                                        </Text> */}
                                        {appointmentFields.map(
                                            (appointmentField) => (
                                                <Field
                                                    name={
                                                        appointmentField.label
                                                    }
                                                    key={appointmentField.label}
                                                    validate={(
                                                        value: string
                                                    ) => {
                                                        let error;

                                                        if (
                                                            !value ||
                                                            (value &&
                                                                value.length ==
                                                                    0)
                                                        ) {
                                                            error =
                                                                appointmentField.label +
                                                                " is required.";
                                                        }

                                                        return error;
                                                    }}
                                                >
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => (
                                                        <FormControl
                                                            isInvalid={
                                                                !!form.errors[
                                                                    appointmentField
                                                                        .label
                                                                ] &&
                                                                !!form.touched[
                                                                    appointmentField
                                                                        .label
                                                                ]
                                                            }
                                                            isRequired={
                                                                appointmentField.required
                                                            }
                                                        >
                                                            <FormLabel htmlFor="email">
                                                                {
                                                                    appointmentField.label
                                                                }
                                                            </FormLabel>

                                                            {!appointmentField.special && (
                                                                <Input
                                                                    {...field}
                                                                    id={
                                                                        appointmentField.label
                                                                    }
                                                                    // autoComplete="off"
                                                                    //   variant={"outline"}
                                                                    // placeholder="Email"
                                                                />
                                                            )}
                                                            {appointmentField.special ==
                                                                "dropdown" && (
                                                                <Select
                                                                    {...field}
                                                                    id={
                                                                        appointmentField.label
                                                                    }
                                                                    placeholder=" "
                                                                >
                                                                    {appointmentField.options?.map(
                                                                        (
                                                                            option
                                                                        ) => (
                                                                            <option
                                                                                key={
                                                                                    option
                                                                                }
                                                                                value={
                                                                                    option
                                                                                }
                                                                            >
                                                                                {
                                                                                    option
                                                                                }
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </Select>
                                                            )}
                                                            {appointmentField.special ==
                                                                "text-area" && (
                                                                <Textarea
                                                                    {...field}
                                                                    id={
                                                                        appointmentField.label
                                                                    }
                                                                ></Textarea>
                                                            )}

                                                            {appointmentField.special ==
                                                                "phone-number" && (
                                                                <Input
                                                                    {...field}
                                                                    id={
                                                                        appointmentField.label
                                                                    }
                                                                    type={
                                                                        "phone"
                                                                    }
                                                                ></Input>
                                                            )}

                                                            <FormErrorMessage>
                                                                {
                                                                    form.errors[
                                                                        appointmentField
                                                                            .label
                                                                    ]
                                                                }
                                                            </FormErrorMessage>
                                                            {appointmentField.helperText && (
                                                                <FormHelperText>
                                                                    {
                                                                        appointmentField.helperText
                                                                    }
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    )}
                                                </Field>
                                            )
                                        )}
                                        {/* <Divider></Divider> */}

                                        {/* <HStack><Checkbox></Checkbox><Text>Send me a copy</Text></HStack> */}
                                    </Stack>
                                    <Button
                                        // width={"100%"}
                                        colorScheme="teal"
                                        disabled={props.isSubmitting}
                                        isLoading={props.isSubmitting}
                                        type="submit"
                                        size={"lg"}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Flex>
            </Box>
            <Footer variant="dark"></Footer>
        </>
    );
};

export default MakeAppointment;
