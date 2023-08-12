import Bajaj from '@/public/assets/Home/CompanyLogo/Bajaj.png';
import ICICI from '@/public/assets/Home/CompanyLogo/ICICI.png';
import LIC from '@/public/assets/Home/CompanyLogo/LIC.png';
import TataAIG from '@/public/assets/Home/CompanyLogo/TataAIG.png';
import Image from 'next/image';

const Associated = () => {
    return (
        <div className="my-[120px] px-[1rem] md:px-[50px] xl:px-[150px]">
            <p className="text-[#546FFF] text-center mb-6 text-[25px] md:text-[30px] lg:text-[35px] font-[800]">
                Associated with
            </p>

            <div className="w-full bg-[#F0F2FF] py-[20px] px-[40px] rounded-xl lg:rounded-3xl flex justify-between items-center flex-col lg:flex-row gap-6 lg:gap-0">
                <Image
                    src={Bajaj}
                    alt="Bajaj Insurance"
                    width={140}
                    quality={50}
                />

                <Image
                    src={TataAIG}
                    alt="Tata AIG Insurance"
                    height={55}
                    quality={50}
                />

                <Image
                    src={ICICI}
                    alt="ICICI Insurance"
                    height={30}
                    quality={50}
                />

                <Image src={LIC} alt="LIC Insurance" height={30} quality={50} />

                <div className="flex lg:flex-col gap-1 items-center">
                    <p className="text-[#546FFF]">And many more</p>
                </div>
            </div>
        </div>
    );
};

export default Associated;
