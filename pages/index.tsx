import {
    Box,
    Center,
    Divider,
    Flex,
    Heading,
    Tag,
    Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dr. Noel's Ark</title>
                <meta name="description" content="Dr. Noel's Ark" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                height={"100vh"}
                bgPosition="center"
                bgImage={
                    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(/images/nz.jpeg)"
                }
                bgSize="cover"
            >
                <Center height={"100%"}>
                    <Flex direction={"column"} align={"center"}>
                        <Box>
                            <Heading
                                fontSize={{ base: "40", md: "60" }}
                                color="white"
                            >
                                Dr. Noel's Ark
                            </Heading>
                            <Text
                                fontSize={{ base: "17", md: "23" }}
                                color="white"
                            >
                                NATURAL VETERINARY CARE
                            </Text>
                        </Box>
                        <Tag
                            mt={10}
                            colorScheme="brand"
                            variant={"solid"}
                            size={"lg"}
                            fontSize={20}
                        >
                            Coming Soon
                        </Tag>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

export default Home;
