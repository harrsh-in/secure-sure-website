import {
    InitialValuesType,
    ModalType,
    ModelContext
} from '@/context/modal.context';
import Image from 'next/image';
import { useContext } from 'react';
import Two from '../../public/assets/Home/2.svg';
import Four from '../../public/assets/Home/4.svg';
import ManOne from '../../public/assets/Home/People/1.jpg';
import ManTwo from '../../public/assets/Home/People/2.jpg';
import ManThree from '../../public/assets/Home/People/3.jpg';
import ManFour from '../../public/assets/Home/People/4.jpg';
import HeroVector from '../../public/assets/heroVector.svg';

const Hero = () => {
    const { handleOpenModal } = useContext(ModelContext) as InitialValuesType;

    return (
        <div className="flex items-center flex-col-reverse lg:flex-row mt-[50px] sm:mt-[90px] gap-[50px] px-[1rem] md:px-[50px] xl:px-[150px]">
            <div className="w-full lg:w-1/2">
                <h1 className="font-[700] text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-[#546FFF]">
                    We help you find the best Insurance Plan at the right price
                </h1>
                <p className="font-[500] mt-[25px]">
                    Do you want to protect your future and ensure your peace of
                    mind? At Secure Sure Insurance Agency, we understand the
                    importance of safeguarding. We offer comprehensive insurance
                    services with reliable coverage, the best insurance advice,
                    and customized solutions tailored to your specific needs.
                    Whether you need health insurance, term insurance, travel
                    insurance, or vehicle insurance, you will get all under one
                    roof.
                </p>
                <div className="flex gap-[25px] flex-col sm:flex-row my-[40px]">
                    <div
                        className="bg-[#546FFF] py-[10px] px-[35px] rounded-[100px] text-white cursor-pointer flex gap-3"
                        onClick={() => handleOpenModal(ModalType['contact-us'])}
                    >
                        <Image src={Four} alt="" />

                        <p className="m-auto">Buy/Renew Insurance</p>
                    </div>
                </div>

                <div className="flex md:items-center gap-4 flex-col md:flex-row">
                    <div className="flex">
                        <span className="rounded-[50%] relative inline-block overflow-hidden border-4 border-white">
                            <Image
                                src={ManOne}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>

                        <span className="rounded-[50%] relative inline-block overflow-hidden ml-[-30px] border-4 border-white">
                            <Image
                                src={ManTwo}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>

                        <span className="rounded-[50%] relative inline-block overflow-hidden ml-[-30px] border-4 border-white">
                            <Image
                                src={ManThree}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>

                        <span className="rounded-[50%] relative inline-block overflow-hidden ml-[-30px] border-4 border-white">
                            <Image
                                src={ManFour}
                                alt="Happy Customer"
                                quality={80}
                                width={55}
                            />
                        </span>
                    </div>

                    <div className="relative w-[300px]">
                        <p className="text-[#309C68] underline">
                            2000+ satisfied and happy customers
                        </p>

                        <Image
                            src={Two}
                            alt="Explore services"
                            width={20}
                            className="absolute bottom-[-16px] right-[-18px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className="m-auto relative w-[250px] sm:w-[300px] md:w-[600px] lg:w-full h-[250px] sm:h-[300px] md:h-[600px]">
                    <Image
                        src={HeroVector}
                        alt="Your family is secured."
                        fill
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
