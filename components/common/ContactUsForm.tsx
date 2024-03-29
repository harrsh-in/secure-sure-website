import { InitialValuesType, ModelContext } from '@/context/modal.context';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import Image from 'next/image';
import { Fragment, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import validator from 'validator';
import { z } from 'zod';
import WhatsApp from '../../public/assets/WhatsAppLogo.svg';

const schema = z.object({
    'First name': z
        .string({
            required_error: 'First name is required.',
            invalid_type_error: 'First name is required.'
        })
        .nonempty('First name is required.'),
    'Last name': z
        .string({
            required_error: 'Last name is required.',
            invalid_type_error: 'Last name is required.'
        })
        .nonempty('Last name is required.'),
    'Contact number': z
        .string({
            required_error: 'Contact number is required.',
            invalid_type_error: 'Contact number is required.'
        })
        .nonempty('Contact number is required.')
        .refine(
            validator.isMobilePhone,
            'Please enter a valid contact number.'
        ),
    Email: z
        .string({
            required_error: 'Email address is required.',
            invalid_type_error: 'Email address is required.'
        })
        .nonempty('Email address is required.')
        .email('Please enter a valid email address.'),
    Query: z.string().optional()
});

export type schemaType = z.infer<typeof schema>;

const ContactUsForm = () => {
    const { handleCloseModal: handleCloseModalContext } = useContext(
        ModelContext
    ) as InitialValuesType;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<schemaType>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<schemaType> = (data: schemaType) => {
        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(data)
        }).finally(() => {
            toast.success('We will get back to you soon.');
            handleCloseModalContext();
        });
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`);
    };
    return (
        <Fragment>
            <form
                className="flex flex-col justify-center items-center gap-4"
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="First Name"
                        id="First name"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('First name')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, '"First name".message')}
                    </p>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="Last name"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('Last name')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'Last name.message')}
                    </p>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Email address"
                        id="Email"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('Email')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'Email.message')}
                    </p>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Contact number"
                        id="Contact number"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('Contact number')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'Contact number.message')}
                    </p>
                </div>

                <div className="w-full">
                    <div className="rounded-3xl border border-transparent placeholder-[#838383] bg-[#EAF2FF] py-3 px-5 w-full">
                        <textarea
                            placeholder="Query"
                            id="Query"
                            // cols={30}
                            className="w-full border-0 placeholder-[#838383] bg-[#EAF2FF] outline-none"
                            rows={5}
                            {...register('Query')}
                        />
                    </div>

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'Query.message')}
                    </p>
                </div>

                <button
                    type="submit"
                    className="flex items-center gap-5 py-3 px-16 rounded-full bg-[#546FFF] text-white cursor-pointer"
                >
                    <p>Contact us</p>
                </button>
            </form>

            <div className="flex mt-4 w-full">
                <button
                    className="flex items-center gap-5 py-3 px-8 rounded-full mx-auto bg-[#54c796] text-white cursor-pointer"
                    onClick={handleWhatsAppClick}
                >
                    <div className="w-[25px] h-[20px] relative">
                        <Image src={WhatsApp} alt="Submit button" fill />
                    </div>

                    <p>WhatsApp us</p>
                </button>
            </div>
        </Fragment>
    );
};

export default ContactUsForm;
