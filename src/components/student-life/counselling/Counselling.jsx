import React, { useState } from 'react';
import counselling from '../../../images/StudentLife/counselling/counselling.webp';

const Counselling = () => {
  const counsellingData = [
    {
      title: "Counselling",
      additionalParagraph: [
        "School counselling is an integral part of the education system in large numbers of countries and in others it is emerging as a critical support for elementary middle, high school and senior secondary learning for career counselling and student health concerns.",
        "Our school counselor Manisha Sharma, working in little scholars since 2020, advocates for the mental health needs of all students by offering instructions that enhance awareness of mental health appraisal and advisement addressing academic career and social/emotional development, short term counselling interventions and reference to community resources for long term support for students and parents.",
      ],
      image: counselling,
    }
  ];

  const [activeSection, setActiveSection] = useState(0);

  const handleSectionChange = (index) => {
    setActiveSection(index);
    document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='counselling-container  bg-white py-20'>
      <div className="flex lg:flex-row flex-col w-11/12 mx-auto items-center lg:items-start gap-x-6 gap-y-5 rounded-lg ">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 2xl:w-1/4 mt-8 overflow-y-auto text-center lg:h-screen ">
          <ul className='list-none border border-[rgb(211,203,203)] rounded-lg'>
            {counsellingData.map((section, index) => (
              <li className='border-b border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem]' key={index}>
                <button 
                  className={`text-left font-[600] p-2 bg-transparent ${activeSection === index ? '' : ''}`}
                  onClick={() => handleSectionChange(index)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="py-4 sm:w-10/12 w-11/12 2xl:w-3/4">
          {counsellingData.map((section, index) => (
            <div key={index} id={`section-${index}`} className={`transition-opacity duration-500 ${activeSection === index ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-[1.8rem] text-dark-blue font-semibold mb-6 border-b border-[rgb(141,141,141)] p-2">
                {section.title}
              </h1>

              <div className="text-center my-4">
                <img src={section.image} alt={section.title} className="w-full h-auto p-4 shadow-lg" />
              </div>

              {section.additionalParagraph.map((p, paraIndex) => (
                <p key={paraIndex} className="mb-6 font-light text-[1.1rem]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counselling;
