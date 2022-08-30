import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { InView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import Footer from "../components/Footer";
import HeadTemplate from "../components/HeadTemplate";
import Navbar from "../components/Navbar";
import { analytics } from "../constants/firebase";
// import ArkNarrowBackgroundPhoto from "../public/images/ark-background-phone.png";
// import ArkBackgroundPhoto from "../public/images/ark-background.png";
import AyurvedaPhoto from "../public/images/ayurveda.jpeg";
import FearFreeCertifiedPhoto from "../public/images/ff-certified-professional.png";
import FearFreeLogoPhoto from "../public/images/ff-logo.png";
import ForestMountainsPhoto from "../public/images/forest-mountains.jpeg";
import HomeopathyPhoto from "../public/images/homeopathy.jpeg";
import LookingAtCatPhoto from "../public/images/looking-at-cat-enhanced.png";
import HeroPortraitPhoto from "../public/images/no-background-portrait.png";
import NutritionPhoto from "../public/images/nutrition.jpeg";
import RiverPhoto from "../public/images/river.jpeg";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [allowedToCollapse, setAllowedToCollapse] = useState(false);
    const isBase = useBreakpointValue({ base: true, lg: false });
    useEffect(() => {
        setTimeout(() => {
            setAllowedToCollapse(true);
        }, 500);
    }, []);

    const pricingRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const { asPath } = useRouter();
    useEffect(() => {
        const hash = asPath.split("#")[1];
        let elem;
        if (hash == "pricing") {
            elem = pricingRef.current;
        } else if (hash == "about") {
            elem = aboutRef.current;
        } else if (hash == "services") {
            elem = aboutRef.current;
        }
        if (elem) {
            elem.scrollIntoView({ block: "start", behavior: "smooth" });
        }
    }, [asPath]);
    return (
        <>
            <HeadTemplate
                title="Dr. Noel's Ark - Natural Veterinary Care"
                description="Holistic veterinary practice offering homeopathy, nutritional support, and ayurvedic supplements. Available for house calls in the San Francisco Bay Area."
                short_description="Holistic Bay Area House Call Veterinarian"
                url="https://www.drnoelsark.com"
            />

            <Box zIndex={-10} position="absolute" height={"100vh"} w="100%">
                <Parallax
                    style={{
                        // position: "relative",
                        height: "100%",
                        // objectPosition: 'bottom right'
                        width: "100%",
                        // zIndex: -1,
                    }}
                    speed={-35}
                >
                    {/* <Box
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
                /> */}
                    {/* <Box height={"100%"}>

                    </Box> */}
                    {/* {isBase ? (
                        <Image
                        
                            
                        
                            src={ArkNarrowBackgroundPhoto}
                            alt="Ark logo outline background"
                            priority
                        />
                    ) : (
                            <Image
                            
                                
                            
                            src={ArkBackgroundPhoto}
                            alt="Ark logo outline background"
                            priority
                        />
                    )} */}

                    <Box position={"absolute"} bottom="0" right={"0"}>
                        <Icon
                            boxSize={{ base: "400", md: "500", lg: "705" }}
                            viewBox="0 0 705 659"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* <svg > */}
                            <mask
                                id="mask0_227_218"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="13"
                                y="46"
                                width="705"
                                height="659"
                            >
                                <rect
                                    x="13"
                                    y="46"
                                    width="705"
                                    height="659"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask0_227_218)">
                                <path
                                    d="M479.69 722.964L479.982 723.053L480.274 722.964L743.189 642.582H939.271L479.982 782.956L20.6932 642.582H216.775L479.69 722.964Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M501.051 692.271V591.276L666.413 641.683L501.051 692.271Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    // stroke="#1E4A50"

                                    strokeWidth="2"
                                />
                                <path
                                    d="M293.535 641.683L458.898 591.276V692.271L293.535 641.683Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M501.051 556.397V378.648L811.172 473.345L704.08 618.526L501.051 556.397Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M255.811 618.526L148.72 473.345L458.841 378.648V556.397L255.811 618.526Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M825.72 443.034L501.051 343.763V192.637L864.833 303.844L825.72 443.034Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M458.853 343.763L134.184 443.034L95.0709 303.844L458.853 192.637V343.763Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                                <path
                                    d="M480.283 151.416L479.99 151.326L479.698 151.416L268.385 215.994V112.713L479.99 48.0457L691.596 112.713V215.994L480.283 151.416Z"
                                    stroke={isBase ? "#388386" : "#64BBBE"}
                                    strokeWidth="2"
                                />
                            </g>
                            {/* </svg> */}
                        </Icon>
                    </Box>
                </Parallax>
            </Box>
            <InView triggerOnce={false}>
                {({ inView, ref }) => {
                    return (
                        <>
                            <Navbar
                                showCompanyName={!inView && allowedToCollapse}
                                withShadow={true}
                                bottomBorder={false}
                            />
                            <Box height={{ base: 760, lg: "100vh" }}>
                                <Flex
                                    direction={{ base: "column", lg: "row" }}
                                    justify={"space-evenly"}
                                    height="100%"
                                    px={10}
                                >
                                    <Box
                                        alignSelf={"center"}
                                        mt={20}
                                        // transform={{ base: "translateY(70px)" }}
                                    >
                                        <Heading
                                            fontSize={{
                                                base: "30",
                                                md: 40,
                                                lg: "70",
                                            }}
                                            color="white"
                                            ref={ref}
                                        >
                                            DR. NOEL'S ARK
                                        </Heading>
                                        <Text
                                            fontSize={{
                                                base: "18.5",
                                                lg: "32.4",
                                            }}
                                            color="text.sub-heading"
                                        >
                                            NATURAL VETERINARY CARE
                                        </Text>
                                        <Text
                                            mt={{ base: "5", lg: "10" }}
                                            color={"gray.300"}
                                            w={{ base: "100%", lg: "35em" }}
                                            fontSize={{
                                                base: "15",
                                                lg: "18",
                                            }}
                                        >
                                            Professional holistic veterinary
                                            services available as house calls
                                            for cats and dogs in Berkeley,
                                            Albany, Kensington, Montclair,
                                            Piedmont, Moraga, Orinda, Lafayette,
                                            Walnut Creek, and Danville.
                                        </Text>
                                        <Text
                                            mt={{ base: "5", lg: "10" }}
                                            color={"gray.300"}
                                            w={{ base: "100%", lg: "35em" }}
                                            fontSize={{
                                                base: "15",
                                                lg: "18",
                                            }}
                                        >
                                            Click below to make an appointment
                                            or request a free consultation with
                                            New Zealand veterinarian, Dr. Noel
                                            Crymble.
                                        </Text>
                                        <Flex
                                            flexDir={{
                                                base: "column",
                                                md: "row",
                                            }}
                                        >
                                            <NextLink
                                                href={"/#pricing"}
                                                passHref
                                            >
                                                <Button
                                                    w={{
                                                        base: "100%",
                                                        md: "initial",
                                                    }}
                                                    zIndex={10}
                                                    as={"a"}
                                                    fontSize={16}
                                                    // fontWeight={400}
                                                    // variant={"outline"}
                                                    // colorScheme={"brand"}
                                                    color="white"
                                                    backgroundColor="#b58961"
                                                    _hover={{
                                                        backgroundColor:
                                                            "#856447",
                                                    }}
                                                    _active={{
                                                        backgroundColor:
                                                            "#5d4631",
                                                    }}
                                                    mt={{ base: "5", lg: "10" }}
                                                    mr={2}
                                                    size={"lg"}
                                                    onClick={() => {
                                                        analytics.then(
                                                            (analytics) => {
                                                                analytics &&
                                                                    logEvent(
                                                                        analytics,
                                                                        "clicked_free_15_minute_consultation"
                                                                    );
                                                            }
                                                        );
                                                    }}
                                                >
                                                    Request Free Consultation
                                                </Button>
                                            </NextLink>
                                            <NextLink
                                                href={"/make-appointment"}
                                                passHref
                                            >
                                                <Button
                                                    w={{
                                                        base: "100%",
                                                        md: "initial",
                                                    }}
                                                    zIndex={10}
                                                    as={"a"}
                                                    fontSize={16}
                                                    variant={"solid"}
                                                    colorScheme={"brand"}
                                                    mt={{ base: "5", lg: "10" }}
                                                    size={"lg"}
                                                    onClick={() => {
                                                        analytics.then(
                                                            (analytics) => {
                                                                analytics &&
                                                                    logEvent(
                                                                        analytics,
                                                                        "clicked_make_appointment"
                                                                    );
                                                            }
                                                        );
                                                    }}
                                                >
                                                    Make Appointment
                                                </Button>
                                            </NextLink>
                                        </Flex>
                                    </Box>
                                    <Box
                                        width={{
                                            base: "60%",
                                            md: "40%",
                                            lg: "58%",
                                            xl: "38%",
                                        }}
                                        alignSelf={"center"}
                                        justifySelf={"flex-end"}
                                        mt="auto"
                                        fontSize={0}
                                        zIndex={-10}
                                    >
                                        {/* {isBase ? ( */}
                                        <Image
                                            //

                                            sizes="500px"
                                            src={HeroPortraitPhoto}
                                            alt="Dr. Noel Crymble smiling with arms crossed."
                                            priority
                                        />
                                        {/* ) : ( */}
                                        {/* <Image
                                                    width={"500px"}
                                                    layout
                                                src={HeroPortraitPhoto}
                                                alt="Dr. Noel Crymble smiling with arms crossed."
                                                priority
                                            />
                                        )} */}
                                    </Box>
                                </Flex>
                            </Box>
                        </>
                    );
                }}
            </InView>
            <Box id="about"></Box>
            <Box bgColor={"white"} py="120px" ref={aboutRef}>
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
                    mb={{ base: "40px", lg: "120px" }}
                    flexDirection={{ base: "column", lg: "row" }}
                >
                    <Box w={{ base: "80%", lg: "30%" }}>
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                fontSize={0}
                            >
                                <Image
                                    placeholder="blur"
                                    src={LookingAtCatPhoto}
                                    alt="Dr. Noel Crymble sitting down, smiling, holding fluffy gray cat"
                                ></Image>
                            </Box>
                        ) : (
                            <Parallax
                                speed={15}
                                style={{ height: "100%", width: "100%" }}
                            >
                                <Box
                                    borderColor={"brand.500"}
                                    borderWidth="10px"
                                    shadow="dark-lg"
                                    fontSize={0}
                                >
                                    <Image
                                        placeholder="blur"
                                        src={LookingAtCatPhoto}
                                        alt="Dr. Noel Crymble sitting down, smiling, holding fluffy gray cat"
                                    ></Image>
                                </Box>
                            </Parallax>
                        )}
                    </Box>
                    <Box
                        w={{ base: "80%", lg: "40%" }}
                        fontSize={16}
                        mt={{ base: "10" }}
                    >
                        <Stack spacing="5">
                            <Text>
                                I come from New Zealand where I received a
                                Bachelor of Science degree in Animal Science,
                                and a Bachelor of Veterinary Science from Massey
                                University's school of veterinary medicine in
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
                                Veterinary Homeopathy's qualifying course in the
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
                    fontSize={16}
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
                        <Stack>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                American Veterinary Medical Association
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                California Veterinary Medical Association
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                American Holistic Veterinary Association
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                American Association of Feline Practitioners
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                Academy of Veterinary Homeopathy
                            </Flex>
                            {/* <List> */}

                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                International Academy of Veterinary Homeopathy
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                Bay Area Homeopathic Association
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                New Zealand Veterinary Association
                            </Flex>

                            {/* </List> */}
                        </Stack>
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
                        <Stack>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                Professional Course in Veterinary Homeopathy
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                Advanced Course in Veterinary Homeopathy
                            </Flex>
                            <Flex>
                                <Icon
                                    marginTop={2.6}
                                    mr={3}
                                    as={RiGroupFill}
                                    color="brand.400"
                                />
                                Fear Free Professional
                            </Flex>

                            {/* <ListItem>
                                <ListIcon as={BsAwardFill} color="brand.400" />
                                Professional Course in Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BsAwardFill} color="brand.400" />
                                Advanced Course in Veterinary Homeopathy
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BsAwardFill} color="brand.400" />
                                Fear Free Professional
                            </ListItem> */}
                        </Stack>
                    </Box>
                </Flex>
                <Flex
                    display={"flex"}
                    alignItems={"flex-end"}
                    justify={"space-evenly"}
                    fontSize={16}
                    height={"130px"}
                >
                    <Box
                        width={{ base: "30%", lg: "20%" }}
                        fontSize={0}
                        // height={{ base: "80%", lg: "100%" }}
                        // flex={1}
                        // backgroundImage={
                        //     "/images/ff-certified-professional.png"
                        // }
                        // backgroundSize="contain"
                        // backgroundPosition={"center"}
                        // bgRepeat="no-repeat"
                    >
                        <Image
                            placeholder="blur"
                            src={FearFreeCertifiedPhoto}
                            alt="Fear Free Certification"
                        />
                    </Box>
                    <Box
                        width={{ base: "30%", lg: "15%" }}
                        fontSize={0}
                        // flex={1}
                        // backgroundImage={"/images/ff-logo.png"}
                        // backgroundSize="contain"
                        // backgroundPosition={"center"}
                        // bgRepeat="no-repeat"
                    >
                        <Image
                            placeholder="blur"
                            src={FearFreeLogoPhoto}
                            alt="Fear Free Certification Logo"
                        />
                    </Box>
                </Flex>
            </Box>
            <Box fontSize={0}>
                {isBase ? (
                    // <Box
                    //     height={"400px"}
                    //     width={"100%"}
                    //     bgSize={"cover"}
                    //     bgPos="center"
                    //     bgImage="/images/forest-mountains.jpeg"
                    // />

                    <Box
                        position={"relative"}
                        h="80vh"
                        w="100%"
                        clipPath={"inset(0)"}
                        zIndex="-20"
                    >
                        <Box
                            position={"fixed"}
                            height="100vh"
                            w="100%"
                            top="0"
                            bottom="0"
                            zIndex="-20"
                        >
                            <Image
                                layout="fill"
                                // height="100vh"
                                objectFit="cover"
                                placeholder="blur"
                                src={ForestMountainsPhoto}
                                alt="Forest and mountains background"
                                sizes="800px"
                                // width={"100%"}
                                // height={"400px"}
                            />
                        </Box>
                    </Box>
                ) : (
                    // <ParallaxBanner
                    //     layers={[
                    //         { image: "/images/forest-mountains.jpeg", speed: -35 },
                    //     ]}
                    //     className="aspect-[2/1]"
                    //     style={{ height: "100vh" }}
                    // />
                    <Box zIndex={-100} position="relative">
                        <Parallax speed={-35}>
                            <Image
                                placeholder="blur"
                                src={ForestMountainsPhoto}
                                alt="Forest and mountains background"
                                // sizes="5760px"
                                // width={5760}
                                // height={3840}
                            />
                        </Parallax>
                    </Box>
                )}
            </Box>
            <Box id="services"></Box>
            <Box bgColor={"white"} py="120" ref={servicesRef}>
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
                <Stack align={"center"} spacing="20">
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row-reverse" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                // height={"200px"}
                                width={"100%"}
                                fontSize={0}
                                // bgSize={"cover"}
                                // bgPos="center"
                                // bgImage="/images/homeopathy.jpeg"
                            >
                                <Image
                                    placeholder="blur"
                                    src={HomeopathyPhoto}
                                    objectFit="cover"
                                    alt="Bottle of homeopathy spilling out onto table with flowers"
                                />
                            </Box>
                        ) : (
                            <Parallax
                                speed={15}
                                style={{ height: "300px", width: "700px" }}
                            >
                                <Box
                                    borderColor={"brand.600"}
                                    borderWidth="10px"
                                    height={"100%"}
                                    // width={"100%"}
                                    overflow="hidden"
                                    shadow="dark-lg"
                                    // fontSize={0}
                                    // bgSize={"cover"}
                                    // bgPos="center"
                                    // bgImage="/images/homeopathy.jpeg"
                                >
                                    <Image
                                        placeholder="blur"
                                        src={HomeopathyPhoto}
                                        objectFit="cover"
                                        alt="Bottle of homeopathy spilling out onto table with flowers"
                                    />
                                </Box>
                            </Parallax>
                        )}
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
                            {/* <Text my="5" fontSize={16}>
                                Homeopathy is a medical system based on the
                                belief that the body can cure itself. Using tiny
                                amounts of natural substances, like plants and
                                minerals, homeopathic remedies are able to
                                stimulate the healing process.
                            </Text> */}
                            <Text my="5" fontSize={16}>
                                Homeopathy is a holistic medical healing
                                modality that works with the body to relieve
                                symptoms, restore vitality, and improve overall
                                health. Using tiny amounts of natural substances
                                like plants and minerals, homeopathic remedies
                                aim to stimulate the healing process.
                            </Text>
                            <NextLink href="/resources/homeopathy" passHref>
                                <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    colorScheme="brand"
                                    variant="outline"
                                    size={"sm"}
                                    as="a"
                                    fontSize={16}
                                >
                                    Learn More About Homeopathy
                                </Button>
                            </NextLink>
                        </Box>
                    </Flex>
                    <Divider></Divider>
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                // height={"200px"}
                                width={"100%"}
                                fontSize={0}
                                // bgSize={"cover"}
                                // bgPos="center"
                                // bgImage="/images/homeopathy.jpeg"
                            >
                                <Image
                                    placeholder="blur"
                                    src={NutritionPhoto}
                                    objectFit="cover"
                                    alt="Dalmatian dog eating watermelon surrounded by other fruits and vegetables"
                                />
                            </Box>
                        ) : (
                            <Parallax
                                speed={15}
                                style={{ height: "300px", width: "700px" }}
                            >
                                <Box
                                    borderColor={"brand.600"}
                                    borderWidth="10px"
                                    height={"100%"}
                                    // width={"100%"}
                                    overflow="hidden"
                                    // objectFit={"cover"}
                                    shadow="dark-lg"
                                    fontSize={0}
                                    // bgSize={"cover"}
                                    // bgPos="center"
                                    // bgImage="/images/homeopathy.jpeg"
                                >
                                    <Image
                                        placeholder="blur"
                                        src={NutritionPhoto}
                                        objectFit="cover"
                                        alt="Dalmatian dog eating watermelon surrounded by other fruits and vegetables"
                                    />
                                </Box>
                            </Parallax>
                        )}
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
                            <Text my="5" fontSize={16}>
                                For homeopathic remedies to be effective, the
                                pet must be nutritionally supported. Using
                                dietary protocols and nutritional supplements,
                                we can manage the complex needs of individual
                                animals, in order to prevent and treat diseases.
                            </Text>
                            <NextLink href="/resources/nutrition" passHref>
                                <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    colorScheme="brand"
                                    variant="outline"
                                    size={"sm"}
                                    as="a"
                                    fontSize={16}
                                >
                                    Learn More About Nutrition
                                </Button>
                            </NextLink>
                        </Box>
                    </Flex>
                    <Divider></Divider>
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row-reverse" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        {isBase ? (
                            <Box
                                borderColor={"brand.500"}
                                borderWidth="10px"
                                // height={"200px"}
                                width={"100%"}
                                fontSize={0}
                                // bgSize={"cover"}
                                // bgPos="center"
                                // bgImage="/images/homeopathy.jpeg"
                            >
                                <Image
                                    placeholder="blur"
                                    src={AyurvedaPhoto}
                                    objectFit="cover"
                                    alt="Small bowl filled with orange, powered herb, surrounded by plants"
                                />
                            </Box>
                        ) : (
                            <Parallax
                                speed={15}
                                style={{ height: "300px", width: "700px" }}
                            >
                                <Box
                                    borderColor={"brand.600"}
                                    borderWidth="10px"
                                    height={"100%"}
                                    // width={"100%"}
                                    overflow="hidden"
                                    // objectFit={"cover"}
                                    shadow="dark-lg"
                                    fontSize={0}
                                    // bgSize={"cover"}
                                    // bgPos="center"
                                    // bgImage="/images/homeopathy.jpeg"
                                >
                                    <Image
                                        placeholder="blur"
                                        src={AyurvedaPhoto}
                                        objectFit="cover"
                                        alt="Small bowl filled with orange, powered herb, surrounded by plants"
                                    />
                                </Box>
                            </Parallax>
                        )}
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
                            <Text my="5" fontSize={16}>
                                Ayurveda is a medicine system with historical
                                roots in the Indian subcontinent, where around
                                80% of the population use it. Ayurveda is based
                                on the belief that health and wellness depend on
                                a delicate balance between the mind, body, and
                                spirit. The main goal of Ayurvedic supplements
                                for pets is to promote good health, and
                                treatments are geared toward specific health
                                problems.
                            </Text>
                            <NextLink href="/resources/ayurveda" passHref>
                                <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    colorScheme="brand"
                                    variant="outline"
                                    size={"sm"}
                                    as="a"
                                    fontSize={16}
                                >
                                    Learn More About Ayurveda
                                </Button>
                            </NextLink>
                        </Box>
                    </Flex>
                </Stack>
            </Box>
            <Flex py="16" justify={{ base: "center" }} bgColor="brand.800">
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    width={{ base: "80%", lg: "100%" }}
                    minHeight="90vh"
                    alignItems="center"
                    justify="space-evenly"
                >
                    <Box>
                        <Text
                            color="gray.200"
                            fontSize={{ base: 20, sm: 35, lg: 30 }}
                            mb="8"
                            fontWeight={"bold"}
                        >
                            Why choose Dr. Noel's Ark?
                        </Text>
                        <Stack
                            spacing={{ base: 8, sm: 3 }}
                            fontSize={{ base: 16, sm: 18, lg: 20 }}
                            color="gray.200"
                            // stylePosition={"outside"}
                        >
                            <Flex>
                                <Icon
                                    mt={1}
                                    mr={3}
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Gentle, non-toxic approach
                            </Flex>
                            <Flex>
                                <Icon
                                    mt={1}
                                    mr={3}
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                No expensive drugs
                            </Flex>
                            <Flex>
                                <Icon
                                    mt={1}
                                    mr={3}
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Personalized care (no cookie-cutter treatments)
                            </Flex>
                            <Flex>
                                <Icon
                                    mt={1}
                                    mr={3}
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Less animal stress – consultations can be done
                                in your home
                            </Flex>
                            <Flex>
                                <Icon
                                    mt={1}
                                    mr={3}
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Focus on addressing causes of illness, not
                                masking symptoms
                            </Flex>
                            <Flex>
                                <Icon
                                    mt={1}
                                    mr={3}
                                    as={MdCheckCircle}
                                    color="green.300"
                                />
                                Goal to restore and maintain optimal health
                            </Flex>
                            {/* <ListItem>
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
                            </ListItem> */}
                        </Stack>
                    </Box>
                    <VStack spacing={4} mt={{ base: "16", md: 0 }}>
                        <NextLink href={"/#pricing"} passHref>
                            <Button
                                w="100%"
                                zIndex={10}
                                as={"a"}
                                fontSize={16}
                                // fontWeight={400}
                                variant={"solid"}
                                color="white"
                                backgroundColor="#b58961"
                                _hover={{
                                    backgroundColor: "#856447",
                                }}
                                _active={{
                                    backgroundColor: "#5d4631",
                                }}
                                size="lg"
                                p="10"
                                // mt={{ base: "10", lg: "0" }}
                                onClick={() => {
                                    analytics.then((analytics) => {
                                        analytics &&
                                            logEvent(
                                                analytics,
                                                "clicked_free_15_minute_consultation"
                                            );
                                    });
                                }}
                            >
                                Request Free Consultation
                            </Button>
                        </NextLink>
                        <Flex
                            color="gray.400"
                            justify={"stretch"}
                            align="center"
                            width={"100%"}
                        >
                            <Divider
                                orientation="horizontal"
                                borderColor={"gray.400"}
                            />
                            <Text mx="2">or</Text>
                            <Divider
                                orientation="horizontal"
                                borderColor={"gray.400"}
                            />
                        </Flex>
                        <NextLink href="/make-appointment" passHref>
                            <Button
                                w="100%"
                                as="a"
                                colorScheme={"brand"}
                                size="lg"
                                p="10"
                                fontSize={"16"}
                                mt={{ base: "10", lg: "0" }}
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
                    </VStack>
                </Flex>
            </Flex>
            <Box fontSize={0}>
                {isBase ? (
                    // <Box
                    //     height={"400px"}
                    //     width={"100%"}
                    //     bgSize={"cover"}
                    //     bgPos="center"
                    //     bgImage="/images/river.jpeg"
                    // />
                    // <Box>
                    <Box
                        position={"relative"}
                        h="80vh"
                        w="100%"
                        clipPath={"inset(0)"}
                        zIndex="-20"
                    >
                        <Box
                            position={"fixed"}
                            height="100vh"
                            w="100%"
                            top="0"
                            bottom="0"
                            zIndex="-20"
                        >
                            <Image
                                layout="fill"
                                // height="100vh"
                                objectFit="cover"
                                placeholder="blur"
                                src={RiverPhoto}
                                alt="Shallow river at sunset with foliage and mountains in the background"
                                sizes="800px"
                                // width={"100%"}
                                // height={"400px"}
                            />
                        </Box>
                    </Box>
                ) : (
                    // <ParallaxBanner
                    //     layers={[{ image: "/images/river.jpeg", speed: -35 }]}
                    //     className="aspect-[2/1]"
                    //     style={{ height: "100vh" }}
                    //     />
                    <Box zIndex={-100} position="relative">
                        <Parallax speed={-35}>
                            <Image
                                placeholder="blur"
                                src={RiverPhoto}
                                alt="Shallow river at sunset with foliage and mountains in the background"
                                // width={"100%"}

                                // sizes="5760px"
                                // width={5760}
                                // height={3840}
                            />
                        </Parallax>
                    </Box>
                )}
            </Box>
            <Box id="pricing"></Box>
            <Box bgColor={"white"} py="120" ref={pricingRef}>
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
                    >
                        Pricing
                    </Text>
                    <Box width="10" height="1" bg={"brand.600"}></Box>
                </Box>
                <Stack align={"center"} spacing="20">
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
                        <Box
                            mr={{ base: "0px", lg: "40px" }}
                            w={{ base: "auto", lg: "70%" }}
                            mt={{ base: "30px", lg: "0px" }}
                        >
                            <Text
                                fontSize={20}
                                color="#b58961"
                                fontWeight={"bold"}
                            >
                                Complimentary Introductory Phone Consultation
                            </Text>
                            <Text mt="5" fontSize="16">
                                I offer a free 15-minute phone consultation to help
                                you better understand my approach to natural
                                veterinary treatment, and to see if it is a fit
                                for you and your pet. This is a chance for you
                                to discuss some of the key health concerns and
                                goals concerning your pet. No veterinary medical
                                advice or recommendations will be given during
                                this session.
                            </Text>
                            <Text my="5" fontSize="16">
                                There is no obligation for you to book an
                                appointment following the free consultation.
                                However, for me to advise you on the appropriate
                                homeopathic and nutritional treatment to address
                                your pet's health issues, you will need to make
                                an appointment with me for an initial
                                consultation in your home.
                            </Text>
                            <NextLink
                                href="/make-appointment?for=free-15-minute-consultation"
                                passHref
                            >
                                <Button
                                    my={6}
                                    color="white"
                                    backgroundColor="#b58961"
                                    _hover={{
                                        backgroundColor: "#856447",
                                    }}
                                    _active={{
                                        backgroundColor: "#5d4631",
                                    }}
                                    // variant="outline"
                                    rightIcon={<ArrowForwardIcon />}
                                >
                                    Request Free Consultation
                                </Button>
                            </NextLink>
                        </Box>

                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"#b58961"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}
                        {!isBase && (
                            <Text
                                fontSize={20}
                                fontWeight="bold"
                                color="#b58961"
                                ml={{ base: "0", lg: "40px" }}
                                w={{ base: "auto", lg: "15%" }}
                                my={{ base: "30px", lg: "0px" }}
                            >
                                Free
                            </Text>
                        )}
                    </Flex>
                    {isBase && (
                        <Divider
                            orientation={"horizontal"}
                            borderColor={"#b58961"}
                            borderWidth=""
                        ></Divider>
                    )}
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
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
                                {"Initial Consultation" +
                                    (isBase ? " — $320" : "")}
                            </Text>
                            <Text my="5" fontSize="16">
                                This is an in-person consultation for me to get
                                to know your pet and the health issues needing
                                to be addressed. The fee includes a review of
                                previous medical records, a physical
                                examination, as well as a case analysis after
                                the consultation to decide on the appropriate
                                homeopathic remedy selection, and to determine
                                beneficial nutritional supplements as well as
                                dietary changes. My house call visit takes 1
                                hour.
                            </Text>
                            <NextLink
                                href="/make-appointment?for=initial-consultation"
                                passHref
                            >
                                <Button
                                    my={6}
                                    colorScheme={"brand"}
                                    // variant="outline"
                                    rightIcon={<ArrowForwardIcon />}
                                    onClick={() => {
                                        analytics.then((analytics) => {
                                            analytics &&
                                                logEvent(
                                                    analytics,
                                                    "clicked_make_initial_consultation_appointment"
                                                );
                                        });
                                    }}
                                >
                                    Make Appointment
                                </Button>
                            </NextLink>
                        </Box>

                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}
                        {!isBase && (
                            <Text
                                fontSize={20}
                                fontWeight="bold"
                                color="brand.500"
                                ml={{ base: "0", lg: "40px" }}
                                w={{ base: "auto", lg: "15%" }}
                                my={{ base: "30px", lg: "0px" }}
                            >
                                $320
                            </Text>
                        )}
                    </Flex>
                    {isBase && (
                        <Divider
                            orientation={"horizontal"}
                            borderColor={"brand.500"}
                            borderWidth=""
                        ></Divider>
                    )}
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
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
                                {"Phone Follow-Up" + (isBase ? " — $80" : "")}
                            </Text>
                            <Text my="5" fontSize="16">
                                Follow-up sessions by phone are set for 30
                                minutes. Any additional time is billed
                                incrementally at an hourly rate of $160. I will
                                check the progress your pet is making, and may
                                provide a change of recommendation either to
                                remedy, supplements, or diet. Phone follow-ups
                                are recommended every 4 to 6 weeks.
                            </Text>
                            <NextLink
                                href="/make-appointment?for=phone-follow-up"
                                passHref
                            >
                                <Button
                                    my={6}
                                    colorScheme={"brand"}
                                    // variant="outline"
                                    rightIcon={<ArrowForwardIcon />}
                                    onClick={() => {
                                        analytics.then((analytics) => {
                                            analytics &&
                                                logEvent(
                                                    analytics,
                                                    "clicked_make_phone_follow_up_appointment"
                                                );
                                        });
                                    }}
                                >
                                    Make Appointment
                                </Button>
                            </NextLink>
                        </Box>

                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}
                        {!isBase && (
                            <Text
                                fontSize={20}
                                fontWeight="bold"
                                color="brand.500"
                                ml={{ base: "0", lg: "40px" }}
                                w={{ base: "auto", lg: "15%" }}
                                my={{ base: "30px", lg: "0px" }}
                            >
                                $80
                            </Text>
                        )}
                    </Flex>
                    {isBase && (
                        <Divider
                            orientation={"horizontal"}
                            borderColor={"brand.500"}
                            borderWidth=""
                        ></Divider>
                    )}
                    <Flex
                        w={{ base: "80%", lg: "80%" }}
                        flexDirection={{ base: "column", lg: "row" }}
                        align="center"
                        justify={"space-evenly"}
                    >
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
                                {"House Call Follow Up" +
                                    (isBase ? " — $160" : "")}
                            </Text>
                            <Text my="5" fontSize="16">
                                This fee covers a 1/2 hour in-person follow up
                                visit at your home. House calls allow me to
                                better reassess your pet so that I can make
                                well-informed recommendations.
                            </Text>
                            <NextLink
                                href="/make-appointment?for=house-call-follow-up"
                                passHref
                            >
                                <Button
                                    my={6}
                                    colorScheme={"brand"}
                                    // variant="outline"
                                    rightIcon={<ArrowForwardIcon />}
                                    onClick={() => {
                                        analytics.then((analytics) => {
                                            analytics &&
                                                logEvent(
                                                    analytics,
                                                    "clicked_make_house_call_follow_up_appointment"
                                                );
                                        });
                                    }}
                                >
                                    Make Appointment
                                </Button>
                            </NextLink>
                        </Box>
                        {!isBase && (
                            <Divider
                                orientation={"vertical"}
                                borderColor={"brand.500"}
                                borderWidth=""
                                height="100"
                            ></Divider>
                        )}
                        {!isBase && (
                            <Text
                                fontSize={20}
                                fontWeight="bold"
                                color="brand.500"
                                ml={{ base: "0", lg: "40px" }}
                                w={{ base: "auto", lg: "15%" }}
                                my={{ base: "30px", lg: "0px" }}
                            >
                                $160
                            </Text>
                        )}
                    </Flex>
                </Stack>
            </Box>
            {/* <Flex justify={"center"} alignItems={"center"} bgColor="gray.100">
                <NextLink href="/make-appointment" passHref>
                    <Button
                        as="a"
                        colorScheme={"brand"}
                        size="md"
                        p="10"
                        fontSize={"16"}
                        my={20}
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
            </Flex> */}
            <Footer variant="light" />
        </>
    );
};

export default Home;
