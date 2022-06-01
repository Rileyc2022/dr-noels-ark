import React, { useContext, useRef, useState } from "react";
// import { Card, Alert } from "react-bootstrap";
import { AuthContext, IAuthContext, useAuth } from "../contexts/AuthContext";
// import { Link as  ReachLink, useHistory } from "react-router-dom";
import { Field, Form, FieldProps, Formik, FormikHelpers } from "formik";
import {
    FormControl,
    Button,
    FormErrorMessage,
    FormLabel,
    Input,
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    Link,
    useToast,
    VStack,
    Divider,
} from "@chakra-ui/react";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

export default function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const { logIn, googleLogin, currentUser } = useAuth();
    const router = useRouter();
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false);
    // const history = useHistory();
    const toast = useToast();

    // interface Values {
    //     email: string;
    //     password: string;
    // }

    // async function handleSubmit(
    //     { email, password }: Values,
    //     setSubmitting: FormikHelpers<Values>["setSubmitting"]
    // ) {
    //     // if (password !== passwordConfirm) {
    //     //   return setError("Passwords do not match")
    //     // }
    //     setLoading(true);
    //     // setTimeout(async () => {
    //     console.log("sign up:", email, password);
    //     try {
    //         logIn(email, password);
    //         setLoading(false);
    //     } catch (err) {
    //         // Toast({
    //         //   title: err.toString(),
    //         //   status: "error",
    //         //   duration: 9000,
    //         //   isClosable: true,
    //         // });
    //         // setLoading(false);
    //     }
    //     // .then(() => {
    //     // console.log(result)
    //     // history.push("/");
    //     console.log(currentUser);
    //     // }).catch( (err: Error) => {

    //     // });
    //     // }, 5000);
    //     // setError("");
    // }

    async function googleHandle() {
        try {
            if (googleLogin) await googleLogin();
            // history.push("/")
            router.push("/portal");
        } catch {
            console.log("Failed to login using google");
        }
    }

    return (
        <>
            <Navbar variant="light" showCompanyName={true} withShadow={false} bottomBorder={true}></Navbar>
            <Flex
                minH={"100vh"}
                // align={"end"}
                align={{ base: "end", md: "end" }}
                pb={{base: 10, md: 5}}
                justify={"space-evenly"}
                bg={"gray.50"}
                // pt="20px"
                // pt="10"
                // pb="10"

            >
                <Stack
                    spacing={8}
                    w={{ base: "400px", md: "500px" }}
                    // py={12}
                    px={6}
                >
                    <Stack align={"center"}>
                        <Text
                            fontSize={{ base: 25, md: 40 }}
                            color={"brand.500"}
                            m="1"
                            fontWeight={"bold"}
                        >
                            Sign In
                        </Text>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            To your pet's portal
                            {/* to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️ */}
                        </Text>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={"white"}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            onSubmit={async (
                                {
                                    email,
                                    password,
                                }: { email: string; password: string },
                                actions
                            ) => {
                                try {
                                    await logIn(email, password);
                                    actions.setSubmitting(false);
                                    router.push("/portal");
                                } catch {
                                    actions.setSubmitting(false);
                                    toast({
                                        title: "Failed to login",
                                        description:
                                            "Please check your credentials",
                                        status: "error",
                                    });
                                }
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <Stack spacing={4}>
                                        <Field name="email">
                                            {({ field, form }: FieldProps) => (
                                                <FormControl
                                                    isInvalid={
                                                        !!form.errors.email &&
                                                        !!form.touched.email
                                                    }
                                                >
                                                    <FormLabel htmlFor="email">
                                                        Email
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        // autoComplete="off"
                                                        id="email"
                                                        // variant={"flushed"}
                                                        // placeholder="Email"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.email}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name="password">
                                            {({ field, form }: FieldProps) => (
                                                <FormControl
                                                    isInvalid={
                                                        !!form.errors
                                                            .password &&
                                                        !!form.touched.password
                                                    }
                                                >
                                                    <FormLabel htmlFor="password">
                                                        Password
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        type="password"
                                                        // autoComplete="off"
                                                        id="password"
                                                        // placeholder="password"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.password}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Button
                                            mt={5}
                                            width={"100%"}
                                            colorScheme="teal"
                                            disabled={props.isSubmitting}
                                            isLoading={props.isSubmitting}
                                            type="submit"
                                        >
                                            Sign In
                                        </Button>
                                        <Text
                                            w={"100"}
                                            textAlign="center"
                                            mt={5}
                                            className="w-100 text-center mt-2"
                                        >
                                            Need an account?{" "}
                                            <Link
                                                color="brand.500"
                                                href="/create-portal-account"
                                            >
                                                Sign Up
                                            </Link>
                                        </Text>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                        <VStack>
                            <Flex
                                flexDirection={"row"}
                                // justifyContent="stretch"
                                alignItems={"center"}
                                width="100%"
                                my="6"
                            >
                                <Divider borderColor="gray.400"></Divider>
                                <Text mx="5px" color="gray.400">
                                    or
                                </Text>
                                {/* <Text mx="5px" color="gray.400">or</Text> */}
                                <Divider borderColor="gray.400"></Divider>
                            </Flex>
                            <GoogleButton onClick={googleHandle} />
                        </VStack>
                    </Box>
                </Stack>
                {/* <Logo boxSize={"700px"} fill="brand.200"></Logo> */}
            </Flex>
        </>
    );
}
