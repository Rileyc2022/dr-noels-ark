import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

type SimpleLinkProps = LinkProps & {
    // href: string;
    external?: boolean;
    children?: React.ReactNode;
};

const SimpleLink: React.FC<SimpleLinkProps> = ({
    href ,
    external = false,
    children,
    ...props
}) => {
    return (
        <NextLink href={href ?? "#"} passHref>
            <Link isExternal={external} {...props}>
                {children}
                {external && <ExternalLinkIcon mx="2px" />}
            </Link>
        </NextLink>
    );
};

export default SimpleLink;
