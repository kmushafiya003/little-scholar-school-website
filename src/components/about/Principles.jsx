import React, { useState, useEffect } from 'react';
import { GoCheckCircleFill } from "react-icons/go";
import { BiArrowFromBottom } from 'react-icons/bi';
import { principlesData } from '../../data/About/principles-data';
import HouseTallyChart from '../../components/About/Principles/HouseTallychart';
import YearSelector from '../../components/About/Principles/YearSelector';

// Data for different years
const data2017 = [
  { name: 'Krishna House', tally: 465, color: '#FFD700' },
  { name: 'Kaveri House', tally: 304, color: '#00FF00' },
  { name: 'Ganga House', tally: 294, color: '#0000FF' },
  { name: 'Yamuna House', tally: 395, color: '#FF0000' },
];

const data2019 = [
  { name: 'Krishna House', tally: 486, color: '#FFD700' },
  { name: 'Kaveri House', tally: 351, color: '#00FF00' },
  { name: 'Ganga House', tally: 414, color: '#0000FF' },
  { name: 'Yamuna House', tally: 483, color: '#FF0000' },
];

const data2022 = [
  { name: 'Krishna House', tally: 363, color: '#FFD700' },
  { name: 'Kaveri House', tally: 448, color: '#00FF00' },
  { name: 'Ganga House', tally: 384, color: '#0000FF' },
  { name: 'Yamuna House', tally: 439, color: '#FF0000' },
];

