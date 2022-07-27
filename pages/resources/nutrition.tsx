import {
    Box,
    Button,
    Divider,
    Flex,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import NextLink from "next/link";
import React from "react";
import Break from "../../components/Break";
import Footer from "../../components/Footer";
import HeadTemplate from "../../components/HeadTemplate";
import Navbar from "../../components/Navbar";
import { analytics } from "../../constants/firebase";

interface NutritionProps {}

const Nutrition: React.FC<NutritionProps> = ({}) => {
    return (
        <>
            <HeadTemplate
                title="Nutrition for Pets - Dr. Noel's Ark"
                description="Good nutritional support works with homeopathic treatment to restore and maintain your pet's health. Schedule a consultation with Dr. Noel Crymble."
                short_description="Let's help support your pets nutritional needs"
                url="https://www.drnoelsark.com/resources/nutrition"
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
                        bgColor="white"
                        width={{ base: "100%", lg: "90%" }}
                        shadow="md"
                        zIndex="1"
                        overflow={"hidden"}
                    >
                        <Box
                            backgroundImage={
                                "linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(/images/misty-trees.png)"
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
                                    Nutrition
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
                                The nutritional needs of your pet change during
                                its life due to growth and development, the
                                aging process, and the management of various
                                health challenges. Your pet's breed, size, level
                                of energy, and the environment in which it lives
                                are also factors in determining proper
                                nutritional needs, such calorie intake and
                                frequency of feeding. It is also vital to make
                                sure that your cat or dog gets the basic
                                nutrients, and that the diet is well balanced
                                for optimal health.
                            </Text>
                            <Break />
                            <Text>
                                Unfortunately, most of the dry and canned pet
                                foods on the market today are by-products of the
                                human food industry, and are so highly processed
                                that they hardly resemble food at all. A poor
                                diet can compromise your pet's health and result
                                in numerous food related illnesses.
                            </Text>
                            <Break />
                            <Text>
                                For this reason, I provide nutritional advice as
                                part of the homeopathic consultation,
                                emphasizing whole food diets with individualized
                                diet recommendations to fit your pet's unique
                                needs, as well as lifestyle. Sometimes
                                nutritional supplements are an integral part of
                                the treatment plan if your pet's diet needs
                                additional support. With proper nutritional and
                                dietary care, your pet can respond much better
                                to homeopathic medicines, helping to restore and
                                maintain ultimate health and vitality.
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
                                Good nutrition forms the foundation for good
                                health. Many pets' health problems, such as
                                chronic skin problems, ear infections, and
                                digestive issues improve dramatically improve or
                                resolve by changing to a fresh whole food diet.
                            </Text>
                            <Break />
                            <Text>
                                A lifetime of proper nutrition has many benefits
                                for your cat or dog:
                            </Text>
                            <Break />
                            <UnorderedList spacing={2}>
                                <ListItem>
                                    Fewer illnesses due to stronger immune
                                    system
                                </ListItem>
                                <ListItem>
                                    A noticeably healthier skin and coat
                                </ListItem>
                                <ListItem>
                                    Improved muscle tone resulting in fewer
                                    injuries
                                </ListItem>
                                <ListItem>
                                    Better digestion and absorption of dietary
                                    nutrients
                                </ListItem>
                                <ListItem>Weight management</ListItem>
                            </UnorderedList>
                            <Text mt="10">
                                If you are ready for a holistic approach to your
                                pet's health problems, please contact Dr. Noel
                                to schedule a consultation.
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
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/misty-trees.png)"
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
            <Text
                fontSize={14}
                color="gray.500"
                mt={20}
                mb={10}
                mx={10}
                textAlign="center"
            >
                Disclaimer: The information on this website should not be used
                as specific veterinary advise, and is not a substitute for
                professional veterinary diagnosis or treatment.
            </Text>
            <Footer variant="dark"></Footer>
        </>
    );
};

export default Nutrition;
