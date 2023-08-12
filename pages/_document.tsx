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
            </Head>
            <body className="h-screen overflow-auto">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
