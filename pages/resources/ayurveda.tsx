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
            <Box minH="100vh" bgColor={"gray.100"} py="120">
                <Flex alignItems="center" flexDirection={"column"}>
                    <Box
                        bgColor="white"
                        width={"80%"}
                        // p={{ base: "50px", lg: "120" }}
                        shadow="md"
                        // position={"relative"}
                        zIndex="1"
                        overflow={"hidden"}
                    >
                        <Box
                            backgroundImage={
                                "linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/sunset-water.png)"
                            }
                            //
                            // position={"absolute"}
                            backgroundPosition={"center 40%"}
                            // filter={"brightness()"}
                            zIndex="-1"
                            w="100%"
                            backgroundSize={"cover"}
                            height="350px"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            // linear-gradient="(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))"
                        >
                            <Box>
                                <Text
                                    fontSize={{ base: 35, lg: 40 }}
                                    color={"brand.500"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    // pt="50"
                                >
                                    Ayurveda
                                </Text>
                                <Text
                                    fontSize={{ base: 20, lg: 25 }}
                                    color={"brand.400"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    // pt="50"
                                >
                                    Explained by Dr. Noel
                                </Text>
                            </Box>
                        </Box>
                        <Divider borderColor="gray.200" />
                        <Box px={{ base: "50px", lg: "120" }}>
                            <Text fontSize={16}>
                                <Text
                                    fontSize={25}
                                    fontWeight="bold"
                                    pt="12"
                                    pb="6"
                                    color={"brand.500"}
                                >
                                    History
                                </Text>
                                The ancient healing science, Ayurveda,
                                originated in India somewhere around 6000BC,
                                perhaps making it the oldest form of medicine.
                                Ayurveda is a Sanskrit word and literally means
                                the "Science of Life".
                                <Break />
                                This system determines the quality and power of
                                herbs according to the laws of nature, thus
                                Ayurvedic herbs can be used collectively or
                                individually to match the patient's conditions,
                                either to prevent disease or restore balance and
                                health in a patient facing health challenges.
                                <Text
                                    fontSize={25}
                                    fontWeight="bold"
                                    pt="12"
                                    pb="6"
                                    color={"brand.500"}
                                >
                                    Benefits
                                </Text>
                                Ayurvedic veterinary medicine treats an animal
                                as a whole, rather than just the symptoms or the
                                affected parts of the body, unlike conventional
                                veterinary medicine.
                                <Break />
                                When appropriate, I may prescribe certain
                                Ayurvedic herbal supplements, in conjunction
                                with a homeopathic remedy, to assist with the
                                healing process.
                                <Break />
                                {/* <Text
                                  fontSize={18}
                                  fontWeight="bold"
                                  mb="3"
                                  color={"brand.400"}
                              >
                                  Homeopathy can treat a variety of conditions
                                  including:
                              </Text> */}
                                {/* <UnorderedList spacing={2}>
                                    <ListItem>A strong immune system</ListItem>
                                    <ListItem>
                                        Weight and disease management
                                    </ListItem>
                                    <ListItem>Good muscle tone</ListItem>
                                    <ListItem>Ease of digestion</ListItem>
                                    <ListItem>A healthy skin and coat</ListItem>
                                </UnorderedList> */}
                                <Text>
                                    If you are ready for a holistic approach to
                                    your pet's chronic health problems, please
                                    contact Dr Crymble to schedule a
                                    consultation.
                                </Text>
                                <NextLink href={"/make-appointment"} passHref>
                                    <Button
                                        as={"a"}
                                        fontSize={{
                                            base: "14",
                                            lg: "16",
                                        }}
                                        fontWeight={400}
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
                            </Text>
                        </Box>
                        <Box
                            backgroundImage={
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/sunset-water.png)"
                            }
                            //
                            // position={"absolute"}
                            backgroundPosition={"center 50%"}
                            // filter={"brightness()"}
                            zIndex="-1"
                            w="100%"
                            backgroundSize={"cover"}
                            height="350px"
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            // linear-gradient="(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))"
                        />
                    </Box>
                </Flex>
            </Box>
            <Footer variant="dark"></Footer>
        </>
    );
};

export default Ayurveda;
