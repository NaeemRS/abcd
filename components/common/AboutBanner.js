import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function AboutBanner({ banner, title, Link1, Link2 }) {
  return (
    <>
      <section className="relative">
        <img src={banner} className="w-full h-full object-cover absolute left-0 right-0" alt="Banner" />
        <div className="bg-[#00000086] w-full h-full absolute left-0 right-0"></div>
        <div className="2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  relative 2xl:py-24 lg:py-14 py-10">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-2xl 2xl:text-5xl lg:text-4xl md:text-3xl font-bold text-white lg:mb-5 md:mb-3 mb-2">
                {title}
              </h1>
              <div className='flex uppercase justify-center space-x-2 redClr lg:text-lg  
 md:text-base font-semibold text-center items-center text-sm'>
                <Link href={'/'}>{Link1}</Link>
                <span>/</span>
                <span>{Link2}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

