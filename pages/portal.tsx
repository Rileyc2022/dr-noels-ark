import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

interface portalProps {}

const portal: React.FC<portalProps> = ({}) => {
    return (
        <>
            <Navbar
                variant="light"
                showCompanyName={true}
                withShadow={false}
                bottomBorder={true}
            ></Navbar>
        <Flex bg={"#F5F7FB"} height="100vh" justify="space-evenly" alignItems={"center"} flexDirection="row">
          {/* <Box>
            <Text>Current recommendation</Text>
            
            </Box> */}
          
        </Flex>
        </>
    );
};

export default portal;
