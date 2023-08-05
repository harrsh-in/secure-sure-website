import { InitialValuesType, ModelContext } from '@/context/modal.context';
import Image from 'next/image';
import { MouseEvent, useContext } from 'react';
import CloseIcon from '../../../public/assets/close.svg';

const Modal = ({ children }: IProps) => {
    const {
        handleCloseModal: handleCloseModalContext,
        handleOpenModal,
        isModalOpen,
        prevModal
    } = useContext(ModelContext) as InitialValuesType;

    if (!isModalOpen) {
        return null;
    }

    const handleCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        // @ts-ignore
        if (e.target.id === 'wrapper') {
            handleCloseModalContext();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[100]"
            id="wrapper"
            onClick={handleCloseModal}
        >
            <div className="w-full sm:w-max bg-white p-4 rounded-xl mx-4 sm:mx-12">
                <div className="flex justify-between pb-4">
                    <div>
                        {prevModal ? (
                            <p
                                onClick={() => {
                                    handleOpenModal(prevModal);
                                }}
                            >
                                Go back
                            </p>
                        ) : null}
                    </div>

                    <Image
                        src={CloseIcon}
                        alt="Close"
                        onClick={handleCloseModalContext}
                        className="cursor-pointer"
                        height={40}
                        width={40}
                    />
                </div>

                <div className="overflow-auto max-h-[70vh]">{children}</div>
            </div>
        </div>
    );
};

export default Modal;

interface IProps {
    children: JSX.Element;
}
