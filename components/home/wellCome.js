import React from 'react'
import { GetOurSober1, GetOurSober2, headerData, wellcome } from '@/helper/home';
import { Icon } from '@iconify/react';
export default function WellCome() {
    return (
        <>
            <div className="   2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  text-center py-8">
                <div className="mb-8">
                    <h3 className="uppercase text-lg font-bold redClr mb-2">
                        {wellcome.heading1}
                    </h3>
                    <h2 className="md:text-3xl lg:text-4xl md:w-1/2 mx-auto text-center text-2xl text-gray-700">
                        {wellcome.heading2}
                    </h2>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600 text-lg">
                        Required Safe driver Dubai? Call
                        <a href="tel:+971528948931" className="text-redClr text-xl">+971 52 894 8931</a>
                        to hire a driver in Dubai.
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        {wellcome.paragrph}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-600">
                        {wellcome.paragrph1}
                    </p>
                </div>  <div className="mb-4">
                    <p className="text-gray-600">
                        {wellcome.paragrph2}
                    </p>
                </div>  <div className="mb-4">
                    <p className="text-gray-600">
                        {wellcome.paragrph3}
                    </p>
                </div>
            </div>
            <section className="bg-green py-10">
                <div className=" max-w-[85rem] mx-auto px-4 2xl:px-10 xl:px-6">
                    <div className="grid gap-5 2xl:gap-10 sm:grid-cols-2 grid-cols-1 md:grid-cols-3">
                        {headerData.map((step, key) => (
                            <div className='flex flex-col gap-5 lg:gap-6' key={key}>
                                <span className='bg-[#ffffff16] inline-flex items-center justify-center w-20 h-20 rounded-full'>
                                    <Icon icon={step.id} width="60" height="49" color="#01c8cd" />
                                </span>
                                <h4 className="text-base uppercase font-semibold text-gray-100">
                                    {step.title}
                                </h4>
                                <p className="text-sm text-gray-100">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="lg:py-10 md:py-5 py-3">
                <div className="  2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  py-8">
                    <div className="w-full flex gap-7 lg:flex-nowrap flex-wrap-reverse">
                        <div className="md:w-2/5 w-full">
                            <img src={GetOurSober1.bannerImag1} alt="images" className='' />
                        </div>
                        <div className="md:w-3/5 w-full">
                            <h3 className="uppercase text-lg font-bold redClr mb-2">
                                {GetOurSober1.lable}
                            </h3>
                            <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                                {GetOurSober1.heading1}
                            </h2>
                            <p className="text-gray-600 mb-3">
                                {GetOurSober1.paragrph1}
                            </p>
                            <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                                {GetOurSober1.heading2}
                            </h2>
                            <p className="text-gray-600 mb-3">
                                {GetOurSober1.paragrph2}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:py-10 md:py-5 py-3">
                <div className="   2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  py-8">
                    <div className="w-full flex gap-7 flex-wrap lg:flex-nowrap">

                        <div className="w-full md:w-3/5">
                            <h3 className="uppercase text-lg font-bold redClr mb-2">
                                {GetOurSober2.lable}
                            </h3>
                            <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                                {GetOurSober2.heading1}
                            </h2>
                            <p className="text-gray-600 mb-3">
                                {GetOurSober2.paragrph1}
                            </p>
                            <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                                {GetOurSober2.heading2}
                            </h2>
                            <p className="text-gray-600 mb-3">
                                {GetOurSober2.paragrph2}
                            </p>
                        </div>
                        <div className="md:w-2/5 mx-auto w-full">
                            <img src={GetOurSober2.bannerImag2} alt="images" className='h-[350px]  mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
