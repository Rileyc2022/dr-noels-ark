import {
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    HStack,
    Input,
    Link,
    Select,
    Stack,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, FieldProps } from "formik";
import router from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import camelize from "../helpers/camelcase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../constants/firebase";
import Footer from "../components/Footer";
import moment from "moment";

interface makeAppointmentProps {}

const makeAppointment: React.FC<makeAppointmentProps> = ({}) => {
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
            ],
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
            <Box minH="100vh" bgColor={"gray.50"} py="120">
                <Flex alignItems="center" flexDirection={"column"}>
                    <Box
                        bgColor="white"
                        width={"80%"}
                        p={{ base: "50px", md: "120" }}
                        shadow="md"
                    >
                        <Text
                            fontSize={{ base: 25, md: 40 }}
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            // pt="50"
                        >
                            Make Appointment
                        </Text>
                        <Divider my={10} />

                        <Formik
                            initialValues={{
                                "Date and Time": "",
                                "First name": "",
                                "Last name": "",
                                "Email address": "",
                                "Phone number": "",
                                City: "Berkeley",
                                Message: "",
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
                                        collection(db, "Appointment Requests"),
                                        values
                                    );
                                    actions.setSubmitting(false);
                                    // router.push("/portal");
                                    toast({
                                        title: "Appointment Request Sent",
                                        description:
                                            "We will get back to you shortly.",
                                        status: "success",
                                    });
                                } catch {
                                    actions.setSubmitting(false);
                                    toast({
                                        title: "Failed to submit.",
                                        description:
                                            "Please check each box, or your wifi connection.",
                                        status: "error",
                                    });
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
                                                >
                                                    {({
                                                        field,
                                                        form,
                                                    }: FieldProps) => (
                                                        <FormControl
                                                            isInvalid={
                                                                !!form.errors
                                                                    .firstName &&
                                                                !!form.touched
                                                                    .firstName
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
                                                                >
                                                                    {appointmentField.options?.map(
                                                                        (
                                                                            option
                                                                        ) => (
                                                                            <option
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
                                        size={'lg'}
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

export default makeAppointment;
