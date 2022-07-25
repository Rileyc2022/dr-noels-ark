import {
    Box,
    Flex,
    Link,
    SimpleGrid,
    Stack,
    Tag,
    Text,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import { ReactNode } from "react";
import { analytics } from "../constants/firebase";
import Logo from "./Logo";

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={"700"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

interface LargeWithLogoCentered {
    variant: "light" | "dark";
}

export default function LargeWithLogoCentered({
    variant,
}: LargeWithLogoCentered) {
    const isLight = variant === "light";
    return (
        <Box
            bg={isLight ? "gray.50" : "brand.800"}
            color={isLight ? "gray.700" : "gray.200"}
        >
            <Flex justify={"center"} py={10}>
                <SimpleGrid
                    columns={{ base: 2, sm: 2, lg: 4 }}
                    spacing={8}
                    px={10}
                >
                    <Stack align={"flex-start"} fontSize={{base: "sm", md: "initial"}}>
                        <ListHeader>Quick Links</ListHeader>

                        <Link href={"#about"}>About Me</Link>
                        <Link href={"#services"}>Services</Link>
                        <Link href={"#pricing"}>Pricing</Link>
                    </Stack>
                    <Stack align={"flex-start"} fontSize={{base: "sm", md: "initial"}}>
                        <ListHeader>Read More</ListHeader>
                        <Link href={"/resources/homeopathy"}>Homeopathy</Link>
                        <Link href={"/resources/nutrition"}>Nutrition</Link>
                        <Link href={"/resources/ayurveda"}>Ayurveda</Link>
                    </Stack>
                    <Stack align={"flex-start"} fontSize={{base: "sm", md: "initial"}}>
                        <ListHeader>Contact Me</ListHeader>
                        <Link
                            // fontSize={"sm"}
                            href={"/make-appointment"}
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
                            Make appointment
                        </Link>
                        <Link
                            // fontSize={"sm"}
                            href="tel:+15105605494"
                            onClick={() => {
                                analytics.then((analytics) => {
                                    analytics &&
                                        logEvent(
                                            analytics,
                                            "clicked_phone_number"
                                        );
                                });
                            }}
                        >
                            +1 (510) 560-5494
                        </Link>
                        <Link
                            // fontSize={"sm"}
                            href={
                                "https://www.linkedin.com/in/noel-crymble-bvsc-bsc-ba-llb-a92572124"
                            }
                            onClick={() => {
                                analytics.then((analytics) => {
                                    analytics &&
                                        logEvent(analytics, "clicked_linkedin");
                                });
                            }}
                        >
                            LinkedIn
                        </Link>
                    </Stack>
                    <Stack
                        align={"flex-start"}
                        fontSize={{ base: "sm", md: "initial" }}
                    >
                        <ListHeader>Portals</ListHeader>
                        <Stack direction={{base: "column-reverse", sm: "row"}} spacing={2}>
                            <Text mb={{base: "2", sm: "0"}}>Pet Portal</Text>
                            <Tag
                                // size={"sm"}
                                bg={isLight ? "blue.300" : "blue.500"}
                                ml={2}
                                color={"white"}
                            >
                                Coming Soon
                            </Tag>
                        </Stack>
                        <Stack direction={{base: "column-reverse", sm: "row"}} spacing={2}>
                            <Link
                                href={"/admin"}
                                onClick={() => {
                                    analytics.then((analytics) => {
                                        analytics &&
                                            logEvent(
                                                analytics,
                                                "clicked_admin_portal"
                                            );
                                    });
                                }}
                            >
                                Admin Portal
                            </Link>
                            <Tag
                                bg={isLight ? "red.300" : "red.500"}
                                ml={2}
                                // w={"100%"}
                                color={"white"}
                            >
                                Restricted
                            </Tag>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Flex>
            <Box py={10}>
                <Flex
                    align={"center"}
                    _before={{
                        content: '""',
                        borderBottom: "1px solid",
                        borderColor: isLight ? "gray.200" : "gray.600",
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: "1px solid",
                        borderColor: isLight ? "gray.200" : "gray.600",
                        flexGrow: 1,
                        ml: 8,
                    }}
                >
                    <Logo boxSize={10} fill={isLight ? "gray.400" : "white"} />
                </Flex>
                <Text pt={6} fontSize={"sm"} textAlign={"center"}>
                    Copyright © 2022 Dr. Noel's Ark. All rights reserved.
                </Text>
            </Box>
        </Box>
    );
}
