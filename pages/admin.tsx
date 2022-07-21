import { DeleteIcon } from "@chakra-ui/icons";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    Divider,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    onSnapshot,
    QueryDocumentSnapshot,
} from "firebase/firestore";
import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HeadTemplate from "../components/HeadTemplate";
import Navbar from "../components/Navbar";
import { db } from "../constants/firebase";
import { useAuth } from "../contexts/AuthContext";
import { checkIsAdmin } from "../functions/checkIsAdmin";

interface AdminProps {}

const Admin: React.FC<AdminProps> = ({}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [statusFetched, setStatusFetched] = useState(false);
    const { currentUser } = useAuth();
    useEffect(() => {
        if (currentUser) {
            checkIsAdmin(currentUser).then((isAdmin) => {
                setIsAdmin(isAdmin);
                setStatusFetched(true);
            });
            console.log(currentUser.uid);
        } else {
            setIsAdmin(false);
            setStatusFetched(true);
        }
    }, [currentUser]);
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
                            p={{ base: "50px", lg: "50" }}
                        >
                            <Text
                                fontSize={{ base: 25, lg: 40 }}
                                color={"brand.500"}
                                fontWeight={"bold"}
                                textAlign={"center"}
                            >
                                Admin Portal
                            </Text>
                            <Divider my={10} />
                            <Tabs
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
                            </Tabs>
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
                                You are not authorized to view this page.
                            </Text>
                            <Text color="white" mt="2">
                                Please log into an account with Administrator
                                privileges.
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
        </>
    );
};

const AppointmentTable = () => {
    const [appointmentRequests, setAppointmentRequests] = React.useState<
        QueryDocumentSnapshot[] | null
    >(null);
    const unsub = onSnapshot(
        collection(db, "appointment_requests"),
        (querySnapshot) => {
            const requests: any = [];
            querySnapshot.forEach((doc) => {
                requests.push(doc);
            });
            setAppointmentRequests(requests);
        }
    );
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
            <TableContainer w="100%" fontSize={16} py="10">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th fontFamily={"body"} fontSize="14">
                                Date & Time
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Name
                            </Th>
                            {/* <Th fontFamily={"body"} fontSize="14">
                                Last name
                            </Th> */}
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
                                    {/* <Td>
                                    {appointmentRequest.data()["Last name"]}
                                </Td> */}
                                    <Td>
                                        {
                                            appointmentRequest.data()[
                                                "Email address"
                                            ]
                                        }
                                    </Td>
                                    <Td>
                                        {
                                            appointmentRequest.data()[
                                                "Phone number"
                                            ]
                                        }
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
                                                        onClick={async () => {
                                                            await deleteDoc(
                                                                doc(
                                                                    db,
                                                                    "appointment_requests",
                                                                    appointmentRequest.id
                                                                )
                                                            );
                                                            toast({
                                                                title: "Appointment request deleted",
                                                                status: "success",
                                                            });
                                                            onDeleteClose();
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
            </TableContainer>

            <Modal isCentered isOpen={isMessageOpen} onClose={onMessageClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Message</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{message}</ModalBody>

                    <ModalFooter>
                        <Button colorScheme="brand" onClick={onMessageClose}>
                            Close
                        </Button>
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Admin;
