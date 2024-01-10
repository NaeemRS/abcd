import Link from 'next/link';
import React from 'react';

const ServicesBanner = ({ lable, title, text, imageUrl, reverse }) => {
    return (
        <section className='relative overflow-hidden'>
            <div className=" relative 2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6 w-full lg:px-6 lg:py-20 md:py-10 py-7">
                <div className={`flex lg:gap-0 gap-5 ${reverse ? 'flex-row-reverse' : 'flex-row'} flex-wrap items-center`}>
                    <div className={`lg:w-1/2 w-full text-gray-900 px-4 ${reverse ? 'lg:pl-10 mb-5 lg:mb-0' : 'lg:pr-10 mt-4 lg:mt-0'} `}>
                        <h2 className="text-lg font-bold redClr mb-2">{lable}</h2>
                        <h2 className="md:text-3xl text-2xl mb-3">{title}</h2>
                        <p className="text-lg md:mb-5 mb-3">{text}</p>
                        <Link className='bg-green text-white rounded-md py-3  px-6 text-sm font-medium' href={'/'}>Read More</Link>
                    </div>
                    <div className="lg:w-1/2 w-full px-4">
                        <img src={imageUrl} alt={title} className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ServicesBanner;
