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

interface HomeopathyProps {}

const Homeopathy: React.FC<HomeopathyProps> = ({}) => {
    return (
        <>
            <HeadTemplate
                title="Homeopathy for Pets - Dr. Noel's Ark"
                description="Homeopathy is a holistic approach to healing (in humans and animals) that is based on one simple principle: 'like cures like'."
                short_description="Using Homeopathy to support your pet's health"
                url="https://www.drnoelsark.com/resources/homeopathy"
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
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(/images/mountain-range.png)"
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
                                    Homeopathy
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
                                Homeopathy is a system of natural medicine, used
                                by millions of people worldwide for more than
                                200 years to achieve wellness. In the United
                                States, it is a federally recognized form of
                                medicine regulated by the FDA. The objective of
                                homeopathy in veterinary care is to trigger the
                                animal's natural defenses, and support its
                                innate ability to heal itself.
                            </Text>
                            <Break />
                            <Text>
                                The conventional (allopathic) approach to
                                medicine is to diagnose a disease, attach a name
                                to it, then prescribe multiple types of
                                pharmaceuticals to control or suppress the
                                symptoms. If you have an infection, you take an
                                antibiotic. If you have pain or inflammation,
                                you take an anti-inflammatory. Accordingly, a
                                conventional veterinarian treats isolated
                                symptoms in an ill animal but does not address
                                the underlying susceptibility of the animal to
                                develop disease.
                            </Text>

                            <Break />
                            <Text>
                                By contrast, the homeopathic veterinarian sees
                                the pet's entire unique symptom picture as their
                                own individual expression of an illness. In
                                consultation with the pet owner, the homeopathic
                                veterinarian will identify physical, mental and
                                emotional symptoms, exercise habits,
                                environmental influences (which can include
                                toxins as well as stressful situations), and
                                diet. All previous medical records are reviewed
                                so that the veterinarian has a thorough history
                                of the animal. Once this information is
                                obtained, the symptoms and behaviors act as
                                clues that guide him/her to prescribe a
                                homeopathic medicine to work with the animal's
                                body in the healing process, with a goal of
                                optimum health and vitality.
                            </Text>
                            <Break />
                            <Text>
                                To better understand how homeopathy works, Dr.
                                Richard Pitcairn explains the findings of Dr
                                Samuel Hahnemann (a German physician who
                                developed homeopathy over 200 years ago):
                            </Text>

                            <Break />
                            <Box
                                fontStyle={"italic"}
                                fontSize={16}
                                mx={[4, 20]}
                                mt={10}
                                color="gray.600"
                            >
                                <Text>
                                    Dr. Hahnemann found that substances could be
                                    used to stimulate healing by applying the
                                    principle of 'like cures like' in very
                                    specific ways. He would give the patient a
                                    substance that would gently nudge their
                                    system in the direction of the 'disease',
                                    reproducing the same (or almost the same)
                                    syndrome or whole set of particular symptoms
                                    in a mild form.
                                </Text>
                                <Break />
                                <Text>
                                    He found this to be a very effective way to
                                    stimulate their natural defenses. It is
                                    almost as if the patient's defenses cannot
                                    distinguish between the natural disease and
                                    what the similar substance is doing. Thus
                                    homeopaths fine-tune the use of medicines to
                                    enhance the patient's own attempts to
                                    overcome the disease. (Richard Pitcairn,
                                    DVM, PhD, Pitcairn Institute of Veterinary
                                    Homeopathy)
                                </Text>
                            </Box>
                            <Text
                                fontSize={25}
                                fontWeight="bold"
                                pt="12"
                                pb="6"
                                color={"brand.500"}
                            >
                                Benefits
                            </Text>
                            {/* <Text
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
                                <ListItem>Itchy skin</ListItem>
                                <ListItem>Allergies & ear infections</ListItem>
                                <ListItem>Kidney disease</ListItem>
                                <ListItem>Arthritis</ListItem>
                                <ListItem>Seizures</ListItem>
                                <ListItem>Immune-mediated diseases</ListItem>
                                <ListItem>Vaccine reactions</ListItem>
                            </UnorderedList>
                            <Text
                                fontSize={18}
                                fontWeight="bold"
                                mt="6"
                                mb="3"
                                color={"brand.400"}
                            >
                                Unique advantages of homeopathy:
                            </Text> */}
                            <UnorderedList spacing={2}>
                                <ListItem>
                                    Increases the overall health of the pet,
                                    especially when treating a chronic disease.
                                </ListItem>
                                <ListItem>
                                    Achieves long lasting results.
                                </ListItem>
                                <ListItem>
                                    Has none of the toxic side effects normally
                                    associated with conventional medications.
                                </ListItem>
                                <ListItem>
                                    Is more affordable and safer than
                                    conventional medicine, and can reduce health
                                    care cost over the life of your pet.
                                </ListItem>
                                <ListItem>
                                    Environmentally friendly, cruelty free, and
                                    derived from natural sources.
                                </ListItem>
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
                                "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1)), url(/images/mountain-range.png)"
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

export default Homeopathy;
