import Footer from '@/components/Footer';
import Layout from '@/components/HOC/Layout';
import Navbar from '@/components/Navbar';
import WhatsApp from '@/components/WhatsApp';
import ModelProvider from '@/context/modal.context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Fragment, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import * as gtag from '../lib/gtag';

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

const font = Space_Grotesk({
    preload: true,
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '600', '700']
});

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <Fragment>
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5218187278726369"
                strategy="afterInteractive"
                crossOrigin="anonymous"
            />
            {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `
                }}
            />
            {/* Google Analytics */}

            <ModelProvider>
                <main className={`${font.className}`}>
                    <Toaster />

                    <Layout>
                        <Navbar />
                        <WhatsApp />
                        <Component {...pageProps} />
                        <Footer />
                    </Layout>
                </main>
            </ModelProvider>
        </Fragment>
    );
}
