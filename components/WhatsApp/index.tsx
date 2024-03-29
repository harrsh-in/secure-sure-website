import Image from 'next/image';
import WhatsAppLogo from '../../public/assets/WhatsAppLogo.svg';

const WhatsApp = () => {
    const handleOnLogoClick = () => {
        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`);
    };

    return (
        <div className="fixed bg-[#25D366] p-3 rounded-full left-1 bottom-1 cursor-pointer z-40">
            <Image
                src={WhatsAppLogo}
                alt="Contact on WhatsApp"
                height={30}
                onClick={handleOnLogoClick}
                priority
                quality={100}
            />
        </div>
    );
};

export default WhatsApp;
