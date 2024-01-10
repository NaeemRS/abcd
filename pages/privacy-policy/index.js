import AboutBanner from '@/components/common/AboutBanner';
import { privacyBanner, privcyContent } from '@/helper/privicy';

const index = () => {
    return (
        <>
            <AboutBanner
                banner={privacyBanner.banner}
                title={privacyBanner.title}
                Link1={privacyBanner.Link1}
                Link2={privacyBanner.Link2}
            />
            <section className="relative">             
                    <div className=" max-w-[85rem] mx-auto px-4 2xl:px-10 xl:px-6  md:py-10  py-5">
                        {privcyContent.map((list, key) =>
                            <>
                                <h2 className="md:text-3xl lg:text-4xl mb-3 mx-auto text-2xl text-gray-700">
                                    {list.heading}
                                </h2>
                                <p className="text-base text-gray-900 mb-3">
                                    {list.paragraph}
                                </p>
                            </>
                        )}

                    </div>              
            </section>

        </>
    );
};

export default index;
