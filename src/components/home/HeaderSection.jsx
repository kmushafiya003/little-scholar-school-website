import React from 'react';
import { headerData } from '../../data/header-text';
import PropTypes from 'prop-types';
import { FaBook } from 'react-icons/fa'; // Import a book icon from react-icons

const HeaderSection = () => {
    // Repeat the header data multiple times for a continuous effect
    const repeatedHeaderData = [...headerData, ...headerData, ...headerData, ...headerData, ...headerData];

    return (
        <header className='relative w-full bg-red'>
            <div className="p-2 mx-auto overflow-hidden whitespace-nowrap">
                <div className="marquee-container">
                    <div className="inline-block animate-marquee hover:pause-marquee">
                        {repeatedHeaderData.map((item, index) => (
                            <span key={index} className="inline-block mx-4 text-lg font-semibold text-white hover:underline">
                                <FaBook className="inline mr-2" /> {/* Book icon at the start */}
                                {item.title}
                                <FaBook className="inline ml-2" /> {/* Book icon at the end */}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

HeaderSection.propTypes = {
    headerData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default HeaderSection;
