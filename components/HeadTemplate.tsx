import Head from "next/head";
import React from "react";

interface HeadTemplateProps {
    title?: string;
    description?: string;
    short_description?: string;
    url?: string;
}

const HeadTemplate: React.FC<HeadTemplateProps> = ({
    title,
    description,
    short_description,
    url,
}) => {
    return (
        <Head>
            {/* <!-- HTML Meta Tags --> */}
            {title && <title>{title}</title>}
            <meta name="description" content={description} />

            {/* <!-- Facebook Meta Tags --> */}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:type" content="website" />
            {title && <meta property="og:title" content={title} />}
            {short_description && (
                <meta property="og:description" content={short_description} />
            )}

            <meta
                property="og:image"
                // content="https://www.drnoelsark.com/og-image.png"
                content="https://cdn.discordapp.com/attachments/766545619170623528/999940942377275432/Group_198.png"
            />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="drnoelsark.com" />
            {url && <meta property="twitter:url" content={url} />}
            {title && <meta name="twitter:title" content={title} />}
            {short_description && (
                <meta name="twitter:description" content={short_description} />
            )}
            <meta
                name="twitter:image"
                // content="https://www.drnoelsark.com/og-image.png"
                content="https://cdn.discordapp.com/attachments/766545619170623528/999940942377275432/Group_198.png"
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />

            {/* <!-- Favicons --> */}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#47a5a9"
            />
            <meta name="msapplication-TileColor" content="#12343f" />
            <meta name="theme-color" content="#12343f" />
        </Head>
    );
};

export default HeadTemplate;
