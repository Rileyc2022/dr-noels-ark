import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    ListItem,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import NextLink from "next/link";
import React from "react";
import Break from "../../components/Break";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { analytics } from "../../constants/firebase";

interface HomeopathyProps {}

const Homeopathy: React.FC<HomeopathyProps> = ({}) => {
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
                        // p={{ base: "50px", lg: "120" }}
                        shadow="md"
                        // position={"relative"}
                        zIndex="1"
                        overflow={"hidden"}
                    >
                        <Box
                            backgroundImage={
                                "linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/mountain-range.png)"
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
                                    Homeopathy
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
                            <Text fontSize={15}>
                                <Text
                                    fontSize={25}
                                    fontWeight="bold"
                                    pt="12"
                                    pb="6"
                                    color={"brand.500"}
                                >
                                    History
                                </Text>
                                Homeopathy is a holistic approach to healing (in
                                humans and animals) that is based on one simple
                                principle "like cures like".
                                <Break />
                                The objective of homeopathic medicine in
                                veterinary care is to trigger the animal’s
                                natural defenses, and support its innate ability
                                to heal itself.
                                <Break />
                                The conventional (allopathic) approach to
                                medicine seeks to name a disease and then
                                prescribe multiple types of drugs to control or
                                suppress the symptoms. If you have an infection,
                                you take an antibiotic. If you have pain or
                                inflammation, you take an anti-inflammatory. By
                                contrast, the homeopathic veterinarian sees the
                                pet's entire symptom picture as their own
                                individual expression of illness, and will
                                prescribe a homeopathic medicine to work with
                                the animal's body in the healing process.
                                <Break />
                                The homeopathic veterinarian sees the symptoms
                                as clues that guide him/her to the exact
                                homeopathic prescription that, when given to a
                                sick animal, will stimulate a healing response
                                in the patient and return it to full health and
                                vitality.
                                <Break />
                                To better understand how homeopathy works, Dr.
                                Richard Pitcairn explains the findings of Dr
                                Samuel Hahnemann (a German physician who
                                developed homeopathy over 200 years ago):
                                <Break />
                                “Dr. Hahnemann found that substances could be
                                used to stimulate healing by applying the
                                principle of “like cures like” in very specific
                                ways. He would give the patient a substance that
                                would gently nudge their system in the direction
                                of the “disease”, reproducing the same (or
                                almost the same) syndrome or whole set of
                                particular symptoms in a mild form.
                                <Break />
                                He found this to be a very effective way to
                                stimulate their natural defenses. It is almost
                                as if the patient’s defenses cannot distinguish
                                between the natural disease and what the similar
                                substance is doing. Thus homeopaths fine-tune
                                the use of medicines to enhance the patient’s
                                own attempts to overcome the disease.” ~ Richard
                                Pitcairn, DVM, PhD, Pitcairn Institute of
                                Veterinary Homeopathy
                                <Break />
                                <Text
                                    fontSize={25}
                                    fontWeight="bold"
                                    pt="12"
                                    pb="6"
                                    color={"brand.500"}
                                >
                                    Uses
                                </Text>
                                <Text
                                    fontSize={18}
                                    fontWeight="bold"
                                    mb="3"
                                    color={"brand.400"}
                                >
                                    Homeopathy can treat a variety of conditions
                                    including:
                                </Text>
                                <UnorderedList spacing={2}>
                                    <ListItem>Injuries, pain relief</ListItem>
                                    <ListItem>Itching skin</ListItem>
                                    <ListItem>
                                        Allergies & ear infections
                                    </ListItem>
                                    <ListItem>Kidney disease</ListItem>
                                    <ListItem>Arthritis</ListItem>
                                    <ListItem>Seizures</ListItem>
                                    <ListItem>
                                        Immune-mediated diseases
                                    </ListItem>
                                    <ListItem>Vaccine reactions</ListItem>
                                    <ListItem>Cancer</ListItem>
                                </UnorderedList>
                                <Text
                                    fontSize={18}
                                    fontWeight="bold"
                                    mt="6"
                                    mb="3"
                                    color={"brand.400"}
                                >
                                    The benefits of homeopathy:
                                </Text>
                                <UnorderedList spacing={2}>
                                    <ListItem>
                                        Increases the overall health of the pet,
                                        especially when treating a chronic
                                        disease.
                                    </ListItem>
                                    <ListItem>
                                        Produces longer lasting results with a
                                        decreasing number of treatments.
                                    </ListItem>
                                    <ListItem>
                                        A homeopathic approach can eliminate the
                                        toxic side effects associated with
                                        pharmaceuticals.
                                    </ListItem>
                                    <ListItem>
                                        It's less expensive and much safer than
                                        conventional medicine, and it can reduce
                                        healthcare costs over the life of your
                                        pet.
                                    </ListItem>
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
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/mountain-range.png)"
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

export default Homeopathy;
