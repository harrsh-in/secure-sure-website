import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';
import WhatsApp from '../../public/assets/WhatsAppLogo.svg';
import { Fragment } from 'react';

const schema = z.object({
    firstName: z
        .string({
            required_error: 'First name is required.',
            invalid_type_error: 'First name is required.'
        })
        .nonempty('First name is required.'),
    lastName: z
        .string({
            required_error: 'Last name is required.',
            invalid_type_error: 'Last name is required.'
        })
        .nonempty('Last name is required.'),
    contactNumber: z
        .string({
            required_error: 'Contact number is required.',
            invalid_type_error: 'Contact number is required.'
        })
        .nonempty('Contact number is required.')
        .refine(
            validator.isMobilePhone,
            'Please enter a valid contact number.'
        ),
    email: z
        .string({
            required_error: 'Email address is required.',
            invalid_type_error: 'Email address is required.'
        })
        .nonempty('Email address is required.')
        .email('Please enter a valid email address.'),
    query: z
        .string({
            required_error: 'Query message is required.',
            invalid_type_error: 'Query message is required.'
        })
        .nonempty('Query message is required.')
});

export type schemaType = z.infer<typeof schema>;

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<schemaType>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<schemaType> = (data: schemaType) =>
        console.log(data);

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
                        id="firstName"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('firstName')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'firstName.message')}
                    </p>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('lastName')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'lastName.message')}
                    </p>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Email address"
                        id="email"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('email')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'email.message')}
                    </p>
                </div>

                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Contact number"
                        id="contactNumber"
                        className="w-full border border-transparent placeholder-[#838383] bg-[#EAF2FF] rounded-full py-4 px-5 outline-none"
                        {...register('contactNumber')}
                    />

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'contactNumber.message')}
                    </p>
                </div>

                <div className="w-full">
                    <div className="rounded-3xl border border-transparent placeholder-[#838383] bg-[#EAF2FF] py-3 px-5 w-full">
                        <textarea
                            placeholder="Query"
                            id="query"
                            // cols={30}
                            className="w-full border-0 placeholder-[#838383] bg-[#EAF2FF] outline-none"
                            rows={5}
                            {...register('query')}
                        />
                    </div>

                    <p className="text-sm text-red-700">
                        {_.get(errors, 'query.message')}
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