const Principles = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScroll = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offsetTop = sectionElement.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App w-11/12 mx-auto bg-white min-h-screen">
      <div className="md:flex flex-wrap rounded-lg overflow-hidden overscroll-y-contain 2xl:flex text-left flex-nowrap">
        {/* Sidebar for section links */}
        <div className="md:w-8/12 text-center md:overflow-y-hidden scroll-mx-0 2xl:w-1/4 mt-5 lg:text-left mx-auto overflow-y-auto">
          <ul className="list-none border-0.2 border-[rgb(211,203,203)] rounded-lg">
            {principlesData.map((section, index) => (
              <li
                key={index}
                className="border-b-0.2 border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem] hover:bg-[rgb(244,243,243)]"
                onClick={() => handleScroll(`section-${index}`)}
              >
                <a
                  href={`#section-${index}`}
                  className="block ml-3 py-2 text-[0.95rem] text-black font-[400] font-open-sans break-words scroll-smooth"
                >
                  {section.section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content area */}
        <div className="md:mx-auto w-full 2xl:w-full overflow-y-scroll h-screen scroll-smooth scrollbar-none">
          {principlesData.map((section, index) => (
            <div key={index} id={`section-${index}`} className="w-full p-4 last:border-b-0">
              <SectionCard section={section} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className={`fixed bottom-10 right-10 ${isVisible ? 'opacity-100' : 'opacity-0'} z-50`}>
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-red  items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <BiArrowFromBottom className="h-100"  />
        </button>
      </div>
    </div>
  );
};

const SectionCard = ({ section }) => {
  const [selectedYear, setSelectedYear] = useState('2022-23');
  const [season, setSeason] = useState('winter');
  const [gender, setGender] = useState('boys');

  const getDataForYear = (year) => {
    switch (year) {
      case '2017-18':
        return data2017;
      case '2019-20':
        return data2019;
      case '2022-23':
        return data2022;
      default:
        return data2022;
    }
  };

  const uniformData = section.details ? section.details[season][gender] : {};

  return (
    <div className="rounded-lg mb-8">
      <h2 className="text-[1.8rem] border-b-0.2 p-4 border-[rgb(173,172,172)] font-semibold mb-2">
        {section.section}
      </h2>

      {section.image && (
        <img
          src={section.image}
          alt={section.section}
          className="mb-4 w-full shadow-lg p-4 rounded-lg"
        />
      )}

      {/* Handle paragraphs with gaps */}
      {Array.isArray(section.paragraph) ? (
        section.paragraph.map((para, index) => (
          <p
            key={index}
            className={`mb-4 text-lg font-[300] ${index !== section.paragraph.length - 1 ? 'mb-6' : ''}`}
          >
            {para}
          </p>
        ))
      ) : (
        <p className="text-gray-700 mb-4">{section.paragraph}</p>
      )}

      {section.section === 'House System' && (
        <div className="mt-4 font-open-sans">
          {/* Tabs for Year Selector */}
          <div className="tabs flex relative border-b-0.2 border-gray-300 bg-white">
            <button
              onClick={() => setSelectedYear('2017-18')}
              className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${selectedYear === '2017-18' ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r' : 'bg-white text-gray-500 hover:border-gray-300'}`}
            >
              House Tally 2017-18
            </button>
            <button
              onClick={() => setSelectedYear('2019-20')}
              className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${selectedYear === '2019-20' ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-r-2 border-t border-l' : 'bg-white text-gray-500 hover:border-gray-300'}`}
            >
              House Tally 2019-20
            </button>
            <button
              onClick={() => setSelectedYear('2022-23')}
              className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${selectedYear === '2022-23' ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-r-2 border-t border-l' : 'bg-white text-gray-500 hover:border-gray-300'}`}
            >
              House Tally 2022-23
            </button>
          </div>
          <div className='border-gray-300 border-l border-b border-r p-4'>
            <HouseTallyChart data={getDataForYear(selectedYear)} />
          </div>
        </div>
      )}

      {section.teachersStaff && <FacultySection facultySections={section.teachersStaff} />}

      {section.section === 'School Uniform' && <SchoolUniform data={section} />}
    </div>
  );
};

const FacultySection = ({ facultySections }) => {
  const [selectedSection, setSelectedSection] = useState('primaryFoundation');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const currentSection = facultySections[selectedSection] || {};

  return (
    <div className="mt-4 font-open-sans">
      <h3 className="text-[1.5rem] font-semibold mb-4">TEACHERS & STAFF</h3>

      <div className="flex mb-4">
        <button
          onClick={() => handleSectionChange('primaryFoundation')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${selectedSection === 'primaryFoundation' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Primary Foundation
        </button>
        <button
          onClick={() => handleSectionChange('juniorPreparatory')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${selectedSection === 'juniorPreparatory' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Junior Preparatory
        </button>
        <button
          onClick={() => handleSectionChange('middleStage')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${selectedSection === 'middleStage' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Middle Stage
        </button>
        <button
          onClick={() => handleSectionChange('seniorSecondary')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${selectedSection === 'seniorSecondary' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Senior Secondary
        </button>
      </div>

      {currentSection.image && <img src={currentSection.image} alt={currentSection.title} className="mb-4 w-full shadow-lg p-4 rounded-lg" />}

      <p className="text-lg font-[300] mb-4">{currentSection.paragraph}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentSection.staff && currentSection.staff.map((staff, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <img src={staff.image} alt={staff.name} className="mb-2 w-full h-32 object-cover rounded-lg" />
            <h4 className="text-xl font-semibold mb-2">{staff.name}</h4>
            <p className="text-sm text-gray-600">{staff.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SchoolUniform = ({ data }) => {
  const [season, setSeason] = useState('winter');
  const [gender, setGender] = useState('boys');

  const uniformData = data.uniforms ? data.uniforms[season][gender] : {};

  return (
    <div className="mt-4 font-open-sans">
      <h3 className="text-[1.5rem] font-semibold mb-4">School Uniform</h3>

      <div className="tabs flex border-b-0.2 border-gray-300 bg-white mb-4">
        <button
          onClick={() => setSeason('winter')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${season === 'winter' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Winter
        </button>
        <button
          onClick={() => setSeason('summer')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${season === 'summer' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Summer
        </button>
      </div>

      <div className="tabs flex border-b-0.2 border-gray-300 bg-white mb-4">
        <button
          onClick={() => setGender('boys')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${gender === 'boys' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Boys
        </button>
        <button
          onClick={() => setGender('girls')}
          className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${gender === 'girls' ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700'}`}
        >
          Girls
        </button>
      </div>

      <div className="border-gray-300 border-l border-b border-r p-4">
        {uniformData.image && <img src={uniformData.image} alt={uniformData.title} className="mb-4 w-full shadow-lg p-4 rounded-lg" />}
        {uniformData.details && (
          <ul className="list-disc list-inside text-gray-700">
            {uniformData.details.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Principles;
