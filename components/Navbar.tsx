import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Heading,
    Avatar,
    Center,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    useToast,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ArrowForwardIcon,
    ArrowBackIcon,
    SettingsIcon,
    ViewIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import Logo from "./Logo";
import { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";

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
        // children: [
        //   {
        //     label: 'Explore Design Work',
        //     subLabel: 'Trending Design to inspire you',
        //     href: '#',
        //   },
        //   {
        //     label: 'New & Noteworthy',
        //     subLabel: 'Up-and-coming Designers',
        //     href: '#',
        //   },
        // ],
    },
    {
        label: "About",
        href: "/#about",
        // children: [
        //   {
        //     label: 'Job Board',
        //     subLabel: 'Find your dream design job',
        //     href: '#',
        //   },
        //   {
        //     label: 'Freelance Projects',
        //     subLabel: 'An exclusive list for contract work',
        //     href: '#',
        //   },
        // ],
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
                href: "#",
            },
            {
                label: "Nutrition",
                subLabel: "Learn more about nutrition",
                href: "#",
            },
            {
                label: "Ayurveda",
                subLabel: "Learn more about ayurveda",
                href: "#",
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
    const isBase = useBreakpointValue({ base: true, md: false });

    async function handleLogout() {
        // setError("");

        try {
            if (currentUser) await logOut();
            router.push("/");
            toast({
                title: `Logged out`,
                description: `Your pet's information is safe and secure.`,
                status: "success",
            });
        } catch {
            toast({
                title: `Failed to logout`,
                status: "error",
            });
        }
    }
    // const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
    // const [hidden, setHidden] = useState(!isOpen);

    return (
        <Box
            width="100%"
            // position={"absolute"}
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
            // 2px border on the bottom
            borderColor={variant == "light" ? "gray.200" : "none"}
            borderBottomWidth={(variant == "light") ? (bottomBorder ? 1 : 0) : 0}
        >
            <Flex
                // bg={useColorModeValue('white', 'gray.800')}
                color={"white"}
                minH={"60px"}
                py={{ base: 5 }}
                px={{ base: 6 }}
                // borderBottom={1}
                // borderStyle={'solid'}
                // borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={"center"}
                justify={"space-between"}
            >
                <Flex
                    // flex={{ base: 1 }}
                    // justify={{ base: 'center', md: 'start' }}
                    align="center"
                >
                    <Logo fill="brand.500" boxSize={10}></Logo>
                    {/* <Box position={"relative"}> */}

                    <Box
                        width={showCompanyName ? "18em" : "0px"}
                        opacity={showCompanyName ? "1" : "0"}
                        transition="1s ease"
                        overflow="hidden"
                    >
                        {/* <Collapse startingHeight={0} in={showCompanyName}> */}
                        {/* <motion.div
                        // {...getDisclosureProps()}
                        hidden={!showCompanyName}
                        initial={false}
                        // onAnimationStart={() => setHidden(false)}
                        // onAnimationComplete={() => setHidden(!isOpen)}
                            animate={{ width: showCompanyName ? "initial" : 0 }}
                            style={{overflow: "hidden", height: "50"}}
                        > */}
                        {/* {showCompanyName && ( */}
                        <Heading
                            color="brand.500"
                            ml="30px"
                            width={"100%"}
                            whiteSpace="nowrap"
                        >
                            DR. NOEL'S ARK
                        </Heading>

                        {/* // )} */}
                        {/* </motion.div> */}
                        {/* </Collapse> */}
                        {/* </Box> */}
                        {/* <Box
                        width={showCompanyName ? "initial" : 0}
                    >

                        </Box> */}
                    </Box>
                    <Flex display={{ base: "none", md: "flex" }} ml={10} >
                        <DesktopNav variant={variant} />
                    </Flex>
                </Flex>
                {/* <Button colorScheme='brand'>Orange</Button> */}


                {(!showCompanyName || !isBase) && (currentUser ? (
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            // borderRadius="20px 20px 0px 20px"
                            variant={"link"}
                            // variant={"solid"}
                            cursor={"pointer"}
                            minW={0}
                            borderColor="brand.500"
                            borderWidth={2}
                            color="brand.500"
                            _active={{ color: "gray.400" }}
                            // _hover={{backgroundColor: "brand.500"}}
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
                                    ? currentUser.displayName
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
                            {/* <br />
                            <Center>
                                <Avatar
                                    size="2xl"
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
                            </Center>
                            <br /> */}
                            <Center>
                                <p>{currentUser.displayName}</p>
                            </Center>
                            {/* <br /> */}
                            <MenuDivider />
                            <MenuItem
                                _hover={{ bg: "brand.500" }}
                                _focus={{ bg: "brand.500" }}
                                icon={<ViewIcon />}
                                as="a"
                                href="/portal"
                            >
                                View portal
                            </MenuItem>
                            <MenuItem
                                _hover={{ bg: "brand.500" }}
                                _focus={{ bg: "brand.500" }}
                                icon={<SettingsIcon />}
                            >
                                Account Settings
                            </MenuItem>
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
                    <Stack
                        // flex={{ base: 1, md: 0 }}
                        // justify={'flex-end'}
                        direction={"row"}
                        spacing={6}
                    >
                        <NextLink href={"/sign-in"} passHref>
                            <Button
                                as={"a"}
                                fontSize="15"
                                fontWeight={400}
                                variant={"link"}
                                colorScheme={"brand"}
                            >
                                Sign In
                            </Button>
                        </NextLink>
                        <NextLink href={"/create-portal-account"} passHref>
                            <Button
                                as="a"
                                display={{ base: "none", md: "inline-flex" }}
                                fontSize="15"
                                fontWeight={600}
                                color={"white"}
                                colorScheme={"brand"}
                                // bg={'pink.400'}

                                // _hover={{
                                //   bg: 'pink.300',
                                // }}
                            >
                                Sign Up
                            </Button>
                        </NextLink>
                        {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button> */}
                    </Stack>
                ))}
                <Flex
                    // flex={{ base: 1, md: 'auto' }}
                    // ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
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
                        // _hover={{color: "brand.700"}}
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
                                // scroll={false}
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
        <Stack bg={"white"} p={4} display={{ md: "none" }}>
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
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
