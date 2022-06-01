import { DeleteIcon } from "@chakra-ui/icons";
import {
    Flex,
    Tab,
    Table,
    TableCaption,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    Text,
    useDisclosure,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Divider,
    Box,
    useToast,
} from "@chakra-ui/react";
import {
    onSnapshot,
    doc,
    collection,
    QueryDocumentSnapshot,
    deleteDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../constants/firebase";

interface adminProps {}

const admin: React.FC<adminProps> = ({}) => {
    return (
        <>
            <Navbar
                variant="dark"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
            <Box minH="100vh" bgColor={"gray.200"} py="120">
                <Flex alignItems="center" flexDirection={"column"}>
                    <Box
                        bgColor="white"
                        width={"90%"}
                        p={{ base: "50px", md: "50" }}
                    >
                        <Text
                            fontSize={{ base: 25, md: 40 }}
                            color={"brand.500"}
                            fontWeight={"bold"}
                            textAlign={"center"}
                            // pt="50"
                        >
                            Admin Portal
                        </Text>
                        <Divider my={10} />

                        {/* <Box>
    <Text>Current recommendation</Text>
    
    </Box> */}
                        <Tabs
                            isFitted
                            variant={"enclosed-colored"}
                            colorScheme="brand"
                            w="100%"
                        >
                            <TabList>
                                <Tab fontSize={18}>Appointment Requests</Tab>
                                <Tab fontSize={18}>Your patients</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel bgColor="white">
                                    <AppointmentTable />
                                </TabPanel>
                                <TabPanel>
                                    <p>No patients yet</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

const AppointmentTable = () => {
    // const appointments = [
    //     {
    //         date: "5/10",
    //         time: "5:15pm",
    //         name: "Riley Crymble",
    //         // anim
    //     },
    // ];
    const [appointmentRequests, setAppointmentRequests] = React.useState<
        QueryDocumentSnapshot[] | null
    >(null);
    const unsub = onSnapshot(
        collection(db, "Appointment Requests"),
        (querySnapshot) => {
            // console.log("Current data: ", doc.data());
            const requests: any = [];
            querySnapshot.forEach((doc) => {
                requests.push(doc);
            });
            setAppointmentRequests(requests);
        }
    );
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [message, setMessage] = useState("");
    const toast = useToast();

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
                                First name
                            </Th>
                            <Th fontFamily={"body"} fontSize="14">
                                Last name
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
                                Actions
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* initialValues={{ "Date and Time": "", "First name": "", "Last name": "", "Email address": "", "Phone number": "", "City": "", "Message": "" }} */}

                        {appointmentRequests?.map((appointmentRequest: any) => (
                                <Tr>
                                    <Td>
                                        {appointmentRequest.data()["Date and Time"]}
                                    </Td>
                                    <Td>{appointmentRequest.data()["First name"]}</Td>
                                    <Td>{appointmentRequest.data()["Last name"]}</Td>
                                    <Td>
                                        {appointmentRequest.data()["Email address"]}
                                    </Td>
                                    <Td>
                                        {appointmentRequest.data()["Phone number"]}
                                    </Td>
                                    <Td>{appointmentRequest.data()["City"]}</Td>
                                    <Td>
                                        <Button
                                            onClick={() => {
                                                setMessage(
                                                    appointmentRequest.data()[
                                                        "Message"
                                                    ]
                                                );
                                                onOpen();
                                            }}
                                            key={appointmentRequest.data()["Message"]}
                                            // m={4}
                                            colorScheme="blue"
                                        >
                                            Message
                                        </Button>
                                        {/* db.collection("cities").doc("DC").delete().then(() => {
    console.log("Document successfully deleted!");
}) */}{" "}
                                        <Button
                                            onClick={async () => {
                                                await deleteDoc(
                                                    doc(
                                                        db,
                                                        "Appointment Requests",
                                                        appointmentRequest.id
                                                    )
                                                );
                                                toast({
                                                    title: "Appointment request deleted",
                                                    // description:
                                                        // "",
                                                    status: "success",
                                                });
                                                // await collection("Appointment Requests").doc(appointmentRequest.id).delete()
                                                // setMessage(
                                                //     appointmentRequest["Message"]
                                                // );
                                                // onOpen();
                                            }}
                                            // key={appointmentRequest["Message"]}
                                            // m={4}
                                            colorScheme="red"
                                            rightIcon={<DeleteIcon />}
                                        >
                                            Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}

                        {/* <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td>0.91444</Td>
                        </Tr> */}
                    </Tbody>
                </Table>
            </TableContainer>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Message</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{message}</ModalBody>

                    <ModalFooter>
                        <Button colorScheme="brand" onClick={onClose}>
                            Close
                        </Button>
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default admin;
