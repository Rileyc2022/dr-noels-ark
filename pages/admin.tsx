import { DeleteIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Stack,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tag,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import {
    collection,
    deleteDoc,
    doc,
    query,
    DocumentData,
    onSnapshot,
    orderBy,
    QueryDocumentSnapshot,
} from "firebase/firestore";
import moment from "moment";
import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import HeadTemplate from "../components/HeadTemplate";
import Navbar from "../components/Navbar";
import SimpleLink from "../components/SimpleLink";
import { db } from "../constants/firebase";
import { useAuth } from "../contexts/AuthContext";
import { checkIsAdmin } from "../functions/checkIsAdmin";
import randomPick from "../functions/randomPick";

interface AdminProps {}

const Admin: React.FC<AdminProps> = ({}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [statusFetched, setStatusFetched] = useState(false);
    const { currentUser } = useAuth();
    // useEffect(() => {
    //     if (currentUser) {
    //         checkIsAdmin(currentUser).then((isAdmin) => {
    //             setStatusFetched(true);
    //             setIsAdmin(isAdmin);
    //         });
    //         console.log(currentUser.uid);
    //     } else {
    //         setIsAdmin(false);
    //         setStatusFetched(true);
    //     }
    // }, [currentUser]);

    useEffect(() => {
        if (currentUser) {
            checkIsAdmin(currentUser).then((isAdmin) => {
                setStatusFetched(true);
                setIsAdmin(isAdmin);
            });
            console.log(currentUser.uid);
        }
    }, [currentUser]);
    useEffect(() => {
        setTimeout(() => {
            setStatusFetched(true);
        }, 1500);
        //     if (!currentUser) {
        //         setStatusFetched(true);

        //     }
    }, []);

    // useEffect(() => {

    //     if (currentUser) {
    //         checkIsAdmin(currentUser).then((isAdmin) => {
    //             setStatusFetched(true);
    //             setIsAdmin(isAdmin);
    //         });
    //         console.log(currentUser.uid);
    //     }
    //     else {
    //         setStatusFetched(true);

    //         setIsAdmin(false);
    //     }

    // }, []);
    return (
        <>
            <HeadTemplate
                title="Admin Portal - Dr. Noel's Ark"
                description="Dr. Noel's Ark admin portal."
                short_description="Dr. Noel's Ark admin portal."
                url="https://www.drnoelsark.com/admin"
            />
            <Navbar
                variant="dark"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>

            {!statusFetched ? (
                <Box height="100vh">
                    <Flex
                        alignItems="center"
                        justify={"center"}
                        height={"100%"}
                    >
                        <Spinner color="white"></Spinner>
                    </Flex>
                </Box>
            ) : isAdmin ? (
                <Box minH="100vh" bgColor={"gray.200"} py="120">
                    <Flex alignItems="center" flexDirection={"column"}>
                        <Box
                            bgColor="white"
                            width={"90%"}
                            p={{ base: "0px", lg: "50" }}
                        >
                            <Box p={{ base: "50px", lg: "0" }}>
                                <Text
                                    fontSize={{ base: 25, lg: 40 }}
                                    color={"brand.500"}
                                    fontWeight={"bold"}
                                    textAlign={"center"}
                                >
                                    Admin Portal
                                </Text>
                                {/* <Divider my={10} /> */}
                                <Text
                                    color="brand.600"
                                    fontSize={20}
                                    my={10}
                                    textAlign={{
                                        base: "center",
                                        lg: "initial",
                                    }}
                                >
                                    Appointment Requests
                                </Text>
                            </Box>
                            {/* <Tabs
                                isFitted
                                variant={"enclosed-colored"}
                                colorScheme="brand"
                                w="100%"
                            >
                                <TabList>
                                    <Tab fontSize={18}>
                                        Appointment Requests
                                    </Tab>
                                    <Tab fontSize={18}>Your patients</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel bgColor="white">
                                        <AppointmentTable />
                                    </TabPanel>
                                    <TabPanel>
                                        <Text>No pet portal accounts yet.</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs> */}
                            <AppointmentTable />
                        </Box>
                    </Flex>
                </Box>
            ) : (
                <Box height="100vh">
                    <Flex
                        alignItems="center"
                        justify={"center"}
                        height={"100%"}
                    >
                        <Box p="16" borderWidth={1} m={10}>
                            <Text color="white">
                                This page is for administrator access only.
                            </Text>
                            <Flex mt="10" w="100%">
                                <NextLink href={"/sign-in"} passHref>
                                    <Button
                                        as={"a"}
                                        fontSize="15"
                                        fontWeight={400}
                                        colorScheme={"brand"}
                                        flexGrow={1}
                                        mr={1}
                                    >
                                        Sign In
                                    </Button>
                                </NextLink>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            )}
            <Footer variant="dark"></Footer>
        </>
    );
};

const AppointmentTable = () => {
    const [appointmentRequests, setAppointmentRequests] = React.useState<
        QueryDocumentSnapshot[] | null
    >(null);

    useEffect(() => {
        const unsub = onSnapshot(
            query(
                collection(db, "appointment_requests"),
                orderBy("timestamp", "desc")
            ),
            (querySnapshot) => {
                const requests: any = [];
                querySnapshot.forEach((doc) => {
                    requests.push(doc.data());
                });
                // requests.sort(function (a: any, b: any) {
                //     // alert(a.timestamp + b.timestamp)
                //     return a.timestamp + b.timestamp;
                // });
                console.log(requests);
                setAppointmentRequests(requests);
            }
        );
        return unsub;
    }, []);

    const {
        isOpen: isMessageOpen,
        onOpen: onMessageOpen,
        onClose: onMessageClose,
    } = useDisclosure();
    const [message, setMessage] = useState("");
    const toast = useToast();
    const {
        isOpen: isDeleteOpen,
        onOpen: onDeleteOpen,
        onClose: onDeleteClose,
    } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
            {/* <TableContainer w="100%" fontSize={16} py="10">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th fontFamily={"body"} fontSize="14">
                                Date & Time
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Name
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Email address
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Phone number
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                City
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Preferred day/time
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Actions
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {appointmentRequests?.map(
                            (
                                appointmentRequest: QueryDocumentSnapshot<DocumentData>
                            ) => (
                                <Tr key={appointmentRequest.id}>
                                    <Td>
                                        {
                                            appointmentRequest.data()[
                                                "Date and Time"
                                            ]
                                        }
                                    </Td>
                                    <Td>
                                        {appointmentRequest.data()[
                                            "First name"
                                        ] +
                                            " " +
                                            appointmentRequest.data()[
                                                "Last name"
                                            ]}
                                    </Td>
                                    <Td>
                                        <NextLink
                                            href={`mailto:${
                                                appointmentRequest.data()[
                                                    "Email address"
                                                ]
                                            }`}
                                            passHref
                                        >
                                            <Link color="brand.500">
                                                <EmailIcon mr={2} />
                                                {
                                                    appointmentRequest.data()[
                                                        "Email address"
                                                    ]
                                                }
                                            </Link>
                                        </NextLink>
                                    </Td>
                                    <Td>
                                        <NextLink
                                            href={`tel:${
                                                appointmentRequest.data()[
                                                    "Phone number"
                                                ]
                                            }`}
                                            passHref
                                        >
                                            <Link color="brand.500">
                                                <PhoneIcon mr={2} />
                                                {
                                                    appointmentRequest.data()[
                                                        "Phone number"
                                                    ]
                                                }
                                            </Link>
                                        </NextLink>
                                    </Td>
                                    <Td>{appointmentRequest.data()["City"]}</Td>
                                    <Td>
                                        {
                                            appointmentRequest.data()[
                                                "Preferred day of week"
                                            ]
                                        }{" "}
                                        /{" "}
                                        {
                                            appointmentRequest.data()[
                                                "Preferred time of day"
                                            ]
                                        }
                                    </Td>
                                    <Td>
                                        <Button
                                            mr={2}
                                            onClick={() => {
                                                setMessage(
                                                    appointmentRequest.data()[
                                                        "Message"
                                                    ]
                                                );
                                                onMessageOpen();
                                            }}
                                            key={
                                                appointmentRequest.data()[
                                                    "Message"
                                                ]
                                            }
                                            colorScheme="blue"
                                        >
                                            Message
                                        </Button>
                                        <Button
                                            onClick={onDeleteOpen}
                                            colorScheme="red"
                                            rightIcon={<DeleteIcon />}
                                        >
                                            Delete
                                        </Button>
                                        <AlertDialog
                                            leastDestructiveRef={cancelRef}
                                            onClose={onDeleteClose}
                                            isOpen={isDeleteOpen}
                                            isCentered
                                        >
                                            <AlertDialogOverlay />
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    Delete request?
                                                </AlertDialogHeader>
                                                <AlertDialogCloseButton />
                                                <AlertDialogBody>
                                                    Are you sure you want to
                                                    delete this request? This
                                                    action is irreversible.
                                                </AlertDialogBody>
                                                <AlertDialogFooter>
                                                    <Button
                                                        ref={cancelRef}
                                                        onClick={onDeleteClose}
                                                    >
                                                        No
                                                    </Button>
                                                    <Button
                                                        onClick={() => {
                                                            onDeleteClose();
                                                            deleteDoc(
                                                                doc(
                                                                    db,
                                                                    "appointment_requests",
                                                                    appointmentRequest.id
                                                                )
                                                            ).then(() => {
                                                                toast({
                                                                    title: "Appointment request deleted",
                                                                    status: "success",
                                                                });
                                                            })
                                                        }}
                                                        colorScheme="red"
                                                        ml={3}
                                                    >
                                                        Yes
                                                    </Button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </Td>
                                </Tr>
                            )
                        )}
                    </Tbody>
                </Table>
            </TableContainer> */}

            {/* {appointmentRequests?.map(
                (
                    apReq: QueryDocumentSnapshot<DocumentData>
                ) => (
                    apReq.data()
                ))} */}
            {/* // JSON.stringify(apReq) */}
            <Accordion defaultIndex={[0]} allowMultiple allowToggle>
                {appointmentRequests?.map((apReq: DocumentData) => (
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <HStack
                                    spacing={{ base: 2, md: 5 }}
                                    flex="1"
                                    textAlign={"left"}
                                >
                                    <Avatar
                                        // mr={3}
                                        size={{ base: "sm", md: "md" }}
                                        name={
                                            apReq["First name"] +
                                            " " +
                                            apReq["Last name"]
                                        }
                                        bgColor={apReq.color + ".500"}
                                        color="white"
                                        fontWeight={"bold"}
                                    ></Avatar>
                                    <Text
                                        fontSize={{ base: 16, md: "lg" }}
                                        mr={{ base: 0, md: 0 }}
                                    >
                                        {apReq["First name"] +
                                            " " +
                                            apReq["Last name"]}
                                    </Text>
                                    {moment().diff(
                                        moment(apReq.timestamp.toDate()),
                                        "minutes"
                                    ) <= 50 && (
                                        <Badge colorScheme="green">New</Badge>
                                    )}
                                </HStack>
                                <Text
                                    fontSize={{ base: "xs", md: "sm" }}
                                    mr={{ base: "1", md: "10" }}
                                >
                                    {moment(apReq.timestamp.toDate()).fromNow()}
                                </Text>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack spacing={4}>
                                <HStack spacing={4}>
                                    <Tag
                                    // variant="solid"
                                    // colorScheme="gray"
                                    >
                                        {apReq["City"]}
                                    </Tag>
                                    <Tag
                                    // variant="solid"
                                    // colorScheme="gray"
                                    >
                                        {`Prefers ${apReq["Preferred day of week"]} ${apReq["Preferred time of day"]}s`}
                                    </Tag>
                                </HStack>
                                <Text fontSize={16}>{apReq["Message"]}</Text>
                                <Box>
                                    <NextLink
                                        href={`mailto:${apReq["Email address"]}`}
                                        passHref
                                    >
                                        <Button
                                            colorScheme="brand"
                                            mr={5}
                                            fontSize={{ base: 13, md: 16 }}
                                            mt={{ base: 2, sm: 0 }}
                                            w={{ base: "100%", sm: "initial" }}
                                        >
                                            <EmailIcon mr={2} />
                                            {apReq["Email address"]}
                                        </Button>
                                    </NextLink>
                                    <NextLink
                                        href={`tel:${apReq["Phone number"]}`}
                                        passHref
                                    >
                                        <Button
                                            colorScheme="brand"
                                            fontSize={{ base: 13, md: 16 }}
                                            mt={{ base: 2, sm: 0 }}
                                            w={{ base: "100%", sm: "initial" }}
                                        >
                                            <PhoneIcon mr={2} />
                                            {apReq["Phone number"]}
                                        </Button>
                                    </NextLink>
                                </Box>
                            </Stack>
                            {/* <NextLink
                                            href={`mailto:${
                                                appointmentRequest.data()[
                                                    "Email address"
                                                ]
                                            }`}
                                            passHref
                                        >
                                            <Link color="brand.500">
                                                <EmailIcon mr={2} />
                                                {
                                                    appointmentRequest.data()[
                                                        "Email address"
                                                    ]
                                                }
                                            </Link>
                                        </NextLink>
                                    </Td>
                                    <Td>
                                        <NextLink
                                            href={`tel:${
                                                appointmentRequest.data()[
                                                    "Phone number"
                                                ]
                                            }`}
                                            passHref
                                        >
                                            <Link color="brand.500">
                                                <PhoneIcon mr={2} />
                                                {
                                                    appointmentRequest.data()[
                                                        "Phone number"
                                                    ]
                                                }
                                            </Link>
                                        </NextLink> */}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. */}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            {/* <Box p="10" shadow="md" borderRadius={20} m={20}>
                    <Flex justify={"space-between"}>
                        <Avatar
                            size={"xl"}
                            name={
                                apReq["First name"] + " " + apReq["Last name"]
                            }
                            bgColor={apReq.color + ".500"}
                        ></Avatar>
                        <Box>
                            <Text fontSize="lg" fontWeight="bold">
                                {apReq["First name"] + " " + apReq["Last name"]}
                            </Text>
                        </Box>
                        <Box>
                            <Button>Archive</Button>
                            <Button ml={2} colorScheme="red" variant={"outline"} ><DeleteIcon/></Button>
                        </Box>
                    </Flex>
                 </Box> */}

            {/* <Modal isCentered isOpen={isMessageOpen} onClose={onMessageClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Message</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{message}</ModalBody>

                    <ModalFooter>
                        <Button colorScheme="brand" onClick={onMessageClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </>
    );
};

export default Admin;
