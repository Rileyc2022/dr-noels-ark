import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import NextLink from "next/link";
import React from "react";
import Break from "../../components/Break";
import Footer from "../../components/Footer";
import HeadTemplate from "../../components/HeadTemplate";
import Navbar from "../../components/Navbar";
import { analytics } from "../../constants/firebase";

interface AyurvedaProps {}

const Ayurveda: React.FC<AyurvedaProps> = ({}) => {
    return (
        <>
            <HeadTemplate
                title="Ayurveda for Pets - Dr. Noel's Ark"
                description="Ayurvedic veterinary medicine treats an animal as a whole, and helps restore wellness in a pet facing health challenges."
                short_description="Using Ayurvedic medicine to support your pet's health"
                url="https://www.drnoelsark.com/resources/ayurveda"
            />
            <Navbar
                variant="dark"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
            <Box h={"20"} w="100%" position={"fixed"} bgColor="brand.800"></Box>
            <Box
                minH="100vh"
                bgColor={{ base: "brand.800", lg: "gray.100" }}
                pt={{ base: "20", lg: "120" }}
                pb={{ base: "0", lg: "120" }}
            >
                <Flex alignItems="center" flexDirection={"column"}>
                    <Box
                        bgColor={"white"}
                        width={{ base: "100%", lg: "90%" }}
                        shadow="md"
                        zIndex="1"
                        overflow={"hidden"}
                    >
                        <Box
                            backgroundImage={
                                "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/images/sunset-water.png)"
                            }
                            backgroundPosition={"center 40%"}
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
                                    Ayurveda
                                </Text>
                                <Text
                                    fontSize={{ base: 20, lg: 25 }}
                                    color={"brand.400"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                >
                                    Explained by Dr. Noel
                                </Text>
                            </Box>
                        </Box>
                        <Divider borderColor="gray.200" />
                        <Box px={{ base: "50px", lg: "120" }} fontSize={16}>
                            <Text
                                fontSize={25}
                                fontWeight="bold"
                                pt="12"
                                pb="6"
                                color={"brand.500"}
                            >
                                Overview
                            </Text>
                            <Text>
                                The ancient healing science, Ayurveda,
                                originated in India around 6000BC,
                                perhaps making it the oldest form of medicine.
                                Ayurveda is a Sanskrit word and literally means
                                the "Science of Life".
                            </Text>

                            <Break />
                            <Text>
                                This system determines the quality and power of
                                herbs according to the laws of nature, thus
                                Ayurvedic herbs can be used collectively or
                                individually to match the patient's conditions,
                                either to prevent disease or restore balance and
                                health in a patient facing health challenges.
                            </Text>

                            <Text
                                fontSize={25}
                                fontWeight="bold"
                                pt="12"
                                pb="6"
                                color={"brand.500"}
                            >
                                Benefits
                            </Text>
                            <Text>
                                Ayurvedic veterinary medicine treats an animal
                                as a whole, rather than just the symptoms or the
                                affected parts of the body, unlike conventional
                                veterinary medicine.
                            </Text>

                            <Break />
                            <Text>
                                When appropriate, I may prescribe certain
                                Ayurvedic herbal supplements, in conjunction
                                with a homeopathic remedy, to assist with the
                                healing process.
                            </Text>

                            <Break />
                            <Text>
                                If you are ready for a holistic approach to your
                                pet's health problems, please contact Dr.
                                Noel to schedule a consultation.
                            </Text>
                            <NextLink href={"/make-appointment"} passHref>
                                <Button
                                    as={"a"}
                                    fontSize={16}
                                    // fontWeight={400}
                                    variant={"solid"}
                                    colorScheme={"brand"}
                                    mt="10"
                                    size={"lg"}
                                    onClick={() => {
                                        analytics.then((analytics) => {
                                            analytics &&
                                                logEvent(
                                                    analytics,
                                                    "clicked_make_appointment"
                                                );
                                        });
                                    }}
                                >
                                    Make Appointment
                                </Button>
                            </NextLink>
                        </Box>
                        <Box
                            backgroundImage={
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/sunset-water.png)"
                            }
                            backgroundPosition={"center 50%"}
                            zIndex="-1"
                            w="100%"
                            backgroundSize={"cover"}
                            height="350px"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                        />
                    </Box>
                </Flex>

            </Box>
            {/* <Text
                fontSize={14}
                color="gray.500"
                mt={20}
                mb={10}
                mx={10}
                textAlign="center"
            >
                Always read and follow label directions. Claims based on
                traditional homeopathic practice, not accepted medical evidence.
                Not FDA evaluated.
            </Text> */}
            <Footer variant="dark"></Footer>
        </>
    );
};

export default Ayurveda;
