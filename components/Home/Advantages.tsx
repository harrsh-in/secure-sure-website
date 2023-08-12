import Image from 'next/image';
import { useEffect, useState } from 'react';
import Fast from '../../public/assets/Home/Advantages/FastAdvantage.svg';
import Header from '../../public/assets/Home/Advantages/Header.svg';
import Secure from '../../public/assets/Home/Advantages/SecureAdvantage.svg';
import Simple from '../../public/assets/Home/Advantages/SimpleAdvantage.svg';
import Tick from '../../public/assets/Home/Advantages/tick.svg';

const Advantages = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [toggleResetActiveTab, setToggleResetActiveTab] = useState(false);

    useEffect(() => {
        const changeActiveTab = setInterval(() => {
            setActiveTab((prev) => {
                if (prev === 3) {
                    return 1;
                } else return prev + 1;
            });
        }, 10000);

        return () => {
            clearInterval(changeActiveTab);
        };
    }, [toggleResetActiveTab]);

    return (
        <div className="text-[#546FFF] px-[1rem] md:px-[50px] xl:px-[150px] my-[60px]">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0">
                <div className="relative">
                    <p className="font-[700] text-[25px] md:text-[30px] lg:text-[35px]">
                        Advantages with Policy Wise
                    </p>

                    <Image
                        src={Header}
                        alt="Advantages with Policy Wise"
                        className="absolute bottom-[-8px] right-[-15px] hidden sm:block"
                        width={15}
                    />
                </div>

                <div className="flex gap-4">
                    {AdvantagesTitle.map((advantage) => {
                        return (
                            <div
                                onClick={() => {
                                    setActiveTab(advantage.id);
                                    setToggleResetActiveTab((prev) => !prev);
                                }}
                                key={advantage.id}
                                className={`py-2 px-8 rounded-full transition duration-500 cursor-pointer ${
                                    activeTab === advantage.id
                                        ? 'bg-[#546FFF] text-white'
                                        : 'bg-[#EAF2FF]'
                                }`}
                            >
                                <p>{advantage.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="my-[60px]">
                {AdvantagesList.map((advantage) => {
                    return (
                        <div
                            key={advantage.id}
                            className={`items-center justify-between lg:h-[450px] flex-col lg:flex-row gap-6 lg:gap-0 ${
                                advantage.id === activeTab ? 'flex' : 'hidden'
                            }`}
                        >
                            <div className="w-full md:w-[450px] flex items-center justify-center">
                                <Image
                                    src={advantage.icon}
                                    alt={advantage.title}
                                    height={300}
                                />
                            </div>

                            <div>
                                <p className="font-[700] text-[25px]">
                                    {advantage.title}
                                </p>

                                <p className="text-[#535353] mt-5 mb-8 max-w-xl">
                                    {advantage.description}
                                </p>

                                <div className="flex flex-col gap-6">
                                    {advantage.points.map((point, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="rounded-full bg-[#EAF2FF] p-3">
                                                    <Image
                                                        src={Tick}
                                                        alt={point}
                                                        width={15}
                                                    />
                                                </div>

                                                <p className="font-[500]">
                                                    {point}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;

const AdvantagesTitle = [
    {
        id: 1,
        title: 'Simple'
    },
    {
        id: 2,
        title: 'Fast'
    },
    {
        id: 3,
        title: 'Secure'
    }
];

const AdvantagesList = [
    {
        id: 1,
        title: 'Simplest way to choose best suitable policy',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.',
        points: [
            'No research required. We will suggest you',
            'No research required. We will suggest you',
            'No research required. We will suggest you'
        ],
        icon: Simple
    },
    {
        id: 2,
        title: 'Simplest way to choose best suitable policy',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.',
        points: [
            'No research required. We will suggest you',
            'No research required. We will suggest you',
            'No research required. We will suggest you'
        ],
        icon: Fast
    },
    {
        id: 3,
        title: 'Simplest way to choose best suitable policy',
        description:
            'Trust us to be your reliable partner in navigating the complex world of insurance, as we strive to exceed your expectations and deliver unparalleled customer satisfaction.',
        points: [
            'No research required. We will suggest you',
            'No research required. We will suggest you',
            'No research required. We will suggest you'
        ],
        icon: Secure
    }
];

/**
 * // ${
                            //     advantage.id === activeTab
                            //         ? 'opacity-100 h-full'
                            //         : 'opacity-0 h-0'
                            // }
 */
