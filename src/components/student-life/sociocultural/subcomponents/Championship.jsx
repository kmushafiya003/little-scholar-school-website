import React from 'react';
import island from '../../../../images/StudentLife/Sociocultural/island.webp';
import shruti from '../../../../images/StudentLife/Sociocultural/shruti.webp';
import amby from '../../../../images/StudentLife/Sociocultural/amby.webp';
import mansvi from '../../../../images/StudentLife/Sociocultural/mansvi.webp';
import Pallavi from '../../../../images/StudentLife/Sociocultural/pallavi.webp';
import Ab1 from '../../../../images/StudentLife/Sociocultural/Ab1.webp';
import Ab2 from '../../../../images/StudentLife/Sociocultural/Ab2.webp';

import ChampionshipTable from './ChampionshipTable';

const Championship = () => {
    const data = [
        {
            h1: "IIMUN Championship Conference - 2024",
            h2: "Little Scholars Model United Nations (MUN) Journey",
            paragraph: [
                "The Model United Nations (MUN) journey at school Little Scholars likely began in 2017 with pioneering teachers Ms. Anju Singal and Ms. Annanya Tiwari who saw the value in simulating international diplomacy for students. Since then, it has likely grown to become a platform for students to develop skills in research, public speaking, negotiation, and critical thinking while exploring global issues.",
                "Winning 6 times The Best School Delegation Trophy from 2017 is an impressive achievement! It speaks volumes about the dedication, preparation, and talent of both the students and the teacher advisors involved in the MUN program.",
                "Winning awards or achieving significant recognition at IIMUN championship conference in Mumbai is undoubtedly a remarkable feat.",
            ],
            images: [
                { image: island, tag: "Championship Conference 2018 Madh Island" },
                { image: shruti, tag: "Shruti Agarwal – 2nd Position" },
                { image: amby, tag: "The Delegates in the natural ambience of Amby Valley 2019" },
                { image: mansvi, tag: "Manasvi Kaira – 2nd Position" },
                { image: Pallavi, tag: "Pallavi Sharma – 3rd Position" }
            ],
            About: [
                "I.I.M.U.N. is the world’s largest youth-run non-profit organization.",
                "I.I.M.U.N.'s vision is to unite the world, the Indian way by sensitizing tomorrow’s leaders, today.",
                "I.I.M.U.N. aims to empower the youth to start taking initiatives in combating global problems on an individual level.",
                "The idea is to move from a classroom discussion to creating tangible change, an attempt at making this a borderless world.",
            ],
            AboutImages: [Ab1, Ab2],
            table: true,
            fees: [
                {
                    title: "Fee and Inclusion (50000 INR)",
                    points: [
                        "Conference Fee",
                        "3 Nights and 4 Days accommodation at Aamby Valley City",
                        "All meals from dinner on 14th August, 2024 to Breakfast on 19th August 2024",
                        "Pre-conference Live training & study material",
                        "Delegate kit",
                        "Entry to all Socials as per the itinerary",
                        "Transport (to and fro) from Kashipur / Ramnagar to Delhi International Airport and Aamby Valley City",
                        "Flight tickets (Delhi To Mumbai and Mumbai To Delhi)",
                    ]
                }
            ],
            
        }
    ];

    return (
       <section className='p-4 ml-2'>
         <div className="">
            {data.map((item, index) => (
                <div key={index} className="space-y-6">
                    {/* Header */}
                    <h1 className="text-[1.8rem] text-dark-blue font-semibold mb-6 border-b-0.2 p-2 border-[rgb(141,141,141)]">{item.h1}</h1>
                    <h2 className="text-[1.8rem] text-dark-blue font-semibold mb-6 ">{item.h2}</h2>

                    {/* Paragraphs */}
                    <div className="space-y-4">
                        {item.paragraph.map((para, i) => (
                            <p key={i} className="mb-6 font-[300] text-[1.1rem]">{para}</p>
                        ))}
                    </div>

                    {/* Images */}
                    <div className=" flex flex-wrap flex-row gap-2 p-4 ">
                        {item.images.map((img, i) => (
                            <div key={i} className="flex flex-col items-center p-2">
                                <img src={img.image} alt={img.tag} className="w-full h-auto " />
                                <figcaption className="mb-6 font-[300] text-[1.1rem]">{img.tag}</figcaption>
                            </div>
                        ))}
                    </div>

                    {/* About Section */}
                    <div className="space-y-4 p-4">
                        <h3 className="text-xl font-semibold">About I.I.M.U.N.</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {item.About.map((text, i) => (
                                <li key={i} className="mb-6 font-[300] text-[1.1rem]">{text}</li>
                            ))}
                        </ul>

                        {/* About Images */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 p-4">
                            {item.AboutImages.map((img, i) => (
                                <div key={i} className="flex justify-center items-center">
                                    <img src={img} alt={` ${i + 1}`} className="w-full h-auto object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-4'>
                    {item.table && <ChampionshipTable/>}
                    </div>
                    {/* Table Section */}
                    {item.table && (
                        <div className="space-y-4 p-4 ml-14">
                            {item.fees.map((fee, i) => (
                                <div key={i} className="space-y-2">
                                    <h3 className="text-xl font-semibold">{fee.title}</h3>
                                    <ul className="list-disc pl-5 space-y-2 p-2">
                                        {fee.points.map((point, j) => (
                                            <li key={j} className="mb-6 font-[300] text-[1.1rem] ">{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    
                </div>
            ))}
        </div>
       </section>
    );
};

export default Championship;
