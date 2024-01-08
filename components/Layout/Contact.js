import { constant } from '@/helper/home'
import React from 'react'

const Contact = () => {
  return (
    <a href="tel:+1234567890" className=" !rounded-0">
      <section className='relative bg-btn overflow-hidden !rounded-0'>
        <div class=" max-w-[85rem] mx-auto px-4 2xl:px-10 xl:px-6 relative py-10">
          <div className='flex items-center'>
            <div class="w-2/3 text-center mx-auto">
              <h1 class="md:text-3xl text-xl font-bold text-center text-gray-50 mb-3">                    
                  We are Ready to Take Your Call 24 Hours, 7 Days!
              </h1>
              <p class="text-green-900 font-bold text-2xl 2xl:text-5xl lg:text-4xl md:text-3xl">
                +1234567890
              </p>
              <span className='text-white'>Hool hang on a common to tun
              </span>
            </div>
          </div>
        </div>
      </section>
    </a>
  )
}

export default Contact
