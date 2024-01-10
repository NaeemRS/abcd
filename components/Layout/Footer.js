import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green text-white p-6">
      <div className="   2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6 text-center py-8 pb-0">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          <div className="mb-6 md:border-r pr-4">
            <h5 className="uppercase text-2xl !font-bold mb-2.5">Address</h5>
            <p>Awesome Drive Fleet Vehicles Management LLC,</p>
            <p>1601 Latifa Tower, Sheikh Zayed Road, Dubai, UAE</p>
          </div>
          <div className="mb-6">
            <h5 className="uppercase text-2xl  text-center !font-bold mb-2.5">Socials</h5>
            <div className='flex justify-center items-center space-x-3'>
              <span className='flex justify-center items-center md:w-12 md:h-12 w-9 h-9 bg-btn !rounded-full'><Icon icon="ri:facebook-fill" className='md:text-2xl text-lg' color="#ffff" /></span>
              <span className='flex justify-center items-center md:w-12 md:h-12 w-9 h-9 bg-btn !rounded-full'><Icon icon="uil:twitter" className='md:text-2xl text-lg' color="#ffff" /></span>
              <span className='flex justify-center items-center md:w-12 md:h-12 w-9 h-9 bg-btn !rounded-full'><Icon icon="ant-design:youtube-filled" className='md:text-2xl text-lg' color="#ffff" /></span>
              <span className='flex justify-center items-center md:w-12 md:h-12 w-9 h-9 bg-btn !rounded-full'><Icon icon="basil:instagram-solid" className='md:text-2xl text-lg' color="#ffff" /></span>
              <span className='flex justify-center items-center md:w-12 md:h-12 w-9 h-9 bg-btn !rounded-full'><Icon icon="basil:linkedin-solid" className='md:text-2xl text-lg' color="#ffff" /></span>
            </div>
          </div>

          <div className="mb-6 md:border-l pl-4">
            <h5 className="uppercase text-2xl !font-bold mb-2.5">Contacts</h5>
            <p>+971 52 894 8931</p>
            <p>info@awesomedrive.ae</p>
          </div>
          
        </div>
        <div className="w-full border-gray-700 mt-6 pt-6">
            <div className="flex flex-wrap justify-between items-center">
              <div className='flex items-center space-x-2'>
                <Link href="/privacy-policy" className="text-sm hover:text-gray-300">Privacy Policy</Link>
                <span>
                  |
                </span>
                <Link href="/terms-and-conditions" className="text-sm hover:text-gray-300">Terms & Conditions</Link>
              </div>
              <img src='/images/visa-mastercard.webp' />
              <div>
                <p className="text-sm">spaniac © 2024 All rights reserved.</p>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
