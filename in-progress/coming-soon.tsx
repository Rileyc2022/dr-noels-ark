import { Box, Center, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const ComingSoon: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dr. Noel's Ark</title>
                <meta name="description" content="Dr. Noel's Ark" />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-16.png"
                    sizes="16x16"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-32.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon-2100.png"
                    sizes="2100x2100"
                />
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
                                DR. NOEL'S ARK
                            </Heading>
                            <Text
                                fontSize={{ base: "18.5", md: "27.7" }}
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

export default ComingSoon;