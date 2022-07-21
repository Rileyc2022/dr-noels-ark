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
import Head from "next/head";
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
                                "linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/misty-trees.png)"
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
                        >
                            <Box>
                                <Text
                                    fontSize={{ base: 35, lg: 40 }}
                                    color={"brand.500"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                    // pt="50"
                                >
                                    Nutrition
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
                                    Overview
                                </Text>
                                Your pet's nutritional needs change during your
                                its life due to growth and development, the
                                aging process, and management of various medical
                                conditions. The breed, size, energy level and
                                environment of your pet are also factors in
                                determining proper nutritional needs such as
                                calorie intake and frequency of feeding. It is
                                also vital that to make sure your dog or cat
                                gets the necessary basic nutrients. A good diet
                                must contain the proper balance of proteins,
                                fats, carbohydrates, vitamins and minerals for
                                optimal health.
                                <Break />
                                Unfortunately, most of the dry and canned pet
                                foods available today are the by-products of the
                                human food industry and are so highly processed
                                that they do not resemble real food at all. A
                                poor diet can compromise your pet's health and
                                result in a myriad of food related illnesses.
                                <Break />
                                For this reason, I provide nutritional
                                consultations (as part of the homeopathic
                                consultation or separately) emphasizing whole
                                food diets, with individualized diet
                                recommendations to fit your pet's unique needs,
                                as well as your lifestyle. Good nutritional
                                support works synergistically with homeopathic
                                treatment to restore and maintain your pet in
                                ultimate health and vitality.
                                <Text
                                    fontSize={25}
                                    fontWeight="bold"
                                    pt="12"
                                    pb="6"
                                    color={"brand.500"}
                                >
                                    Benefits
                                </Text>
                                Many health problems such as digestive issues,
                                chronic skin problems and ear infections
                                dramatically improve or resolve simply by
                                switching to a fresh food diet.
                                <Break />
                                Proper nutrition through a lifetime of your cat
                                or dog provides many benefits:
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
                                <UnorderedList spacing={2}>
                                    <ListItem>A strong immune system</ListItem>
                                    <ListItem>
                                        Weight and disease management
                                    </ListItem>
                                    <ListItem>Good muscle tone</ListItem>
                                    <ListItem>Ease of digestion</ListItem>
                                    <ListItem>A healthy skin and coat</ListItem>
                                </UnorderedList>
                                <Text mt="10">
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
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/misty-trees.png)"
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

export default Nutrition;
