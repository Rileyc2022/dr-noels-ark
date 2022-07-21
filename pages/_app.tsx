import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import Fonts from "../components/Fonts";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.css";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ChakraProvider theme={theme}>
                <Fonts />
                <ParallaxProvider>
                    <Component {...pageProps} />
                </ParallaxProvider>
            </ChakraProvider>
        </AuthProvider>
    );
}

export default MyApp;
