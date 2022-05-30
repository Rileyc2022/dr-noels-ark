import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
    Stack,
    ListItem,
    UnorderedList,
    Avatar,
    useBreakpointValue,
    List,
    ListIcon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import NextLink from "next/link";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { InView } from "react-intersection-observer";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { MdCheckCircle } from "react-icons/md";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [allowedToCollapse, setAllowedToCollapse] = useState(false);
    const isBase = useBreakpointValue({ base: true, md: false });
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
                elem.scrollIntoView({ block: 'start', behavior: "smooth" });
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
                        md: "/images/ark-background.png",
                    }}
                    backgroundSize={"cover"}
                    backgroundPosition="right bottom"
                    height={{ base: 760, md: "100vh" }}
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
                            <Box height={{ base: 760, md: "100vh" }}>
                                <Flex
                                    direction={{ base: "column", md: "row" }}
                                    justify={{
                                        base: "flex-end",
                                        md: "space-evenly",
                                    }}
                                    height="100%"
                                >
                                    <Box
                                        alignSelf={"center"}
                                        ref={ref}
                                        maxW="80%"
                                        transform={{ base: "translateY(70px)" }}
                                    >
                                        {/* <Parallax
          speed={10}> */}
                                        <Heading
                                            fontSize={{ base: "40", md: "70" }}
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
                                                md: "32.4",
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
                                            w={{ base: "100%", md: "35em" }}
                                            fontSize={{
                                                base: "14",
                                                md: "18",
                                            }}
                                        >
                                            Professional holisitic veterinary
                                            services available as housecalls for
                                            cats and dogs in Berkeley, Albany,
                                            Kensington, Montclair, Piedmont,
                                            Moraga, Orinda, Lafayette and Walnut
                                            Creek. Click below to request an
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
                                                    md: "16",
                                                }}
                                                fontWeight={400}
                                                variant={"solid"}
                                                colorScheme={"brand"}
                                                mt="10"
                                                size={"lg"}
                                            >
                                                Make Appointment
                                            </Button>
                                        </NextLink>
                                    </Box>
                                    <Box
                                        width={{ base: 280, md: 500 }}
                                        // mt="10"
                                        alignSelf={"flex-end"}
                                        justifySelf={"flex-end"}
                                    >
                                        {/* <Parallax
          speed={2}
          > */}

                                        <Image src="/images/no-background-portrait.png"></Image>
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
                        fontSize={{ base: 35, md: 40 }}
                        color={"brand.500"}
                        mt="8"
                        fontWeight={"bold"}
                    >
                        Dr. Noel Crymble
                    </Text>
                    <Text
                        fontSize={{ base: 18, md: 20 }}
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
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <Box w={{ base: "80%", md: "30%" }}>
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                // w={{ base: "50%", md: "20%" }}
                                // shadow="dark-lg"
                            >
                                <Image src="/images/looking-at-cat.png"></Image>
                            </Box>
                        ) : (
                            <Parallax
                                speed={3}
                                style={{ height: "100%", width: "100%" }}
                            >
                                <Box
                                    borderColor={"brand.500"}
                                    borderWidth="10px"
                                    // w={{ base: "50%", md: "50%" }}
                                    shadow="dark-lg"
                                >
                                    <Image src="/images/looking-at-cat.png"></Image>
                                </Box>
                                {/* <Box w={{ base: "50%", md: "20%" }} bg="brand.700"> */}
                                {/* </Box> */}
                            </Parallax>
                        )}
                    </Box>
                    <Box
                        w={{ base: "80%", md: "40%" }}
                        fontSize="15"
                        mt={{ base: "10" }}
                    >
                        <Stack spacing="5">
                            <Text>
                                I come from New Zealand where I received a
                                Bachelor of Science degree in Animal Science,
                                and a Bachelor of Veterinary Science degree from
                                Massey University’s school of veterinary
                                medicine in 2013.
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
                    alignItems={{ base: "center", md: "flex-start" }}
                    justify={"space-evenly"}
                    flexDirection={{ base: "column", md: "row" }}
                    mb="120"
                    fontSize="15"
                >
                    <Box w={{ base: "80%", md: "auto" }}>
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
                                Academy of Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                International Academy of Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                Bay Area Homeopathic Association
                            </ListItem>
                            <ListItem>
                                American Holistic Veterinary Association
                            </ListItem>
                            <ListItem>
                                American Association of Feline Practitioners
                            </ListItem>
                            <ListItem>
                                California Veterinary Medical Association
                            </ListItem>
                            <ListItem>
                                American Veterinary Medical Association
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box
                        w={{ base: "80%", md: "auto" }}
                        mt={{ base: "40px", md: "0px" }}
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
                        fontSize={{ base: 35, md: 40 }}
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
                    // mx={{ base: "0", md: "120" }}
                    spacing="20"
                >
                    <Flex
                        w={{ base: "80%", md: "80%" }}
                        flexDirection={{ base: "column", md: "row-reverse" }}
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
                            mr={{ base: "0px", md: "80px" }}
                            w={{ base: "auto", md: "70%" }}
                            mt={{ base: "30px", md: "0px" }}
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
                                minerals, homeopaths are able to stimulate the
                                healing process.
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
                        // w={{ base: "80%", md: "40%" }}
                        w={{ base: "80%", md: "80%" }}
                        flexDirection={{ base: "column", md: "row" }}
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
                            ml={{ base: "0px", md: "80px" }}
                            w={{ base: "auto", md: "70%" }}
                            mt={{ base: "30px", md: "0px" }}
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
                                For homeopathy to be effective, the pet must be
                                supported nutritionally. By formulating
                                supplements and home-prepared diets, we can
                                manage the complex needs of individual animals,
                                and understand the underlying causes of symptoms
                                in order to prevent and treat diseases.
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
                        w={{ base: "80%", md: "80%" }}
                        flexDirection={{ base: "column", md: "row-reverse" }}
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
                            mr={{ base: "0px", md: "80px" }}
                            w={{ base: "auto", md: "70%" }}
                            mt={{ base: "30px", md: "0px" }}
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
                                80% of the population report using it. It is
                                based on the belief that health and wellness
                                depend on a delicate balance between the mind,
                                body, and spirit. Its main goal is to promote
                                good health, not fight disease, but treatments
                                may be geared toward specific health problems.
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
                    direction={{ base: "column", md: "row" }}
                    width={{base: "80%", md: "100%"}}
                    height={"100%"}
                    alignItems="center"
                    justify="space-evenly"
                    
                >
                    <Box>
                        <Text
                            color="gray.200"
                            fontSize={{ base: 35, md: 30 }}
                            // color={"brand.500"}
                            // m="8"
                            // fontWeight={"bold"}

                            mb="8"
                        >
                            Why not conventional medicine?
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
                                No animal stress - all check-ups done in your
                                home
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Focus on fixing cause, not masking symptomes
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Look at whole animal, and how symptomes connect
                            </ListItem>
                        </List>
                    </Box>
                    <Button colorScheme={"brand"} size="lg" p="10" mt={{base: "10", md: "0"}}>
                        Make Appointment
                    </Button>
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
                        EASY TO UNDERSTAND
                    </Text>
                    <Text
                        fontSize={{ base: 35, md: 40 }}
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
                    // mx={{ base: "0", md: "120" }}
                    spacing="20"
                >
                    <Flex
                        w={{ base: "80%", md: "80%" }}
                        flexDirection={{ base: "column", md: "row" }}
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

                        <Text
                            fontSize="50px"
                            fontWeight="extrabold"
                            color="brand.500"
                            // mr="40px"
                            ml={{ base: "0", md: "40px" }}
                            w={{ base: "auto", md: "15%" }}
                        >
                            $280
                        </Text>
                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}

                        <Box
                            ml={{ base: "0px", md: "40px" }}
                            w={{ base: "auto", md: "70%" }}
                            mt={{ base: "30px", md: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Initial Consultation
                            </Text>
                            <Text my="5" fontSize={15}>
                                In person consultation to get to know the animal
                                and the health issues needing to be addressed.
                                This fee includes review of previous medical
                                records, and case research/repertorization after
                                the consultation to decide on the first remedy
                                selection and/or diet recommendations.
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
                        w={{ base: "80%", md: "80%" }}
                        flexDirection={{ base: "column", md: "row" }}
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

                        <Text
                            fontSize="50px"
                            fontWeight="extrabold"
                            color="brand.500"
                            // mr="40px"
                            ml={{ base: "0", md: "40px" }}
                            w={{ base: "auto", md: "15%" }}
                        >
                            $90
                        </Text>
                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}
                        <Box
                            ml={{ base: "0px", md: "40px" }}
                            w={{ base: "auto", md: "70%" }}
                            mt={{ base: "30px", md: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                Follow up
                            </Text>
                            <Text my="5" fontSize={15}>
                                30 minute follow up, either in person (with
                                housecall fee below) or online (no fee). I will
                                check how the animal is doing and may provide a
                                change of recommendation either to remedies or
                                diet.
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
                        w={{ base: "80%", md: "80%" }}
                        flexDirection={{ base: "column", md: "row" }}
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

                        <Text
                            fontSize="50px"
                            fontWeight="extrabold"
                            color="brand.500"
                            // mr="40px"
                            ml={{ base: "0", md: "40px" }}
                            w={{ base: "auto", md: "15%" }}
                        >
                            $60
                        </Text>
                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}
                        <Box
                            ml={{ base: "0px", md: "40px" }}
                            w={{ base: "auto", md: "70%" }}
                            mt={{ base: "30px", md: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="brand.500"
                                fontWeight={"bold"}
                            >
                                House Call Fee
                            </Text>
                            <Text my="5" fontSize={15}>
                                This fee is required for initial consultations
                                or in-person followups - whever I come to your
                                animal's home. Housecalls cause less stress for
                                your animal, and allow me to better see the
                                environment it lives in so I can make
                                well-informed recommendations. Housecalls are
                                available within a 15 mile radius.
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
                    </Flex>
                </Stack>
            </Box>

            <Footer />
        </>
    );
};

export default Home;
