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
    Text
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

interface adminProps {}

const admin: React.FC<adminProps> = ({}) => {
    return (
        <>
            <Navbar
                variant="light"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
            <Text
                fontSize={{ base: 35, md: 40 }}
                color={"brand.500"}
                m="1"
                fontWeight={"bold"}
            >
                Sign In
            </Text>
            <Flex
                bg={"#F5F7FB"}
                height="100vh"
                justify="space-evenly"
                alignItems={"center"}
                flexDirection="row"
            >
                {/* <Box>
    <Text>Current recommendation</Text>
    
    </Box> */}
                <Tabs
                    isFitted
                    variant={"enclosed-colored"}
                    colorScheme="brand"
                    w="80%"
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
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    );
};

const AppointmentTable = () => {
    const appointments = [
        {
            date: "5/10",
            time: "5:15pm",
            name: "Riley Crymble",
            // anim
        },
    ];
    return (
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
                        <Th fontFamily={"body"} fontSize="14">
                            Location
                        </Th>
                        <Th fontFamily={"body"} fontSize="14">
                            Animal
                        </Th>
                        <Th fontFamily={"body"} fontSize="14">
                            Issue
                        </Th>
                        <Th fontFamily={"body"} fontSize="14">
                            Actions
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td>0.91444</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default admin;
