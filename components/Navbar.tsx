import {
    ArrowBackIcon,
    CalendarIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CloseIcon,
    HamburgerIcon,
    ViewIcon,
} from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Center,
    Collapse,
    Flex,
    Heading,
    Icon,
    IconButton,
    Link,
    LinkBox,
    LinkOverlay,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { analytics } from "../constants/firebase";
import { useAuth } from "../contexts/AuthContext";
import { checkIsAdmin } from "../functions/checkIsAdmin";
import Logo from "./Logo";

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/#about",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Resources",
        href: "#",
        children: [
            {
                label: "Homeopathy",
                subLabel: "Learn more about homeopathy",
                href: "/resources/homeopathy",
            },
            {
                label: "Nutrition",
                subLabel: "Learn more about nutrition",
                href: "/resources/nutrition",
            },
            {
                label: "Ayurveda",
                subLabel: "Learn more about ayurveda",
                href: "/resources/ayurveda",
            },
        ],
    },
    {
        label: "Pricing",
        href: "/#pricing",
    },
];

interface WithSubnavigationProps {
    variant?: "light" | "dark";
    showCompanyName?: boolean;
    withShadow?: boolean;
    bottomBorder?: boolean;
}

export default function WithSubnavigation({
    variant = "dark",
    showCompanyName = false,
    withShadow = true,
    bottomBorder = false,
}: WithSubnavigationProps) {
    const { isOpen, onToggle } = useDisclosure();
    const { currentUser, logOut } = useAuth();
    const router = useRouter();
    const toast = useToast();
    const isBase = useBreakpointValue({ base: true, lg: false });
    const [isAdmin, setIsAdmin] = useState(false);
    async function handleLogout() {
        try {
            if (currentUser) await logOut();
            router.push("/");
            toast({
                title: `Logged out`,
                description: `Your account is secured.`,
                status: "success",
            });
        } catch {
            toast({
                title: `Failed to logout`,
                status: "error",
            });
        }
    }

    useEffect(() => {
        (async () => {
            if (currentUser) {
                const isAdmin = await checkIsAdmin(currentUser);
                setIsAdmin(isAdmin);
            }
        })();
    }, [currentUser]);

    return (
        <Box
            width="100%"
            position="fixed"
            bg={
                variant == "dark"
                    ? showCompanyName
                        ? "rgba(18, 52, 63, 0.9)"
                        : "rgba(18, 52, 63, 0)"
                    : "none"
            }
            backdropFilter={showCompanyName ? "blur(5px)" : "blur(0px)"}
            zIndex={2}
            shadow={
                withShadow ? (showCompanyName ? "dark-lg" : "none") : "none"
            }
            transition="box-shadow 1s ease, background-color 1s ease"
            borderColor={variant == "light" ? "gray.200" : "none"}
            borderBottomWidth={variant == "light" ? (bottomBorder ? 1 : 0) : 0}
        >
            <Flex
                color={"white"}
                minH={"60px"}
                py={{ base: 5 }}
                px={{ base: 6 }}
                align={"center"}
                justify={"space-between"}
            >
                <Flex align="center">
                    <LinkBox>
                        <LinkOverlay href="/">
                            <Logo fill="brand.500" boxSize={10} />
                        </LinkOverlay>
                    </LinkBox>
                    <Box
                        width={showCompanyName ? "18em" : "0px"}
                        opacity={showCompanyName ? "1" : "0"}
                        transition="1s ease"
                        overflow="hidden"
                    >
                        <LinkBox>
                            <LinkOverlay href="/">
                                <Heading
                                    color="brand.500"
                                    ml="30px"
                                    width={"100%"}
                                    whiteSpace="nowrap"
                                >
                                    DR. NOEL'S ARK
                                </Heading>
                            </LinkOverlay>
                        </LinkBox>
                    </Box>
                    <Flex display={{ base: "none", lg: "flex" }} ml={10}>
                        <DesktopNav variant={variant} />
                    </Flex>
                </Flex>
                {(!showCompanyName || !isBase) &&
                    (currentUser ? (
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                                borderColor="brand.500"
                                borderWidth={2}
                                color="brand.500"
                                _active={{ color: "gray.400" }}
                            >
                                <Flex align={"center"} flexDirection="row">
                                    <Avatar
                                        name={
                                            currentUser.email
                                                ? currentUser.email
                                                : undefined
                                        }
                                        src={
                                            currentUser.photoURL
                                                ? currentUser.photoURL
                                                : undefined
                                        }
                                    />
                                    <Text mx="3">
                                        {currentUser.displayName
                                            ? currentUser.displayName.split(
                                                  ","
                                              )[0]
                                            : currentUser.email?.split("@")[0]}
                                    </Text>
                                </Flex>
                            </MenuButton>
                            <MenuList
                                alignItems={"center"}
                                border={"0px"}
                                boxShadow={"xl"}
                                bg={"brand.600"}
                            >
                                <Center>
                                    <Text>
                                        {" "}
                                        {currentUser.displayName
                                            ? currentUser.displayName.split(
                                                  ","
                                              )[0]
                                            : currentUser.email?.split("@")[0]}
                                    </Text>
                                </Center>
                                <MenuDivider />
                                <MenuItem
                                    _hover={{ bg: "brand.500" }}
                                    _focus={{ bg: "brand.500" }}
                                    icon={<ViewIcon />}
                                    as="a"
                                    href="/portal"
                                >
                                    Pet Portal
                                </MenuItem>
                                {isAdmin && (
                                    <MenuItem
                                        _hover={{ bg: "brand.500" }}
                                        _focus={{ bg: "brand.500" }}
                                        icon={<CalendarIcon />}
                                        as="a"
                                        href="/admin"
                                    >
                                        Admin Portal
                                    </MenuItem>
                                )}
                                <MenuItem
                                    _hover={{ bg: "brand.500" }}
                                    _focus={{ bg: "brand.500" }}
                                    icon={<ArrowBackIcon />}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
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
                                size={"md"}
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
                    ))}
                <Flex display={{ base: "flex", lg: "none" }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        colorScheme="brand"
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = ({ variant }: WithSubnavigationProps) => {
    const linkColor = variant == "light" ? "brand.500" : "white";
    const linkHoverColor = "#A9B9BF";
    const popoverContentBgColor = "brand.600";

    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? "#"}
                                fontSize="15"
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: "none",
                                    color: linkHoverColor,
                                }}
                            >
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={"xl"}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={"xl"}
                                minW={"sm"}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: "brand.500" }}
        >
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "white" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack bg={"white"} p={4} display={{ lg: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    {children &&
                        children.map((child) => (
                            <Link
                                key={child.label}
                                py={2}
                                href={child.href}
                                onClick={() => {
                                    if (child.href == "/make-appointment") {
                                        analytics.then((analytics) => {
                                            analytics &&
                                                logEvent(
                                                    analytics,
                                                    "clicked_make_appointment"
                                                );
                                        });
                                    }
                                }}
                            >
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
