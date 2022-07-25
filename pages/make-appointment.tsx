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
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Field, FieldProps, Form, Formik } from "formik";
import moment from "moment";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import HeadTemplate from "../components/HeadTemplate";
import Navbar from "../components/Navbar";
import { analytics, db } from "../constants/firebase";

interface MakeAppointmentProps {}

const MakeAppointment: React.FC<MakeAppointmentProps> = ({}) => {
    const toast = useToast();

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
                "Danville",
            ],
        },
        {
            label: "Preferred day of week",
            required: true,
            special: "dropdown",

            options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
        {
            label: "Preferred time of day",
            required: true,
            special: "dropdown",

            options: ["Morning", "Afternoon", "No preference"],
        },
        {
            label: "Message",
            required: true,
            special: "text-area",
            helperText: "Please describe your pet and their health challenge.",
        },
    ];
    const handleTest = async () => {
        // async () => {
            const randomPick = (arr: any) => {
                return arr[
                    Math.floor(
                        Math.random() *
                        arr.length
                    )
                ];
            };
            // array of 20 random first names:
            const firstNames = [
                "John",
                "Jane",
                "Mary",
                "Patricia",
                "Linda",
                "Barbara",
                "Elizabeth",
                "Jennifer",
                "Maria",
                "Susan",
                "Margaret",
                "Dorothy",
                "Lisa",
                "Nancy",
                "Karen",
                "Betty",
                "Helen",
                "Sandra",
                "Donna",
                "Carol",
                "Ruth",
                "Sharon",
                "Michelle",
                "Laura",
                "Sarah",
                "Kimberly",
                "Deborah",
                "Jessica",
                "Shirley",
                "Cynthia",
                "Angela",
                "Melissa",
                "Brenda",
                "Amy",
                "Anna",
                "Rebecca",
                "Virginia",
                "Kathleen",
                "Pamela",
                "Martha",
                "Debra",
                "Amanda",
                "Stephanie",
                "Carolyn",
                "Christine",
                "Marie",
                "Janet",
                "Catherine",
                "Frances",
                "Ann",
                "Joyce",
                "Diane",
                "Alice",
                "Julie",
                "Heather",
                "Teresa",
                "Doris",
                "Gloria",
                "Evelyn",
                "Jean",
                "Cheryl",
                "Mildred",
                "Katherine",
                "Joan",
            ];

            const appointment = {
                "First name":
                    randomPick(firstNames),
                "Last name":
                    randomPick(firstNames),
                "Email address":
                    randomPick(firstNames) +
                    "@gmail.com",
                "Phone number":
                    "123-456-7890",
                City: "Berkeley",
                Message:
                    "I have a pet with a health challenge.",
                "Preferred day of week":
                    randomPick([
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                    ]),
                "Preferred time of day":
                    randomPick([
                        "Morning",
                        "Afternoon",
                    ]),
            };
            await addDoc(
                collection(
                    db,
                    "appointment_requests"
                ),
                {
                    timestamp:
                        serverTimestamp(),
                    color: randomPick(["red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink"]),
                    ...appointment,
                }
            );
        // };
    }

    return (
        <>
            <HeadTemplate
                title="Make Appointment - Dr. Noel's Ark"
                description="All-natural, holistic veterinary house calls in the San Francisco Bay Area. Request an appointment with Dr. Noel Crymble."
                short_description="Holistic Bay Area House Call Veterinarian"
                url="https://www.drnoelsark.com/make-appointment"
            />
            <Navbar
                variant="dark"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
            <Box
                minH="100vh"
                bgColor={{ base: "brand.800", lg: "gray.100" }}
                pt={{ base: "20", lg: "120" }}
                pb={{ base: "0", lg: "120" }}
            >
                <Flex alignItems="center" flexDirection={"column"}>
                    <Box
                        bgColor="white"
                        width={{ base: "100%", lg: "90%" }}
                        shadow="md"
                        zIndex="1"
                        overflow={"hidden"}
                    >
                        {/* <Text
                            fontSize={{ base: 25, lg: 40 }}
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                        >
                            Make Appointment
                        </Text>
                        <Text
                            fontSize={{ base: 20, lg: 25 }}
                            color={"brand.400"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                        >
                            with Dr. Noel
                        </Text> */}
                        <Box
                            backgroundImage={
                                "linear-gradient(to top, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.6)), url(/images/canyon-cropped.jpeg)"
                            }
                            backgroundPosition={"center 50%"}
                            zIndex="-1"
                            w="100%"
                            backgroundSize={"cover"}
                            height="350px"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <Box>
                                <Text
                                    fontSize={{ base: 35, lg: 40 }}
                                    color={"brand.500"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                >
                                    Make Appointment
                                </Text>
                                <Text
                                    fontSize={{ base: 20, lg: 25 }}
                                    color={"brand.400"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                >
                                    With Dr. Noel
                                </Text>
                            </Box>
                        </Box>
                        {/* <Divider my={10} /> */}
                        <Box p={{ base: "50px", lg: "120" }} fontSize={16}>
                            <Formik
                                initialValues={{
                                    "First name": "",
                                    "Last name": "",
                                    "Email address": "",
                                    "Phone number": "",
                                    City: "",
                                    Message: "",
                                    "Preferred day of week": "",
                                    "Preferred time of day": "",
                                }}
                                onSubmit={async (values, actions) => {
                                    console.log(values);
                                    // values: {
                                    //     "Date and Time": string;
                                    //     "First name": string;
                                    //     "Last name": string;
                                    //     "Email address": string;
                                    //     "Phone number": string;
                                    //     City: string;
                                    //     Message: string;
                                    //     "Preferred day of week": string;
                                    //     "Preferred time of day": string;
                                    // }
                                    // create on object with fake values that follow the above type

                                    try {
                                        await addDoc(
                                            collection(
                                                db,
                                                "appointment_requests"
                                            ),
                                            {
                                                timestamp: serverTimestamp(),
                                                ...values,
                                            }
                                        );
                                        actions.setSubmitting(false);

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
                                        <Stack
                                            spacing={8}
                                            maxWidth="100%"
                                            mb={20}
                                        >
                                            {appointmentFields.map(
                                                (appointmentField) => (
                                                    <Field
                                                        name={
                                                            appointmentField.label
                                                        }
                                                        key={
                                                            appointmentField.label
                                                        }
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
                                                                    !!form
                                                                        .errors[
                                                                        appointmentField
                                                                            .label
                                                                    ] &&
                                                                    !!form
                                                                        .touched[
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
                                                                        form
                                                                            .errors[
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
                                        </Stack>
                                        <Button
                                            colorScheme="teal"
                                            disabled={props.isSubmitting}
                                            isLoading={props.isSubmitting}
                                            type="submit"
                                            size={"lg"}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            ml={2}
                                            onClick={handleTest}
                                        >
                                            Test
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Footer variant="dark"></Footer>
        </>
    );
};

export default MakeAppointment;
