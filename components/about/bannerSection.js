import React from 'react';

const BannerSection = ({ lable, title, text, imageUrl, reverse }) => {
    return (
        <section className='relative h-[450px] overflow-hidden flex flex-col items-center justify-center'>
            <img src={imageUrl} alt={title} className="w-full h-full absolute object-cover" />
            <div class={` ${reverse ? 'right-0 ' : 'left-0 '} bg-[#00000071] h-full w-full  absolute`}></div>
            <div className="2xl:max-w-[90rem] max-w-[85rem] mx-auto px-4 2xl:px-10 relative w-full lg:px-6  ">
                <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} flex-wrap items-center py-3`}>
                    <div className="md:w-1/2 w-full text-white px-4">
                        <h2 className="text-lg font-bold redClr mb-2">{lable}</h2>
                        <h2 className="md:text-3xl text-2xl mb-3">{title}</h2>
                        <p className="text-lg ">{text}</p>
                    </div>
                    <div className="md:w-1/2 md:block hidden w-full">
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BannerSection;
