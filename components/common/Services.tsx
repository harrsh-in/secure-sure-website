import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import Image from 'next/image';
import { useContext } from 'react';
import ArrowRight from '../../public/assets/Home/Services/arrowRight.svg';
import CarGreen from '../../public/assets/Home/Services/carGreen.svg';
import FamilyGreen from '../../public/assets/Home/Services/familyGreen.svg';
import HeartGreen from '../../public/assets/Home/Services/heartGreen.svg';
import UmbrellaGreen from '../../public/assets/Home/Services/umbrellaGreen.svg';
import LetsTalkMessage from '../../public/assets/letsTalkMessage.svg';

const Services = () => {
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    return (
        <div className="bg-[#F2FFF9] text-[#309C68] px-[1rem] md:px-[50px] xl:px-[150px] py-[60px] flex flex-col items-center">
            <p>Services</p>

            <h2 className="text-[25px] md:text-[30px] lg:text-[35px] font-[700] mb-[0.5rem]">
                Let&apos;s Brief You About Our Services
            </h2>

            <p className="md:text-center px-0 lg:px-[13rem] mb-[2rem]">
                At Secure Sure, we help you select the best insurance policy
                that perfectly suits your needs. Our services are not limited to
                helping you buy the policy, but we also help you with the claim
                process in case you need to use the policy. To cut the story
                short, we are a one-stop solution for all your insurance-related
                requirements.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 xl:gap-8">
                {services.map((service) => {
                    return (
                        <div
                            key={service.id}
                            className="border border-[#309C68] px-8 py-8 rounded-[20px]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="h-[50px] w-[50px] relative">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        fill
                                        className="absolute"
                                    />
                                </div>

                                <div
                                    className="bg-[#309C68] p-1 rounded-full cursor-pointer"
                                    onClick={() =>
                                        handleOpenModal(ModalType['contact-us'])
                                    }
                                >
                                    <Image
                                        src={ArrowRight}
                                        alt="Know more"
                                        width={30}
                                    />
                                </div>
                            </div>

                            <p className="font-[700] mt-5 mb-3">
                                {service.title}
                            </p>

                            <p className="font-[400]">{service.description}</p>
                        </div>
                    );
                })}
            </div>

            <div
                className="flex items-center rounded-full border-2 border-[#309C68]/40 py-3 px-5 mt-10 gap-4 cursor-pointer"
                onClick={() => handleOpenModal(ModalType['contact-us'])}
            >
                <p className="font-[700]">Contact us for more services</p>

                <Image src={LetsTalkMessage} alt="Let's talk" width={15} />
            </div>
        </div>
    );
};

export default Services;

const services = [
    {
        id: 1,
        icon: HeartGreen,
        title: 'Health insurance',
        description:
            'We are the best health insurance agency in India that offers a comprehensive health insurance plan that financially protects you and your loved ones in times of medical emergencies. Our experts help you, from covering hospitalization costs to providing quality healthcare access. We make sure your health remains your utmost priority.'
    },
    {
        id: 2,
        icon: FamilyGreen,
        title: 'Life Insurance',
        description:
            "With our best life insurance policies, you can secure your family's future. At Secure Sure - the best life insurance agency in India, we understand how important financial stability is for your loved ones in the event of unforeseen circumstances. We offer personalized solutions that offer you a safety net and let you leave behind a legacy even if you are searching for life insurance for senior citizens over 70."
    },
    {
        id: 3,
        icon: CarGreen,
        title: 'Vehicle Insurance',
        description:
            'Whether you own two-wheelers or four-wheelers, we have got you covered. We are one of the the best automobile insurance agency in India and our vehicle insurance plans provide complete coverage against accidents, theft, and damages. So, if you want to hit the road with confidence, knowing that you are protected 24*7, call us to learn more about our reliable vehicle insurance policies.'
    },
    {
        id: 4,
        icon: UmbrellaGreen,
        title: 'Travel Insurance',
        description:
            'Want to explore the world worry-free? Opt for our best travel insurance plans. We understand that unexpected events such as trip cancellation, medical emergencies, or lost baggage can occur during your travels. At that time, our travel insurance plans offer you financial protection and assistance by ensuring that you can enjoy your trip without any hassle.'
    }
];
