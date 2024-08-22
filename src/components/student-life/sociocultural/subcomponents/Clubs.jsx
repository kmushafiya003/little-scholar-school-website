import React, { useState } from 'react';
import IIMUN1 from '../../../../images/StudentLife/Sociocultural/IIMUN1.webp';
import IIMUN2 from '../../../../images/StudentLife/Sociocultural/IIMUN2.webp';
import IIMUN3 from '../../../../images/StudentLife/Sociocultural/IIMUN3.webp';
import IIMUN4 from '../../../../images/StudentLife/Sociocultural/IIMUN4.webp';
import Ashoka from '../../../../images/StudentLife/Sociocultural/ashoka.webp';
import Haritkram from '../../../../images/StudentLife/Sociocultural/haritkram_logo.webp';
import Prisha from '../../../../images/StudentLife/Sociocultural/prisha.webp';
import Manjula from '../../../../images/StudentLife/Sociocultural/manjula.webp';
import Auli from '../../../../images/StudentLife/Sociocultural/Auli.webp';
import School from '../../../../images/StudentLife/Sociocultural/school.webp'
import DiffImageSlider from '../../../common/DiffImageSlider';

const Clubs = ({ containerClass = '', headingClass = '', buttonClass = '', imageClass = '', paragraphClass = '' }) => {
    const [activeTab, setActiveTab] = useState('IIMUN');

    const data = [
        {
            title: "Clubs-Internationalism",
            tabs: [
                {
                    name: "IIMUN",
                    h3: "IIMUN",
                    table: false,
                    images: [IIMUN1, IIMUN2, IIMUN3, IIMUN4],
                    para: [
                        {
                            name: null,
                            para: [
                                "I.I.M.U.N. is one of the world’s largest youth-run organisations that aims to bring the world closer. It empowers the youth by enabling them to solve global problems at an individual level. Every student who participates at any I.I.M.U.N. Chapter conference follows a 3-step approach :-",
                                "Comprehend* - Discuss agenda through video and face-to-face tutorials.",
                                "Congregate* - Debate possible solutions of each simulation.",
                                "Create - Execute an IIMUN actionable goal and get rewarded with a certificate.",
                            ],
                        },
                        {
                            name: "Events",
                            para: [
                                "National",
                                "International",
                                "Championship",
                                "LITTLE SCHOLARS joined IIMUN in 2016 and our delegates have contributed extremely well and have won numerous accolades.",
                            ],
                        },
                        {
                            name: "ACHIEVEMENTS",
                            para: [
                                {
                                    sub: "National",
                                    insidePara: [
                                        "Little scholars grabbed school trophy, for consecutive two years at Kashipur chapter 2016 and 2017.",
                                        "Besides this it won the School trophy in Moradabad chapter 2017",
                                    ],
                                },
                                {
                                    sub: "International",
                                    insidePara: [
                                        "In 2022 Little Scholars took part in the BEST MUN conference, in Saudi Arabia and won the title of Best Delegate.",
                                    ],
                                },
                                {
                                    sub: "CHAMPIONSHIP",
                                    insidePara: [
                                        "By getting high commendation, special mention, verbal mention and Best Delegate, our scholars also proved themselves in Championship conference which was held in Mumbai.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Ashoka Changemaker Day",
                    h3: "Ashoka Changemaker Day",
                    ParaImages: [
                        { p: ["Little Scholars, Kashipur, and Ashoka Innovators collaborated to conduct Changemaker Day on Jan 23rd, Saturday to promote the idea of 'Everyone A Changemaker.'","Seven schools were a part of the event and, a total of 143 participants were present."], image: Ashoka },
                        
                        { p: "The event began with a presentation by Ms. Preethi Ramachandran, the coordinator from Ashoka. She elaborated on the Ashoka Young Changemakers community and introduced the two guest speakers for the day; Mr. Mathew Jose, the founder of Paperman, and Mr. Hitarth Seth, the founder of Buddhiman and Gujju Student.", image: null },
                        { p: "They spoke about their journey as a changemaker, which followed an idea pitching event by the students. Some honorable mentions are Quenching the thirst of Animals by Gargi, Applied Learning Program by Prabhleen, and The Open Arms Project by Prisha. The participants received constructive feedback from the speakers at the end of their presentation. The next event was a Q & A round, where the students asked relevant questions to the speakers through the chatbox. The speakers answered them with precision and expertise that perhaps was a result of their intense experience.", image: null },
                        { p: "The event ended on a positive note. The atmosphere was of learning and development.", image: null }
                    ],
                },
                {
                    name: "Harithkram",
                    h3: "Harithkram",
                    ParaImages: [
                        { p:[ "The students of Little Scholars Kashipur have always been in the forefront so far as ‘Environmental Awareness’ is concerned, making climate issues occupy centrestage with their enthusiastic participation in such activities.","The same zeal was on display when Auli Arora, Parth Garg and Prisha Bhalla represented the school in the three-day youth conference organized by Harithkram, the Environment Society of Shaheed Bhagat Singh College, Delhi."], image: Haritkram },
                        
                        { p: "The School Student Conference (SSC) by DUSF under its School Outreach Programme saw not only the coming together of Harithkram’s two flagship events — Delhi University Sustainability Forum (DUSF’20) and Harithkram Model United Nations Environment Assembly (HUMNEA’21), but also intense brainstorming, powerful debates and ardent discussions among youngsters from different schools.", image: "" },
                        { p: "The participants of LS impressed one and all with their views and the school was one of the seven shortlisted schools going to the next round.", image: "" },
                        { p: "Not only this, the children made it a moment to be savoured by the school when Little Scholars Kashipur was declared joint runners-up along with GHHS Edavilangu, Thrissur, Kerala.", image: "" },
                        { p: "We look forward to more such laurels from our talented bunch of children.", image: "" }
                    ],

                    SliderImages:[Prisha,Manjula,Auli,School],
                },
            ],
        },
    ];

    const activeTabData = data[0].tabs.find(tab => tab.name === activeTab);

    return (
        <div className={` ${containerClass}`}>
            <h1 className={`text-[1.8rem] text-dark-blue font-semibold  border-b-0.2 p-2 border-[rgb(141,141,141)] ${headingClass}`}>{data[0].title}</h1>
            
            <div className="tabs flex flex-wrap relative border-b-0.2 border-gray-300 bg-white">
                {data[0].tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 mt-4 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${activeTab === tab.name ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r' : 'bg-white text-gray-500 hover:border-gray-300'} hover:bg-blue-700 ${buttonClass}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {activeTabData && (
                <div className='border-l-0.2 border-b-0.2 border-r-0.2 border-gray-300 p-4 '>
                    <h2 className={`text-xl p-2 font-semibold mb-4 ${headingClass}`}>{activeTabData.h3}</h2>
                    
                    {activeTabData.images && activeTabData.images.length > 0 && (
                        <div className="mb-6 grid grid-cols-1 grid-rows-2 sm:grid-cols-2  ">
                            {activeTabData.images.map((img, j) => (
                                <img
                                    key={j}
                                    src={img}
                                    alt={` ${j}`}
                                    className={`w-full  p-2 ${imageClass}`}
                                />
                            ))}
                        </div>
                    )}

                    {activeTabData.ParaImages && activeTabData.ParaImages.length > 0 && (
                        <div>
                            {activeTabData.ParaImages.map((paraImg, k) => (
                                <div
                                    key={k}
                                    className={`flex ${Array.isArray(paraImg.p) ? 'flex-row' : ''} items-center`}
                                >
                                    <div className="flex-1">
                                        {Array.isArray(paraImg.p) ? (
                                            paraImg.p.map((text, idx) => (
                                                <p key={idx} className={`mb-6 font-[300] text-[1.1rem]${paragraphClass}`}>{text}</p>
                                            ))
                                        ) : (
                                            <p className={`mt-6 font-[300] text-[1.1rem]${paragraphClass}`}>{paraImg.p}</p>
                                        )}
                                    </div>
                                    {paraImg.image && (
                                        <div className="flex-none">
                                            <img
                                                src={paraImg.image}
                                                alt={` ${k}`}
                                                className={`w-full ${imageClass}`}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTabData.SliderImages && activeTabData.SliderImages.length > 0 && (
                        <div className="mb-6  px-10 py-14 h-[50%] ">
                            <DiffImageSlider images={activeTabData.SliderImages} fullScreen={true} />
                        </div>
                    )}

                    {activeTabData.para && activeTabData.para.map((section, l) => (
                        <div key={l} className="mb-6">
                            {section.name && <h3 className={`text-lg font-semibold mb-2 ${headingClass}`}>{section.name}</h3>}
                            {section.para.map((para, m) => {
                                // Handle if para is an object
                                if (typeof para === 'object' && para !== null) {
                                    return (
                                        <div key={m} className="mb-4">
                                            <h4 className={`font-semibold ${headingClass}`}>{para.sub}</h4>
                                            {para.insidePara.map((innerPara, n) => (
                                                <p key={n} className={`mb-2 font-[300] text-[1.1rem] ${paragraphClass}`}>{innerPara}</p>
                                            ))}
                                        </div>
                                    );
                                }
                                // Handle if para is a string
                                return <p key={m} className={`mb-4 font-[300] text-[1.1rem] ${paragraphClass}`}>{para}</p>;
                            })}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clubs;
