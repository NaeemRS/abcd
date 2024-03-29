import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Faqs = ({ data, icon1, icon2 }) => {
    const [activeKey, setActiveKey] = useState(null);

    const handleAccordionClick = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };


    return (
        <>
            {data?.map((item) => (
                <div key={item.key} className={`mb-2 h-auto rounded ${activeKey === item.key ? '' : ''} `}>
                    <button
                        className={`flex items-center p-3 w-full btnfaqs focus:outline-none ${activeKey === item.key ? 'redClr' : 'text-black'} `}
                        onClick={() => handleAccordionClick(item.key)}
                    >

                        <Icon
                            icon={activeKey === item.key ? icon1 : icon2}
                            className={activeKey === item.key ? 'redClr md:text-2xl text-lg' : 'text-black md:text-2xl text-lg'}

                        />
                        <span className="ml-2 text-left"> {item.title}
                        </span>

                    </button>
                    {activeKey === item.key && (
                        <div className="p-3">
                            <p className="text-gray-700">{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Faqs;
