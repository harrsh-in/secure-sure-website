import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="description"
                    content="Discover the best insurance solutions in India with Secure Sure, ensuring your peace of mind and safeguarding what's important to you."
                />

                <link rel="icon" href="/favicon.png" sizes="any" />
                <link rel="canonical" href="https://securesure.in" />

                <meta
                    property="og:title"
                    content="Secure Sure Insurance Agency - Your Trusted Insurance Partner"
                />
                <meta
                    property="og:description"
                    content="Discover the best insurance solutions in India with Secure Sure, ensuring your peace of mind and safeguarding what's important to you."
                />
                <meta
                    property="og:image"
                    content="https://securesure.in/logo/logo.svg"
                />
                <meta
                    name="twitter:card"
                    content="https://securesure.in/logo/logo.svg"
                />
                <meta
                    name="twitter:title"
                    content="Secure Sure Insurance Agency - Your Trusted Insurance Partner"
                />
                <meta
                    name="twitter:description"
                    content="Discover the best insurance solutions in India with Secure Sure, ensuring your peace of mind and safeguarding what's important to you."
                />
                <meta
                    name="twitter:image"
                    content="https://securesure.in/logo/logo.svg"
                />

                <meta
                    name="google-site-verification"
                    content="-DzCmCjIgiYmNueRaMRA9s0xP5Fy28d671U_v2vVN6Y"
                />

                <meta name="google-adsense-account" content="ca-pub-5218187278726369" />
            </Head>
            <body className="h-screen overflow-auto">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
