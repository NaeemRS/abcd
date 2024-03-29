import { constant } from '@/helper/home';
import Link from 'next/link';
import React, { useState } from 'react';
import BookingForm from '../common/BookingForm';

const HomeBanner = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        promoCode: '',
        pickupDate: '',
        pickupTime: '',
        pickupLocation: '',
        dropOffLocation: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className='relative'>
            <img src='/images/safe-driver-dubai.jpg' className='w-full h-full absolute left-0 right-0' />
            <div className='bg-[#0000006e] w-full h-full absolute left-0 right-0'></div>
            <div class="   2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  relative py-10">
                <div className='flex items-center flex-wrap'>
                    <div class="lg:w-1/2 w-full text-center lg:mb-0 mb-4 lg:text-left md:pr-10">
                        <h1 class="text-2xl 2xl:text-6xl lg:text-5xl md:text-3xl font-bold text-white lg:mb-5 md:mb-3 mb-2">{constant.heading}</h1>
                        <p class="text-white font-medium md:text-base lg:text-lg text-sm mb-4">
                            {constant.paragrph}
                        </p>
                        <a href="tel:+971528948931" className="redClr font-bold text-2xl 2xl:text-5xl lg:text-4xl md:text-3xl">{constant.contactNumber}</a>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="lg:w-4/5 w-full mx-auto p-6 bg-green shadow-md">
                            <h2 className="text-2xl font-semibold redClr mb-3">{constant.booking}</h2>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
