import { chauffeurServices, faqsData1, faqsData2, driveBenefits, driveBenefitsP, servicesData } from '@/helper/home';
import Link from 'next/link';
import Faqs from '../common/Faqs';

const ServiceCard = () => {
    return (
        <section className="text-gray-600 body-font bg-repeat bg-[url('/images/pattern.webp')]">
            <div className="   2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  md:py-10  py-5">
                <div className="grid hidden grid-cols-4 gap-4">
                    {servicesData.map((service, index) => (
                        <div key={index} className='bg-btn p-[1px] rounded-lg pb-2'>
                            <div className="flex bg-white h-full flex-col">
                                <div className="h-[150px]">
                                    <img src={service.servesImage} alt="images" className='w-full h-full' />
                                </div>
                                <div className="flex-grow p-2">
                                    <h2 className="text-gray-900 text-lg title-font font-medium">{service.title}</h2>
                                    <p className="leading-relaxed text-base">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {servicesData.map((service, index) => (
                        <div key={index} className='p-2 lg:p-4 md:p-3 bg-white'>
                            <div className="flex bg-white gap-5 h-full flex-col">
                                <div className="h-[150px]">
                                    <img src={service.servesImage} alt="images" className='w-full h-full' />
                                </div>

                                <h2 className="md:text-2xl text-xl text-gray-700 mb-1">{service.title}</h2>
                                <p className="leading-relaxed text-base">{service.description}</p>
                                <Link href="#down"
                                    className="button w-full whitespace-nowrap  mx-auto lg:h-[45px] text-white px-3 lg:text-lg text-sm bg-btn flex items-center justify-center h-9"
                                >
                                    READ MORE
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="   2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6  md:py-10  py-5">
                <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">{chauffeurServices.heading1}</h2>
                <p className="leading-relaxed mb-2 text-base">{chauffeurServices.paragrph1}</p>
                <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">
                    {chauffeurServices.heading2}
                </h2>
                <p className="leading-relaxed text-base">
                    {chauffeurServices.paragrph2}
                </p>
            </div>
            <div className="  2xl:max-w-[90rem] mx-auto px-4 2xl:px-10 xl:px-6 py-8">
                <div className="flex flex-wrap gap-3 w-full">
                    <div className='md:w-1/2 w-full'>
                         <Faqs icon1="subway:massage" icon2="subway:massage"  data={faqsData1} />
                    </div>
                    <div className='md:w-1/2 w-full'>
                         <Faqs icon1="subway:massage" icon2="subway:massage"  data={faqsData2} />
                    </div>
                </div>
            </div>
            <div className=" max-w-[85rem] px-4 mx-auto 2xl:px-10 xl:px-6  md:py-10  py-5">
                <h2 className="md:text-3xl text-2xl text-gray-700 mb-3">{driveBenefitsP.heading}</h2>
                <ul className='list-disc pl-5'>
                    {driveBenefits.map((list, key) =>
                        <li key={key} className="leading-relaxed mb-2 text-base">{list.description}</li>
                    )}
                </ul>
                <p className="leading-relaxed text-base">{driveBenefitsP.paragrph2}</p>

            </div>
        </section>
    );
};

export default ServiceCard;
