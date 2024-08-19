import React from 'react';

import { FaBook } from 'react-icons/fa'; // Import a book icon from react-icons

const ScrollText = () => {


    const repeatCount = 5;
    const text = "REGISTRATION OPEN FOR SESSION 2024-2025"

    return (
        <header className='relative z-[300] w-full bg-red'>
            <div className="p-2 mx-auto overflow-hidden whitespace-nowrap">
                <div className="marquee-container">
                    <div className="inline-block animate-marquee hover:pause-marquee">

                        {Array.from({ length: repeatCount }).map((_, index) => (
                            <span key={index} className="inline-block mx-4 text-lg font-semibold text-white cursor-pointer hover:underline">
                                <FaBook className="inline mr-2" />
                                {text}
                                <FaBook className="inline ml-2" />
                            </span>
                        ))}

                    </div>
                </div>
            </div>
        </header>
    );
};



export default ScrollText;
