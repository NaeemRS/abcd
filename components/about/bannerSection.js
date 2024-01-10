import React from 'react';

const BannerSection = ({ lable, title, text, imageUrl, reverse }) => {
    return (
        <section className='relative flex flex-col justify-center h-auto overflow-hidden'>
            <img src={imageUrl} alt={title} className="w-full h-full absolute object-cover" />
            <div className={` ${reverse ? 'right-0 Client-ReviewsC1' : 'left-0 Client-ReviewsC'} md:w-2/3 md:block hidden w-full top-0 bottom-0 h-full Client-ReviewsC absolute`}></div>
            <div className="bg-[rgba(0,0,0,0.25)] block absolute w-full h-full md:hidden"></div>
            <div className="max-w-[85rem] mx-auto px-4 2xl:px-10 xl:px-6  relative w-full lg:px-6 lg:py-20 md:py-10 py-7">
                <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} flex-wrap items-center lg:py-12 md:py-6 py-3`}>
                    <div className="md:w-1/2 w-full text-white">
                        <h2 className="text-lg font-bold redClr mb-2">{lable}</h2>
                        <h2 className="md:text-3xl text-2xl mb-3">{title}</h2>
                        <p className="lg:text-lg md:text-base text-sm ">{text}</p>
                    </div>
                    <div className="md:w-1/2 md:block hidden w-full">
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BannerSection;
