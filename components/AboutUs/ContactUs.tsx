import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';
import ArrowRight from '../../public/assets/AboutUs/arrowRight.svg';
import Map from './Map';

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
    query: z.string().optional()
});

export type schemaType = z.infer<typeof schema>;

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<schemaType>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<schemaType> = (data: schemaType) => {
        fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            toast.success('We will get back to you soon.');
            reset();
        });
    };

    const address =
        'Secure Sure, Shubham Complex, Opposite Navrangpura Jain Temple, Navrangpura, Ahmedabad, Gujarat - 380009';

    return (
        <div className="text-[#546FFF] px-[1rem] md:px-[50px] xl:px-[150px] pt-[60px] flex flex-col items-center">
            <p>Contact Us</p>

            <h2 className="text-[25px] md:text-[30px] lg:text-[35px] font-[700] mb-[0.5rem]">
                Let&apos;s secure your future with secure sure
            </h2>

            <div className="bg-[#F0F2FF] w-full rounded-3xl flex flex-col lg:flex-row px-4 md:px-10 gap-4">
                <form
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 py-10"
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                placeholder="First Name"
                                id="firstName"
                                className="w-full border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                                {...register('firstName')}
                            />

                            <p className="text-sm text-red-700">
                                {_.get(errors, 'firstName.message')}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                placeholder="Last Name"
                                id="lastName"
                                className="w-full border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                                {...register('lastName')}
                            />

                            <p className="text-sm text-red-700">
                                {_.get(errors, 'lastName.message')}
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                placeholder="Email address"
                                id="email"
                                className="w-full border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                                {...register('email')}
                            />

                            <p className="text-sm text-red-700">
                                {_.get(errors, 'email.message')}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2">
                            <input
                                type="text"
                                placeholder="Contact number"
                                id="contactNumber"
                                className="w-full border border-[#546FFF] placeholder-[#546FFF] rounded-full py-2 px-5 outline-none"
                                {...register('contactNumber')}
                            />

                            <p className="text-sm text-red-700">
                                {_.get(errors, 'contactNumber.message')}
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="rounded-3xl border border-[#546FFF] bg-white py-3 px-5 w-full">
                            <textarea
                                placeholder="Query"
                                id="query"
                                // cols={30}
                                className="w-full border-0 placeholder-[#546FFF] outline-none"
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
                        className="flex items-center gap-5 py-3 px-8 rounded-full bg-[#546FFF] text-white cursor-pointer"
                    >
                        <p>Submit</p>

                        <div className="w-[25px] h-[20px] relative">
                            <Image src={ArrowRight} alt="Submit button" fill />
                        </div>
                    </button>
                </form>

                <div className="lg:flex-1 py-6 h-[500px] lg:h-auto">
                    <Map address={address} />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
