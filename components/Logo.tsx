import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

interface LogoProps extends IconProps {}

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <Icon
            viewBox="0 0 74 59"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="logo"
            {...props}
        >
            <path d="M16.1127 47.2109H0L37 58.5194L74 47.2109H57.8873L37 53.5969L16.1127 47.2109Z" />
            <path d="M38.5938 51.3431V43.1094L52.0752 47.2188L38.5938 51.3431Z" />
            <path d="M35.4053 51.3431V43.1094L21.9238 47.2188L35.4053 51.3431Z" />
            <path d="M63.4279 33.8099L38.5938 26.2266V40.5062L54.8247 45.4731L63.4279 33.8099Z" />
            <path d="M35.4006 40.5062V26.2266L10.5664 33.8099L19.1697 45.4731L35.4006 40.5062Z" />
            <path d="M38.5938 23.6228V11.457L67.6557 20.3412L64.5071 31.5461L38.5938 23.6228Z" />
            <path d="M35.4018 23.6228V11.457L6.33984 20.3412L9.48847 31.5461L35.4018 23.6228Z" />
            <path d="M20.1191 5.15901L37.0005 0L53.8818 5.15901V13.5258L37.0005 8.36676L20.1191 13.5258V5.15901Z" />
        </Icon>
    );
};

export default Logo;
