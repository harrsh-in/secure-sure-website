import Footer from '@/components/Footer';
import Layout from '@/components/HOC/Layout';
import Navbar from '@/components/Navbar';
import WhatsApp from '@/components/WhatsApp';
import ModelProvider from '@/context/modal.context';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const font = Space_Grotesk({
    preload: true,
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '600', '700']
});

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        console.log('ROUTE CHANGED');

        const handleRouteChange = () => {
            window.scrollTo(0, 0);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
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
    );
}
