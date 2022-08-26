import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import { Field, FieldProps, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import HeadTemplate from "../components/HeadTemplate";
import Navbar from "../components/Navbar";
import { analytics } from "../constants/firebase";
import { useAuth } from "../contexts/AuthContext";
import { checkIsAdmin } from "../functions/checkIsAdmin";

export default function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const { logIn, googleLogin, currentUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword((showPassword) => !showPassword);
    const router = useRouter();

    const toast = useToast();

    async function googleHandle() {
        try {
            if (googleLogin) await googleLogin();
        } catch {
            console.log("Failed to login using google");
        }
    }

    useEffect(() => {
        (async () => {
            if (currentUser) {
                if (await checkIsAdmin(currentUser)) {
                    router.push("/admin");
                } else {
                    router.push("/portal");
                }
            }
        })();
    }, [currentUser]);

    return (
        <>
            <HeadTemplate
                title="Sign In - Dr. Noel's Ark"
                description="Sign in to Dr. Noel's Ark"
                short_description="Sign in to Dr. Noel's Ark"
                url="https://www.drnoelsark.com/sign-in"
            />
            <Navbar
                variant="light"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
            <Flex
                minH={"100vh"}
                align={{ base: "end", lg: "end" }}
                pt={16}
                justify={"center"}
                alignItems={"center"}
                bg={"gray.50"}
            >
                <Stack spacing={8} w={{ base: "400px", lg: "500px" }} px={6}>
                    <Stack align={"center"}>
                        <Text
                            fontSize={{ base: 25, lg: 40 }}
                            color={"brand.500"}
                            m="1"
                            fontWeight={"bold"}
                        >
                            Sign In
                        </Text>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            Admin Portal
                        </Text>
                    </Stack>
                    <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
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

                                    analytics.then((analytics) => {
                                        analytics &&
                                            logEvent(
                                                analytics,
                                                "login_success"
                                            );
                                    });
                                } catch {
                                    actions.setSubmitting(false);
                                    toast({
                                        title: "Failed to login",
                                        description:
                                            "Please check your credentials",
                                        status: "error",
                                    });
                                    analytics.then((analytics) => {
                                        analytics &&
                                            logEvent(analytics, "login_fail");
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
                                                        id="email"
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
                                                    <InputGroup size="md">
                                                        <Input
                                                            {...field}
                                                            id="password"
                                                            type={
                                                                showPassword
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                        />
                                                        <InputRightElement width="4.5rem">
                                                            <Button
                                                                h="1.75rem"
                                                                size="sm"
                                                                onClick={
                                                                    handleClick
                                                                }
                                                            >
                                                                {showPassword
                                                                    ? "Hide"
                                                                    : "Show"}
                                                            </Button>
                                                        </InputRightElement>
                                                    </InputGroup>
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
                                        {/* <Text
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
                                        </Text> */}
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}
