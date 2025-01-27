import { Fragment, useState } from 'react';

const Map = ({ address }: IProps) => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    return (
        <Fragment>
            <div
                role="status"
                className={`h-full shadow animate-pulse rounded-3xl ${
                    isMapLoaded ? 'hidden' : 'block'
                }`}
            >
                <div className="h-full bg-gray-300 rounded-3xl"></div>

                <span className={`sr-only ${isMapLoaded ? 'block' : 'hidden'}`}>
                    Loading...
                </span>
            </div>

            <iframe
                width="600"
                height="450"
                className="h-full w-full rounded-3xl"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1432.6805586865376!2d72.56376223606101!3d23.034694953242788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850c7f2d4d81%3A0x69828efb9ee323d5!2sSecure%20Sure%20Insurance%20Agency%20-%20Sanghvi%20Consultancy!5e1!3m2!1sen!2sin!4v1737992408018!5m2!1sen!2sin"
                onLoad={() => setIsMapLoaded(true)}
            />
        </Fragment>
    );
};

export default Map;

interface IProps {
    address: string;
}
