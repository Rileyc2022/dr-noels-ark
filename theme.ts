import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: "Quantify Bold",
        body: "Gotham Pro Regular",
    },
    colors: {
        brand: {
            // 50: "#e2fbed",
            // 100: "#c2ebd4",
            // 200: "#9fddb9",
            // 300: "#7ccf9e",
            // 400: "#58c184",
            // 500: "#3ea76a",
            // 600: "#2e8251",
            // 700: "#1f5d3a",
            // 800: "#0f3921",
            // 900: "#001506",

            // "50": "#F4FAFA",
            // "100": "#D0EAEB",
            "50": "#ACDBDC",
            "100": "#ACDBDC",
            "200": "#ACDBDC",
            "300": "#88CBCD",
            "400": "#64BBBE",
            "500": "#47A5A9",
            "600": "#388386", // primary
            "700": "#1E4A50",
            "800": "#12343F", // background
            "900": "#0B1919",
            // "900": "000000"
        },
        text: {
            "sub-heading": "#A9B9BF"
        }
    }
    // components: {
    //     Divider: {
    //         variants: {
    //             "colored": {
    //                 borderColor: 'brand.500', // Normally, it is "semibold"
    //             }
    //           },
    //     }
    // }
});
export default theme;
