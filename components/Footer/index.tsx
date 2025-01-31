import Link from 'next/link';
import { useContext } from 'react';
import Instagram from '../../public/assets/Footer/instagram.svg';
import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import { links } from '@/utils/constants';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Google from '../../public/assets/Footer/google.svg';

const Footer = () => {
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;
    const router = useRouter();

    return (
        <div className="px-[1rem] md:px-[50px] xl:px-[150px] py-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            <div className="flex flex-col">
                <p className="text-2xl font-medium mb-3 text-[#546FFF]">
                    Secure Sure
                </p>

                <div className="flex gap-4">
                    {SocialMediaList.map((socialMedia, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-[#546FFF] rounded-full p-2 flex cursor-pointer"
                            >
                                <Link
                                    href={socialMedia.link}
                                    target="_blank"
                                    className="relative w-5 h-5 m-auto"
                                >
                                    <Image
                                        src={socialMedia.icon}
                                        alt="Social media icon"
                                        fill
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-[#546FFF] text-lg font-medium w-fit">
                    Features
                </p>

                {FeaturesList.map((feature, index) => {
                    return (
                        <p
                            key={feature.id}
                            className="w-fit cursor-pointer"
                            onClick={() => {
                                handleOpenModal(ModalType['contact-us']);
                            }}
                        >
                            {feature.title}
                        </p>
                    );
                })}
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-[#546FFF] text-lg font-medium w-fit">
                    Navigation
                </p>

                {NavigationList.map((navigation) => {
                    return (
                        <Link
                            href={navigation.url}
                            key={navigation.id}
                            className="w-fit"
                        >
                            {navigation.title}
                        </Link>
                    );
                })}
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-[#546FFF] text-lg font-medium w-fit">
                    Contact details
                </p>

                <Link
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                    target="_blank"
                    className="w-fit"
                >
                    {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
                </Link>

                <Link
                    href={`tel:${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}
                    target="_blank"
                    className="w-fit"
                >
                    {process.env.NEXT_PUBLIC_HTML_CONTACT_NUMBER}
                </Link>

                <Link
                    href="https://maps.app.goo.gl/kXzWfBsRFCH9idXz6"
                    target="_blank"
                    className="w-fit"
                >
                    301, 302 & 303, Shubham Complex, Shrimali Society,
                    Navrangpura, Ahmedabad, Gujarat 380009
                </Link>
            </div>
        </div>
    );
};

export default Footer;

const FeaturesList = [
    {
        id: 1,
        title: 'Health insurance'
    },
    {
        id: 2,
        title: 'Life Insurance'
    },
    {
        id: 3,
        title: 'Car Insurance'
    },
    {
        id: 4,
        title: 'Two-wheeler Insurance'
    },
    {
        id: 5,
        title: 'Travel Insurance'
    }
];

const NavigationList = [
    {
        id: 'home',
        title: 'Home',
        url: links.home
    },
    {
        id: 'about-us',
        title: 'About Us',
        url: links.aboutUs
    }
];

const SocialMediaList = [
    {
        icon: Google,
        link: 'https://www.google.com/search?q=secure%20sure'
    },
    {
        icon: Instagram,
        link: 'https://www.instagram.com/securesure.in'
    }
    // {
    //     icon: FaceBook
    // },
    // {
    //     icon: Twitter
    // }
];
