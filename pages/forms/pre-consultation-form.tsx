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
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field, FieldProps } from "formik";
import router from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import camelize from "../../helpers/camelcase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from "../../constants/firebase";

interface preConsulationForm {}

const preConsulationForm: React.FC<preConsulationForm> = ({ }) => {
  const toast = useToast();
  const form = [
      {
          heading: "Owner's Contact Information",
          subsections: [
              {
                  title: "Name",
                  subfields: [
                      {
                          label: "First Name",
                          required: true,
                      },
                      { label: "Last Name", required: true },
                  ],
              },
              {
                  title: "Address",
                  subfields: [
                      {
                          label: "Street Address",
                          required: true,
                      },
                      { label: "Address Line 2", required: true },
                      { label: "City", required: true },
                      { label: "State / Province / Region", required: true },
                      { label: "ZIP / Postal Code", required: true },
                      { label: "Country", required: true },
                  ],
              },
              {
                  title: "Phone numbers",
                  subfields: [
                      {
                          label: "Day-Time phone number",
                          required: true,
                      },
                      {
                          label: "Evening number",
                          required: true,
                      },
                      {
                          label: "Mobile number",
                          required: true,
                      },
                  ],
              },
              {
                  title: "Email",
                  subfields: [
                      {
                          label: "Email address",
                          required: true,
                      },
                      {
                          label: "Cofirm email address",
                          required: true,
                      },
                  ],
              },
          ],
      },
      {
          heading: "Co-Owner's Contact Information",
          subsections: [
              {
                  title: "Name",
                  subfields: [
                      {
                          label: "First Name",
                          required: false,
                      },
                      { label: "Last Name", required: false },
                  ],
              },
          ],
      },
      {
          heading: "Analytics",
          subsections: [
              {
                  title: "How did you find out about our practice?",
                  subfields: [
                      {
                          label: "Place",
                          required: false,
                      },
                      {
                          label: "If from a referral, is there someone we can thank for this referral?",
                          required: false,
                      },
                      {
                          label: "Please use this area to give us any other relevant information about yourself or your family",
                          required: false,
                      },
                  ],
              },
          ],
      },
      {
          heading: "Pet Information",
          subsections: [
              {
                  title: "Facts",
                  subfields: [
                      {
                          label: "Pet's Name",
                          required: true,
                      },
                      {
                          label: "Species",
                          required: true,
                      },
                      {
                          label: "or if other species",
                          required: false,
                      },
                      {
                          label: "Breed (if known)",
                          required: false,
                      },
                      {
                          label: "Color",
                          required: false,
                      },
                      {
                          label: "Date of birth or age (if known)",
                          required: false,
                      },
                      {
                          label: "Special identification (tattoo, microchip, etc.)",
                          required: false,
                      },
                      {
                          label: "Sex",
                          required: true,
                      },
                  ],
              },
          ],
      },
      {
          heading: "Background",
          subsections: [
              {
                  title: "Current veterinarian",
                  subfields: [
                      {
                          label: "Veterinarian's Name",
                          required: true,
                      },
                      {
                          label: "Veterinarian's Address",
                          required: true,
                      },
                      {
                          label: "Veterinarian's Phone Number",
                          required: true,
                      },
                      {
                          label: "Veterinarian's Email",
                          required: false,
                      },
                  ],
              },
              {
                  title: "Pet information",
                  subfields: [
                      {
                          label: "When did you acquire your pet?",
                          required: true,
                      },
                      {
                          label: "Current weight (in pounds)",
                          required: true,
                      },
                      {
                          label: "Vaccination history",
                          required: true,
                      },
                      {
                          label: "Current medications",
                          required: true,
                      },
                      {
                          label: "Current diet",
                          required: true,
                      },
                      {
                          label: "Supplements",
                          required: true,
                      },
                      {
                          label: "Does your pet have allergies or drug reactions? If so, please describe.",
                          required: false,
                      },
                      {
                          label: "Usual personality",
                          required: true,
                      },
                      {
                          label: "Past medical problems (diseases, heart issues, eye issues, etc.)",
                          required: true,
                      },
                      {
                          label: "Cheif complaint & reason for this visit",
                          required: true,
                      },
                      {
                          label: "Please use the following box to give us any other relevant information about your pet",
                          required: false,
                      },
                  ],
              },
          ],
      },
  ];

  return (
      <>
          <Navbar
              variant="light"
              showCompanyName={true}
              withShadow={false}
              bottomBorder={true}
          ></Navbar>
          <Box minH="100vh" bgColor={"white"} p={10}>
              <Text
                  fontSize={{ base: 25, md: 40 }}
                  color={"brand.500"}
                  pt={20}
                  fontWeight={"bold"}
                  textAlign={"center"}
              >
                  Make Appointment
              </Text>
              <Divider my={10} />
              <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={async (values, actions) =>
                  {
                      console.log(values)
                          try {
                              // await logIn(email, password);
                          // setDoc(doc(db, "save"), {  userData: values });
                          await addDoc(collection(db, "Initial Consultation Forms"), values);
                              actions.setSubmitting(false);
                              // router.push("/portal");
                              toast({
                                title: "Initial consulation form submitted.",
                                description:
                                    "Thank you! Dr. Crymble will review your answers closely.",
                                status: "success",
                            });
                          } catch {
                              actions.setSubmitting(false);
                              toast({
                                  title: "Failed to submit.",
                                  description: "Please check each box, or your wifi connection.",
                                  status: "error",
                              });
                          }
                      }
                  }
              >
                  {(props) => (
                      <Form>
                          <Flex alignItems="center" flexDirection={"column"}>
                          <Stack spacing={4} maxWidth="80%">
                              {form.map((section) => {
                                  return (
                                      <>
                                          <Text
                                              fontSize={25}
                                              fontWeight="bold"
                                              pt="20"
                                              color={"brand.600"}
                                              key={section.heading}
                                          >
                                              {section.heading}
                                          </Text>
                                          {/* <Divider></Divider> */}
                                          {section.subsections.map(
                                              (subsection) => {
                                                  return (
                                                      <>
                                                          <Text
                                                              fontSize={15}
                                                              fontWeight="bold"
                                                              pt="15"
                                                              color={
                                                                  "brand.700"
                                                              }
                                                              key={
                                                                  subsection.title
                                                              }
                                                          >
                                                              {
                                                                  subsection.title
                                                              }
                                                          </Text>
                                                          {subsection.subfields.map(
                                                              (
                                                                  subsectionSubfields
                                                              ) => {
                                                                  return (
                                                                      <Field
                                                                          name={
                                                                              subsectionSubfields.label
                                                                          }
                                                                          key={subsectionSubfields.label}
                                                                      >
                                                                          {({
                                                                              field,
                                                                              form,
                                                                          }: FieldProps) => (
                                                                              <FormControl
                                                                                  isInvalid={
                                                                                      !!form
                                                                                          .errors
                                                                                          .firstName &&
                                                                                      !!form
                                                                                          .touched
                                                                                          .firstName
                                                                                  }
                                                                                  isRequired={
                                                                                      subsectionSubfields.required
                                                                                  }
                                                                                  
                                                                              >
                                                                                  <FormLabel htmlFor="email">
                                                                                      {
                                                                                          subsectionSubfields.label
                                                                                      }
                                                                                  </FormLabel>
                                                                                  <Input
                                                                                      {...field}
                                                                                      // autoComplete="off"
                                                                                      id={
                                                                                          subsectionSubfields.label
                                                                                      }
                                                                                      // variant={"flushed"}
                                                                                      // placeholder="Email"
                                                                                  />
                                                                                  <FormErrorMessage>
                                                                                      {
                                                                                          form
                                                                                              .errors[
                                                                                                  subsectionSubfields.label
                                                                                          ]
                                                                                      }
                                                                                  </FormErrorMessage>
                                                                                  <FormHelperText></FormHelperText>
                                                                              </FormControl>
                                                                          )}
                                                                      </Field>
                                                                  );
                                                              }
                                                          )}
                                                      </>
                                                  );
                                              }
                                          )}
                                      </>
                                  );
                              })}
                              {/* <HStack><Checkbox></Checkbox><Text>Send me a copy</Text></HStack> */}
                              <Button
                                  mt={5}
                                  width={"100%"}
                                  colorScheme="teal"
                                  disabled={props.isSubmitting}
                                  isLoading={props.isSubmitting}
                                  type="submit"
                              >
                                  Submit
                              </Button>

                              </Stack>
                              </Flex>
                      </Form>
                  )}
              </Formik>
          </Box>
      </>
  );
};

export default preConsulationForm;
