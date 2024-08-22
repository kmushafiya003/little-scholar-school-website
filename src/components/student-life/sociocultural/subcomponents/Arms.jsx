import React, { useState } from 'react';
import jsr1 from '../../../../images/StudentLife/Sociocultural/jsr.webp';
import khwahish from '../../../../images/StudentLife/Sociocultural/kwahish.webp';

const Arms = ({ containerClass = '', headingClass = '', buttonClass = '', imageClass = '', paragraphClass = '' }) => {
    const [activeTab, setActiveTab] = useState('JSR Indu Samiti');

    const data = [
        {
            title: "The open ARMS Project-Inclusive Education",
            additionalParagraph: [
                "The journey to becoming an Inclusive School may be long and challenging at times, but ultimately this journey can strengthen a school community and benefit ALL children. Inclusion does not simply mean the placement of students with disabilities in general education classes. This process must incorporate fundamental change in the way a school community supports and addresses the individual needs of each child. In 2018, Little Scholars incorporated The open ARMS project after a pilot project carried out by their own students in collaboration with JSR Indu Samiti; a Residential School for the Specially Abled of creating a space within its curriculum planner which has now collaborated with other NGO’s and schools. As such, effective models of inclusive education not only benefit students with disabilities, but also create an environment in which every student; including those who do not have disabilities, has the opportunity to flourish.",
                "One of the most important principles of inclusive education is that no two learners are alike, and so inclusive schools place great importance on creating opportunities for students to learn and be assessed in a variety of ways. Teachers therefore must consider a wide range of learning modalities (visual, auditory, kinaesthetic, etc.) in designing instruction and help diversify the educational experience of the students.",
            ],
            tabs: [
                {
                    name: "JSR Indu Samiti",
                    h3: "JSR Indu Samiti",
                    images: [{ image: jsr1, tag: "School dedicated to PWDs is divided into three departments." }],
                    Tabpara: [
                        "i. Educational: Special Educators specialized in the respective fields along with volunteers and part time physiotherapists, speech therapists and care takers provides a healthy learning environment to differently abled children belonging to the categories of Mental Retardation, Hearing Impaired, Visually Impaired and Physically disabled.",
                        "ii. Residential: Residential facility along with healthy meals is provided to the students. Daily extra-curricular activities are designed by Hostel warden to keep the students fresh and shining all the time.",
                        "iii. Vocational Training: Vocational training is provided to the students to make them self reliant. Skill centre at JSR have Computer lab, Sewing and Tailoring Lab, Electronics Lab, Sanitary and Plubming Lab, Beauty Parlour cum Salon, Candle Making Lab and Sweater Machine Room wherein the students are trained in works with respect to their interest.",
                    ],
                },
                {
                    name: "Khwahish NGO",
                    h3: "Khwahish NGO",
                    images: [{ image: khwahish, tag: "" }],
                    Tabpara: [
                        "Khwahish is a humble effort by students and teachers to sow the seeds of primary education among the children as well as adults. Some of the students attend schools while some others are housewives or daily wage earners. The aim is to motivate people to come forward and share their valuable time and knowledge with these educationally malnourished sections. These souls appreciate even half an hour of your time. Though there's nothing more important than your knowledge, but donations too are necessary. Be a philanthropist by donating your time or money.",
                        "Apart from this, Khwahish works for animal welfare and has rescued more than 1000 stray animals till date. Visiting hours 4-6 pm.",
                    ],
                },
                {
                    name: "Lepers Colony",
                    h3: "Lepers Colony",
                    images: [{ image: "", tag: "" }],
                    Tabpara: [],
                },
            ],
        },
    ];

    const activeTabData = data[0].tabs.find(tab => tab.name === activeTab);

    return (
        <div className={`mt-6 font-open-sans   ${containerClass}`}>
            <h1 className={`text-[1.8rem] text-dark-blue font-semibold mb-6 border-b-0.2 p-2 border-[rgb(141,141,141)] ${headingClass}`}>{data[0].title}</h1>
            {data[0].additionalParagraph.map((para, i) => (
                <p key={i} className={`mb-6 font-[300] text-[1.1rem] ${paragraphClass}`}>{para}</p>
            ))}

            <div className=" tabs flex flex-wrap relative border-b-0.2 border-gray-300 bg-white">
                {data[0].tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${activeTab === tab.name ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r' : 'bg-white text-gray-500 hover:border-gray-300'} hover:bg-blue-700 ${buttonClass}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {activeTabData && (
                <div className='border-l-0.2 border-b-0.2 border-r-0.2 border-gray-300 p-4'>
                    <h2 className={`text-xl font-semibold ml-4 p-2 ${headingClass}`}>{activeTabData.h3}</h2>
                    {activeTabData.images.map((img, j) => (
                        img.image ? (
                            <div key={j} className={`mb-6 shadow-lg ${imageClass}`}>
                                <img src={img.image} alt={img.tag} className="w-full p-4 h-auto" />
                                {img.tag && <p className="p-2">{img.tag}</p>}
                            </div>
                        ) : null
                    ))}
                    {activeTabData.Tabpara && activeTabData.Tabpara.map((para, k) => (
                        <p key={k} className={`mb-6 font-[300] text-[1.1rem] ${paragraphClass}`}>{para}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Arms;
