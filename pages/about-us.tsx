import ContactUs from '@/components/AboutUs/ContactUs';
import Hero from '@/components/AboutUs/Hero';
import Head from 'next/head';
import { Fragment } from 'react';
import Services from '@/components/common/Services';

const AboutUs = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    About Us | Secure Sure Insurance Agency - Your Trusted
                    Insurance Partner
                </title>
            </Head>

            <div>
                <Hero />
                <Services />
                <ContactUs />
            </div>
        </Fragment>
    );
};

export default AboutUs;
