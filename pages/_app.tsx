import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import Fonts from "../components/Fonts";
import theme from "../theme";
import { AuthProvider } from "../contexts/AuthContext";
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
