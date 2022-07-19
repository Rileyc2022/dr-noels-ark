import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading, List,
    ListIcon, ListItem, Stack, Text, UnorderedList, useBreakpointValue
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { InView } from "react-intersection-observer";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { analytics } from "../constants/firebase";
import Image from "next/image";
import HeroPortraitPhoto from '../public/images/no-background-portrait.png';
import LookingAtCatPhoto from '../public/images/looking-at-cat.png';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [allowedToCollapse, setAllowedToCollapse] = useState(false);
    const isBase = useBreakpointValue({ base: true, lg: false });
    useEffect(() => {
        setTimeout(() => {
            setAllowedToCollapse(true);
        }, 500);
    }, []);
    const { asPath } = useRouter();

    useEffect(() => {
        const hash = asPath.split("#")[1];
        if (hash) {
            let elem = document.getElementById(hash);
            if (elem) {
                elem.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }
    }, [asPath]);
    return (
        <>
            <Parallax
                style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                    zIndex: -1,
                }}
                speed={-20}
            >
                <Box
                    position={"absolute"}
                    backgroundImage={{
                        base: "/images/ark-background-phone.png",
                        lg: "/images/ark-background.png",
                    }}
                    backgroundSize={"cover"}
                    backgroundPosition="right bottom"
                    height={{ base: 760, lg: "100vh" }}
                    width="100%"
                    zIndex={"-10"}
                ></Box>
            </Parallax>
            <InView rootMargin="-200px" triggerOnce={false}>
                {({ inView, ref }) => {
                    return (
                        <>
                            {/* <Fade in={inView}> */}
                            {/* // <YourElement ref={ref} /> */}
                            {/* </Fade> */}
                            <Navbar
                                showCompanyName={!inView && allowedToCollapse}
                                withShadow={true}
                                bottomBorder={false}
                            />
                            <Box height={{ base: 760, lg: "100vh" }}>
                                <Flex
                                    direction={{ base: "column", lg: "row" }}
                                    justify={{
                                        base: "flex-end",
                                        lg: "space-evenly",
                                    }}
                                    height="100%"
                                    px={10}
                                >
                                    <Box
                                        alignSelf={"center"}
                                        ref={ref}
                                        // maxW="80%"

                                        transform={{ base: "translateY(70px)" }}
                                    >
                                        {/* <Parallax
          speed={10}> */}
                                        <Heading
                                            fontSize={{ base: "40", lg: "70" }}
                                            color="white"
                                        >
                                            DR. NOEL'S ARK
                                        </Heading>

                                        {/* </Parallax> */}
                                        {/* <Parallax
          speed={10}> */}
                                        <Text
                                            fontSize={{
                                                base: "18.5",
                                                lg: "32.4",
                                            }}
                                            color="text.sub-heading"
                                        >
                                            NATURAL VETERINARY CARE
                                        </Text>
                                        {/* </Parallax> */}
                                        <Text
                                            mt="10"
                                            color={"gray.300"}
                                            // maxW="40em"
                                            w={{ base: "100%", lg: "35em" }}
                                            fontSize={{
                                                base: "14",
                                                lg: "18",
                                            }}
                                        >
                                            Professional holisitic veterinary
                                            services available as house calls
                                            for cats and dogs in Berkeley,
                                            Albany, Kensington, Montclair,
                                            Piedmont, Moraga, Orinda, Lafayette,
                                            Walnut Creek, Danville, and Mill
                                            Valley.
                                        </Text>
                                        <Text
                                            mt="10"
                                            color={"gray.300"}
                                            // maxW="40em"
                                            w={{ base: "100%", lg: "35em" }}
                                            fontSize={{
                                                base: "14",
                                                lg: "18",
                                            }}
                                        >
                                            Click below to request an
                                            appointment with New Zealand
                                            veterinarian, Dr. Noel Crymble.
                                        </Text>
                                        <NextLink
                                            href={"/make-appointment"}
                                            passHref
                                        >
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
                                                        analytics && logEvent(analytics, "clicked_make_appointment");
                                                     })
                                                 }}
                                            >
                                                Make Appointment
                                            </Button>
                                        </NextLink>
                                    </Box>
                                    <Box
                                        width={{ base: 280, lg: 400, xl: 500 }}
                                        // mt="10"
                                        alignSelf={"flex-end"}
                                        justifySelf={"flex-end"}
                                    >
                                        {/* <Parallax
          speed={2}
          > */}

                                        <Image src={HeroPortraitPhoto} alt="Dr. Noel Crymble smiling with arms crossed."></Image>
                                        {/* </Parallax> */}
                                    </Box>
                                </Flex>
                                {/* <Button colorScheme={"brand"}>Hello</Button> */}
                            </Box>
                        </>
                    );
                }}
            </InView>
            <Box id="about"></Box>
            <Box bgColor={"white"} py="120px">
                <Box
                    pb="100"
                    display={"flex"}
                    alignItems="center"
                    w={"100%"}
                    flexDirection="column"
                >
                    <Text fontSize={"18.5"} color={"text.sub-heading"}>
                        MY STORY
                    </Text>
                    <Text
                        fontSize={{ base: 35, lg: 40 }}
                        color={"brand.500"}
                        mt="8"
                        fontWeight={"bold"}
                    >
                        Dr. Noel Crymble
                    </Text>
                    <Text
                        fontSize={{ base: 18, lg: 20 }}
                        color={"brand.500"}
                        mb="8"
                    >
                        BVSc, BSc, BA, LLB
                    </Text>
                    <Box width="10" height="1" bg={"brand.600"}></Box>
                </Box>
                <Flex
                    display={"flex"}
                    alignItems="center"
                    justify={"space-evenly"}
                    // justify="center"
                    mb="120"
                    flexDirection={{ base: "column", lg: "row" }}
                >
                    <Box w={{ base: "80%", lg: "30%" }}>
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                // w={{ base: "50%", lg: "20%" }}
                                // shadow="dark-lg"
                            >
                                <Image src={LookingAtCatPhoto}  alt="Dr. Noel Crymble sitting down, smiling, holding fluffy gray cat"></Image>
                            </Box>
                        ) : (
                            <Parallax
                                speed={3}
                                style={{ height: "100%", width: "100%" }}
                            >
                                <Box
                                    borderColor={"brand.500"}
                                    borderWidth="10px"
                                    // w={{ base: "50%", lg: "50%" }}
                                    shadow="dark-lg"
                                >
                                    <Image src={LookingAtCatPhoto}  alt="Dr. Noel Crymble sitting down, smiling, holding fluffy gray cat"></Image>
                                </Box>
                                {/* <Box w={{ base: "50%", lg: "20%" }} bg="brand.700"> */}
                                {/* </Box> */}
                            </Parallax>
                        )}
                    </Box>
                    <Box
                        w={{ base: "80%", lg: "40%" }}
                        fontSize="15"
                        mt={{ base: "10" }}
                    >
                        <Stack spacing="5">
                            <Text>
                                I come from New Zealand where I received a
                                Bachelor of Science degree in Animal Science,
                                and a Bachelor of Veterinary Science from Massey
                                University’s school of veterinary medicine in
                                2013.
                            </Text>
                            <Text>
                                A former legal officer in the Royal New Zealand
                                Air Force, I decided to change careers from
                                lawyer to veterinarian to satisfy my love of
                                animals and to make an impact on their health
                                and welfare. It was during my time as a
                                veterinary student, that I saw the limitations
                                of conventional medicine, and so developed an
                                interest in holistic veterinary care.
                            </Text>
                            <Text>
                                My specialty is veterinary homeopathy, and I
                                have completed the year-long Professional Course
                                in Veterinary Homeopathy (the Academy of
                                Veterinary Homeopathy’s qualifying course in the
                                United States), and the Advanced Course in
                                Veterinary Homeopathy, taught by Dr. Richard
                                Pitcairn, DVM. I strongly believe that
                                homeopathy, combined with nutritional support,
                                can restore animals to health and vitality in
                                acute and chronic cases.
                            </Text>
                        </Stack>
                    </Box>
                </Flex>
                <Flex
                    display={"flex"}
                    alignItems={{ base: "center", lg: "flex-start" }}
                    justify={"space-evenly"}
                    flexDirection={{ base: "column", lg: "row" }}
                    mb="120"
                    fontSize="15"
                >
                    <Box w={{ base: "80%", lg: "auto" }}>
                        <Text
                            fontSize={20}
                            color="brand.500"
                            fontWeight={"bold"}
                        >
                            Memberships
                        </Text>
                        <Divider m="10px 0 20px 0" />
                        <UnorderedList>
                            <ListItem>
                                American Veterinary Medical Association
                            </ListItem>
                            <ListItem>
                                California Veterinary Medical Association
                            </ListItem>
                            <ListItem>
                                American Holistic Veterinary Association
                            </ListItem>
                            <ListItem>
                                American Association of Feline Practitioners
                            </ListItem>
                            <ListItem>
                                Academy of Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                International Academy of Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                Bay Area Homeopathic Association
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box
                        w={{ base: "80%", lg: "auto" }}
                        mt={{ base: "40px", lg: "0px" }}
                    >
                        <Text
                            fontSize={20}
                            color="brand.500"
                            fontWeight={"bold"}
                        >
                            Certificates
                        </Text>
                        <Divider m="10px 0 20px 0" />
                        <UnorderedList>
                            <ListItem>
                                Professional Course in Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                Advanced Course in Veterinary Homeopathy
                            </ListItem>
                            <ListItem>Fear Free Professional</ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>
            {isBase ? (
                <Box
                    height={"400px"}
                    width={"100%"}
                    bgSize={"cover"}
                    bgPos="center"
                    bgImage="/images/forest-mountains.jpeg"
                />
            ) : (
                <ParallaxBanner
                    layers={[
                        { image: "/images/forest-mountains.jpeg", speed: -15 },
                    ]}
                    className="aspect-[2/1]"
                    style={{ height: "100vh" }}
                />
            )}
            <Box id="services"></Box>
            <Box bgColor={"white"} py="120">
                <Box
                    pb="100"
                    display={"flex"}
                    alignItems="center"
                    w={"100%"}
                    flexDirection="column"
                >
                    <Text fontSize={"18.5"} color={"text.sub-heading"}>
                        HEALING THE WHOLE ANIMAL
                    </Text>
                    <Text
                        fontSize={{ base: 35, lg: 40 }}
                        color={"brand.500"}
                        m="8"
                        fontWeight={"bold"}
                    >
                        My Services
                    </Text>
                    <Box width="10" height="1" bg={"brand.600"}></Box>
                </Box>
                <Stack
                    align={"center"}
                    // mx={{ base: "0", lg: "120" }}
                    spacing="20"
                >
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row-reverse" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {isBase ? (
                            // <ParallaxBanner
                            //     layers={[
                            //         {
                            //             image: "/images/homeopathy.jpeg",
                            //             speed: -15,
                            //         },
                            //     ]}
                            //     className="aspect-[2/1]"
                            //     style={{ height: "200px" }}
                            // />
                            // <Box
                            //     borderColor={"brand.700"}
                            //     borderWidth="10px"
                            //     height={"200px"}
                            //     width="100%"
                            //     bgSize={"cover"}
                            //     bgPos="center"
                            //     shadow="dark-lg"
                            //     bgImage="/images/homeopathy.jpeg"
                            // />

                            /// MOBILE IMAGE PARALLAX?
                            //             <Parallax
                            //             speed={3}
                            //                 //                             height={"200px"}
                            //                 // width="100%"
                            //             style={{ height: "200px", width: "100%" }}
                            //         >
                            //             <Box
                            //                 borderColor={"brand.600"}
                            //                 borderWidth="10px"
                            //                 height={"100%"}
                            //                 width={"100%"}
                            //                 shadow="dark-lg"
                            //                 // boxShadow="0 5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2)"
                            //                 bgSize={"cover"}
                            //                 bgPos="center"
                            //                 bgImage="/images/homeopathy.jpeg"
                            //             />
                            // </Parallax>

                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                height={"200px"}
                                width={"100%"}
                                // boxShadow="0 5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2)"
                                bgSize={"cover"}
                                bgPos="center"
                                bgImage="/images/homeopathy.jpeg"
                            />
                        ) : (
                            // <Box height={"100px"} width="100%" bgSize={"cover"} bgPos="center" bgImage='/images/homeopathy.jpeg' bgAttachment={"fixed"}>

                            // </Box>
                            // <Avatar
                            //     src="/images/homeopathy.jpeg"
                            //     size={"2xl"}
                            // />
                            <Parallax
                                speed={3}
                                style={{ height: "300px", width: "700px" }}
                            >
                                <Box
                                    borderColor={"brand.600"}
                                    borderWidth="10px"
                                    height={"100%"}
                                    width={"100%"}
                                    shadow="dark-lg"
                                    // boxShadow="0 5px 10px rgba(154,160,185,0.05), 0 15px 40px rgba(166,173,201,0.2)"
                                    bgSize={"cover"}
                                    bgPos="center"
                                    bgImage="/images/homeopathy.jpeg"
                                />
                            </Parallax>
                        )}

                        {/* <Avatar src="/images/homeopathy.jpeg" size={"2xl"} /> */}
                        {/* <ParallaxBanner
                            layers={[
                                {
                                    image: "/images/homeopathy.jpeg",
                                    speed: -15,
                                },
                            ]}
                            className="aspect-[2/1]"
                            style={{ height: "100px" }}
                        /> */}
                        {/* <Box height={"100px"} width={"100%"}bgImage="/images/homeopathy.jpeg" bgSize={"cover"} bgPosition="center"></Box> */}
                        <Box
                            mr={{ base: "0px", lg: "80px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Homeopathy
                            </Text>
                            <Text my="5" fontSize={15}>
                                Homeopathy is a medical system based on the
                                belief that the body can cure itself. Using tiny
                                amounts of natural substances, like plants and
                                minerals, homeopathic remedies are able to
                                stimulate the healing process.
                            </Text>
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="brand"
                                variant="outline"
                                size={"sm"}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Flex>
                    <Divider></Divider>
                    <Flex
                        // w={{ base: "80%", lg: "40%" }}
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                height={"200px"}
                                width="100%"
                                bgSize={"cover"}
                                bgPos="center"
                                bgImage="/images/nutrition.jpeg"
                            />
                        ) : (
                            <Parallax
                                speed={3}
                                style={{ height: "300px", width: "700px" }}
                            >
                                <Box
                                    borderColor={"brand.500"}
                                    borderWidth="10px"
                                    height={"100%"}
                                    width={"100%"}
                                    shadow="dark-lg"
                                    bgSize={"cover"}
                                    bgPos="center"
                                    bgImage="/images/nutrition.jpeg"
                                />
                            </Parallax>
                        )}
                        {/* {isBase ? (
                            <ParallaxBanner
                                layers={[
                                    {
                                        image: "/images/nutrition.jpeg",
                                        speed: -15,
                                    },
                                ]}
                                className="aspect-[2/1]"
                                style={{ height: "200px" }}
                            />
                        ) : (
                            <Avatar src="/images/nutrition.jpeg" size={"2xl"} />
                        )} */}

                        {/* <ParallaxBanner
                            layers={[
                                { image: "/images/nutrition.jpeg", speed: -15 },
                            ]}
                            className="aspect-[2/1]"
                            style={{ height: "200px" }}
                        /> */}
                        <Box
                            ml={{ base: "0px", lg: "80px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                mb="5"
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Nutrition
                            </Text>
                            <Text my="5" fontSize={15}>
                                For homeopathic remedies to be effective, the
                                pet must be nutritionally supported. Using
                                dietary protocols and nutritional supplements,
                                we can manage the complex needs of individual
                                animals, in order to prevent and treat diseases.
                            </Text>
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="brand"
                                variant="outline"
                                size={"sm"}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Flex>
                    <Divider></Divider>
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row-reverse" }}
                        align="center"
                        justify={"space-evenly"}
                        // pb="120px"
                    >
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                height={"200px"}
                                width="100%"
                                bgSize={"cover"}
                                bgPos="center"
                                bgImage="/images/ayurveda.jpeg"
                            />
                        ) : (
                            <Parallax
                                speed={3}
                                style={{ height: "300px", width: "700px" }}
                            >
                                <Box
                                    borderColor={"brand.500"}
                                    borderWidth="10px"
                                    height={"100%"}
                                    width={"100%"}
                                    shadow="dark-lg"
                                    bgSize={"cover"}
                                    bgPos="center"
                                    bgImage="/images/ayurveda.jpeg"
                                />
                            </Parallax>
                        )}
                        {/* {isBase ? (
                            <ParallaxBanner
                                layers={[
                                    {
                                        image: "/images/ayurveda.jpeg",
                                        speed: -15,
                                    },
                                ]}
                                className="aspect-[2/1]"
                                style={{ height: "200px" }}
                            />
                        ) : (
                            <Avatar src="/images/ayurveda.jpeg" size={"2xl"} />
                        )} */}
                        {/* <Avatar src="/images/ayurveda.jpeg" size={"2xl"} /> */}
                        {/* <ParallaxBanner
                            layers={[
                                { image: "/images/ayurveda.jpeg", speed: -15 },
                            ]}
                            className="aspect-[2/1]"
                            style={{ height: "100px" }}
                        /> */}
                        <Box
                            mr={{ base: "0px", lg: "80px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Ayurveda
                            </Text>
                            <Text my="5" fontSize={15}>
                                Ayurveda is a medicine system with historical
                                roots in the Indian subcontinent, where around
                                80% of the population report using it. Ayurveda
                                is based on the belief that health and wellness
                                depend on a delicate balance between the mind,
                                body, and spirit. The main goal of Ayurvedic
                                supplements for pets is to promote good health,
                                and treatments are geared toward specific health
                                problems.
                            </Text>
                            <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="brand"
                                variant="outline"
                                size={"sm"}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Flex>
                </Stack>
            </Box>
            <Flex height="90vh" my="50" justify={{ base: "center" }}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    width={{ base: "80%", lg: "100%" }}
                    height={"100%"}
                    alignItems="center"
                    justify="space-evenly"
                >
                    <Box>
                        <Text
                            color="gray.200"
                            fontSize={{ base: 35, lg: 30 }}
                            // color={"brand.500"}
                            // m="8"
                            // fontWeight={"bold"}

                            mb="8"
                        >
                            Why choose Dr. Noel's Ark?
                        </Text>
                        <List spacing={3} fontSize="20" color="gray.200">
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Non toxic
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                No expensive drugs
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Personalized care (no cookie-cutter treatments)
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Less animal stress – all check-ups done in your
                                home
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Focus on addressing causes of illness, not
                                masking symptoms
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Goal to restore and maintain optimal health
                            </ListItem>
                        </List>
                    </Box>
                    <NextLink href="/make-appointment" passHref>
                        <Button
                            as="a"
                            colorScheme={"brand"}
                            size="lg"
                            p="10"
                            mt={{ base: "10", lg: "0" }}
                            onClick={() => {
                                analytics.then((analytics) => {
                                    analytics && logEvent(analytics, "clicked_make_appointment");
                                 })
                             }}
                        >
                            Make Appointment
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
            {isBase ? (
                <Box
                    height={"400px"}
                    width={"100%"}
                    bgSize={"cover"}
                    bgPos="center"
                    bgImage="/images/river.jpeg"
                />
            ) : (
                <ParallaxBanner
                    layers={[{ image: "/images/river.jpeg", speed: -15 }]}
                    className="aspect-[2/1]"
                    style={{ height: "100vh" }}
                />
            )}
            <Box id="pricing"></Box>
            <Box bgColor={"white"} py="120">
                <Box
                    pb="100"
                    display={"flex"}
                    alignItems="center"
                    w={"100%"}
                    flexDirection="column"
                >
                    <Text fontSize={"18.5"} color={"text.sub-heading"}>
                        STRAIGHTFORWARD
                    </Text>
                    <Text
                        fontSize={{ base: 35, lg: 40 }}
                        color={"brand.500"}
                        m="8"
                        fontWeight={"bold"}
                        // id="pricing"
                    >
                        Pricing
                    </Text>
                    <Box width="10" height="1" bg={"brand.600"}></Box>
                </Box>
                <Stack
                    align={"center"}
                    // mx={{ base: "0", lg: "120" }}
                    spacing="17"
                >
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {/* <Avatar src="/images/homeopathy.jpeg" size={"2xl"} /> */}
                        {/* <ParallaxBanner
                            layers={[
                                {
                                    image: "/images/homeopathy.jpeg",
                                    speed: -15,
                                },
                            ]}
                            className="aspect-[2/1]"
                            style={{ height: "100px" }}
                        /> */}
                        {/* <Box height={"100px"} width={"100%"}bgImage="/images/homeopathy.jpeg" bgSize={"cover"} bgPosition="center"></Box> */}
                        <Box
                            mr={{ base: "0px", lg: "40px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Initial Consultation
                            </Text>
                            <Text my="5" fontSize={15}>
                                In-person consultation for me to get to know
                                your pet and the health issues needing to be
                                addressed. This fee includes a review of
                                previous medical records, and case research
                                after the consultation to decide on the
                                appropriate homeopathic remedy selection, and to
                                determine nutritional supplements as well as
                                dietary changes. My house call visit takes about
                                1 to 1.5 hours.
                            </Text>
                            {/* <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="brand"
                                variant="outline"
                                size={"sm"}
                            >
                                Learn More
                            </Button> */}
                        </Box>

                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}

                        <Text
                            fontSize="30px"
                            fontWeight="extrabold"
                            color="brand.500"
                            // mr="40px"
                            ml={{ base: "0", lg: "40px" }}
                            w={{ base: "auto", lg: "15%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            $320
                        </Text>
                    </Flex>
                    {isBase && (
                        <Divider
                            orientation={"horizontal"}
                            borderColor={"brand.500"}
                            borderWidth=""
                            // height="100"
                        ></Divider>
                    )}
                    {/* <Divider></Divider> */}
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {/* <Avatar src="/images/homeopathy.jpeg" size={"2xl"} /> */}
                        {/* <ParallaxBanner
                            layers={[
                                {
                                    image: "/images/homeopathy.jpeg",
                                    speed: -15,
                                },
                            ]}
                            className="aspect-[2/1]"
                            style={{ height: "100px" }}
                        /> */}
                        {/* <Box height={"100px"} width={"100%"}bgImage="/images/homeopathy.jpeg" bgSize={"cover"} bgPosition="center"></Box> */}
                        <Box
                            mr={{ base: "0px", lg: "40px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Phone Follow up
                            </Text>
                            <Text my="5" fontSize={15}>
                                Follow up sessions by phone are set for 30
                                minutes. Any additional time will be billed
                                incrementally at an hourly rate of $180. I will
                                check the progress your pet is making, and may
                                provide a change of recommendation either to
                                remedy, supplements, or diet. Phone follow ups are recommended every 4 to 6 weeks.
                            </Text>
                            {/* <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="brand"
                                variant="outline"
                                size={"sm"}
                            >
                                Learn More
                            </Button> */}
                        </Box>

                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}

                        <Text
                            fontSize="30px"
                            fontWeight="extrabold"
                            color="brand.500"
                            // mr="40px"
                            ml={{ base: "0", lg: "40px" }}
                            w={{ base: "auto", lg: "15%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            $80
                        </Text>
                    </Flex>
                    {isBase && (
                        <Divider
                            orientation={"horizontal"}
                            borderColor={"brand.500"}
                            borderWidth=""
                            // height="100"
                        ></Divider>
                    )}
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {/* <Avatar src="/images/homeopathy.jpeg" size={"2xl"} /> */}
                        {/* <ParallaxBanner
                            layers={[
                                {
                                    image: "/images/homeopathy.jpeg",
                                    speed: -15,
                                },
                            ]}
                            className="aspect-[2/1]"
                            style={{ height: "100px" }}
                        /> */}
                        {/* <Box height={"100px"} width={"100%"}bgImage="/images/homeopathy.jpeg" bgSize={"cover"} bgPosition="center"></Box> */}

                        <Box
                            mr={{ base: "0px", lg: "40px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                House Call Follow Up
                            </Text>
                            <Text my="5" fontSize={15}>
                                This fee covers an 1/2 hour in-person follow up visit to
                                your home. Housecalls allow me to better
                                reassess your pet so that I can make well-informed
                                recommendations.
                            </Text>
                            {/* <Button
                                rightIcon={<ArrowForwardIcon />}
                                colorScheme="brand"
                                variant="outline"
                                size={"sm"}
                            >
                                Learn More
                            </Button> */}
                        </Box>
                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}

                        <Text
                            fontSize="30px"
                            fontWeight="extrabold"
                            color="brand.500"
                            // mr="40px"
                            ml={{ base: "0", lg: "40px" }}
                            w={{ base: "auto", lg: "15%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            $160
                        </Text>
                    </Flex>
                </Stack>
            </Box>

            <Footer variant="light" />
        </>
    );
};

export default Home;
