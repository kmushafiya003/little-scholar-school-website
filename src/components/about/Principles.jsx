import React, { useState } from 'react'
import { GoCheckCircleFill } from 'react-icons/go'

import { principlesData } from '../../data/About/principles-data'
import HouseTallyChart from './Principles/HouseTallychart'

// Data for different years
const data2017 = [
  { name: 'Krishna House', tally: 465, color: '#FFD700' },
  { name: 'Kaveri House', tally: 304, color: '#00FF00' },
  { name: 'Ganga House', tally: 294, color: '#0000FF' },
  { name: 'Yamuna House', tally: 395, color: '#FF0000' }
]

const data2019 = [
  { name: 'Krishna House', tally: 486, color: '#FFD700' },
  { name: 'Kaveri House', tally: 351, color: '#00FF00' },
  { name: 'Ganga House', tally: 414, color: '#0000FF' },
  { name: 'Yamuna House', tally: 483, color: '#FF0000' }
]

const data2022 = [
  { name: 'Krishna House', tally: 363, color: '#FFD700' },
  { name: 'Kaveri House', tally: 448, color: '#00FF00' },
  { name: 'Ganga House', tally: 384, color: '#0000FF' },
  { name: 'Yamuna House', tally: 439, color: '#FF0000' }
]

const Principles = () => {
  const handleScroll = sectionId => {
    const sectionElement = document.getElementById(sectionId)
    const offsetTop = sectionElement.offsetTop
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className='w-11/12 mx-auto bg-white App '>
      <div className='flex-wrap py-20 overflow-hidden text-left rounded-lg md:flex overscroll-y-contain 2xl:flex 2xl:flex-nowrap'>
        {/* Sidebar for section links */}
        <div className='mx-auto mt-5 overflow-y-auto text-center md:w-8/12 md:overflow-hidden scroll-mx-0 2xl:w-1/4 lg:text-left'>
          <ul className='list-none border-0.2 border-[rgb(211,203,203)] rounded-lg'>
            {principlesData.map((section, index) => (
              <li
                key={index}
                className='border-b-0.2 border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem] hover:bg-[rgb(244,243,243)]'
                onClick={() => handleScroll(`section-${index}`)}
              >
                <a
                  href={`#section-${index}`}
                  className='block ml-3 py-2 text-[0.95rem] text-black font-[400] font-open-sans break-words scroll-smooth'
                >
                  {section.section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content area */}
        <div className='w-3/4 p-4 overflow-y-auto'>
          {principlesData.map((section, index) => (
            <div
              key={index}
              id={`section-${index}`}
              className='w-full p-4 last:border-b-0'
            >
              <SectionCard section={section} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SectionCard = ({ section }) => {
  const [selectedYear, setSelectedYear] = useState('2022-23')
  // const [season, setSeason] = useState('winter')
  // const [gender, setGender] = useState('boys')

  const getDataForYear = year => {
    switch (year) {
      case '2017-18':
        return data2017
      case '2019-20':
        return data2019
      case '2022-23':
        return data2022
      default:
        return data2022
    }
  }

  // const uniformData = section.details ? section.details[season][gender] : {};

  return (
    <div className='pb-10 rounded-lg'>
      <h2 className='text-[1.8rem] border-b-0.2 p-4 border-[rgb(173,172,172)] font-semibold mb-2'>
        {section.section}
      </h2>

      {section.image && (
        <img
          src={section.image}
          alt={section.section}
          className='w-full p-4 mb-4 rounded-lg shadow-lg'
        />
      )}

      {/* Handle paragraphs with gaps */}
      {Array.isArray(section.paragraph) ? (
        section.paragraph.map((para, index) => (
          <p
            key={index}
            className={`mb-4 text-lg font-[300] ${
              index !== section.paragraph.length - 1 ? 'mb-6' : ''
            }`}
          >
            {para}
          </p>
        ))
      ) : (
        <p className='mb-4 text-lg font-[300]'>{section.paragraph}</p>
      )}

      {section.section === 'House System' && (
        <div className='mt-4 font-open-sans'>
          {/* Tabs for Year Selector */}
          <div className='tabs flex  relative border-b-0.2 border-gray-300 bg-white'>
            <button
              onClick={() => setSelectedYear('2017-18')}
              className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
                selectedYear === '2017-18'
                  ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
                  : 'bg-white text-gray-500 hover:border-gray-300'
              }`}
            >
              House Tally 2017-18
            </button>
            <button
              onClick={() => setSelectedYear('2019-20')}
              className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
                selectedYear === '2019-20'
                  ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-r-2 border-t border-l'
                  : 'bg-white text-gray-500 hover:border-gray-300'
              }`}
            >
              House Tally 2019-20
            </button>
            <button
              onClick={() => setSelectedYear('2022-23')}
              className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
                selectedYear === '2022-23'
                  ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-r-2 border-t border-l'
                  : 'bg-white text-gray-500 hover:border-gray-300'
              }`}
            >
              House Tally 2022-23
            </button>
          </div>
          <div className='p-4 border-b border-l border-r border-gray-300'>
            <HouseTallyChart data={getDataForYear(selectedYear)} />
          </div>
        </div>
      )}

      {section.teachersStaff && (
        <FacultySection facultySections={section.teachersStaff} />
      )}

      {section.section === 'School Uniform' && <SchoolUniform data={section} />}
    </div>
  )
}

const FacultySection = ({ facultySections }) => {
  const [selectedSection, setSelectedSection] = useState('primaryFoundation')

  const handleSectionChange = section => {
    setSelectedSection(section)
  }

  const currentSection = facultySections[selectedSection] || {}

  return (
    <div className='p-4 mt-4 font-open-sans '>
      <div className='tabs relative flex border-b-0.2 border-gray-300 bg-white'>
        <button
          onClick={() => handleSectionChange('primaryFoundation')}
          className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
            selectedSection === 'primaryFoundation'
              ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
              : 'bg-white text-gray-500 hover:border-gray-300'
          }`}
        >
          Primary Foundation
        </button>
        <button
          onClick={() => handleSectionChange('juniorPreparatory')}
          className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
            selectedSection === 'juniorPreparatory'
              ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
              : 'bg-white text-gray-500 hover:border-gray-300'
          }`}
        >
          Junior Preparatory
        </button>
        <button
          onClick={() => handleSectionChange('middleStage')}
          className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
            selectedSection === 'middleStage'
              ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
              : 'bg-white text-gray-500 hover:border-gray-300'
          }`}
        >
          Middle Stage
        </button>
        <button
          onClick={() => handleSectionChange('seniorSecondary')}
          className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
            selectedSection === 'seniorSecondary'
              ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
              : 'bg-white text-gray-500 hover:border-gray-300'
          }`}
        >
          Senior Secondary
        </button>
      </div>
      <div className='border-gray-300 border-l-0.2 border-b-0.2 border-r-0.2'>
        {currentSection.image && (
          <img
            src={currentSection.image}
            alt={currentSection.title}
            className='w-full p-4 mb-4 rounded-lg shadow-lg'
          />
        )}

        <p className='text-lg font-[300] mb-4 '>{currentSection.paragraph}</p>
        <p className='text-lg font-[300] mb-4 p-4'>{currentSection.para}</p>
        <h3 className='text-[1.5rem] font-semibold mb-4 border-b-0.2 p-4'>
          TEACHERS & STAFF
        </h3>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
          {currentSection.staff &&
            currentSection.staff.map((staff, index) => (
              <div key={index} className='p-4 rounded-lg'>
                <img
                  src={staff.image}
                  alt={staff.name}
                  className='object-contain w-full h-auto mb-2 rounded-lg shadow-xl'
                />
                <h4 className='text-lg font-semibold text-center text-wrap'>
                  {staff.name}
                </h4>
                <p className='text-sm text-gray-600'>{staff.position}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const SchoolUniform = ({ data }) => {
  const [season, setSeason] = useState('winter')
  const [gender, setGender] = useState('boys')

  const uniformData = data.details[season][gender]

  return (
    <div className='mt-4 font-open-sans'>
      <div className='tabs flex  border-b-0.2 border-gray-300 bg-white '>
        <button
          onClick={() => setSeason('winter')}
          className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
            season === 'winter'
              ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
              : 'bg-white text-gray-500 hover:border-gray-300'
          }`}
        >
          Winter
        </button>
        <button
          onClick={() => setSeason('summer')}
          className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
            season === 'summer'
              ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r'
              : 'bg-white text-gray-500 hover:border-gray-300'
          }`}
        >
          Summer
        </button>
      </div>

      <div className='p-4 border-b border-l border-r border-gray-300'>
        <div className='mb-4 border-gray-300 '>
          <button
            onClick={() => setGender('boys')}
            className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${
              gender === 'boys'
                ? 'bg-dark-blue rounded-lg text-white font-semibold'
                : 'text-gray-700 hover:text-[rgb(210,73,169)]'
            }`}
          >
            Boys
          </button>
          <button
            onClick={() => setGender('girls')}
            className={`px-4 py-2 border-gray-300 hover:border-gray-300 ${
              gender === 'girls'
                ? 'bg-dark-blue rounded-lg text-white font-semibold'
                : 'text-gray-700 hover:text-[rgb(210,73,169)]'
            }`}
          >
            Girls
          </button>
        </div>
        {/* Uniform Content */}
        <div className='flex-col items-center p-4 sm:flex sm:items-center sm:flex-row 2xl:flex gap-14'>
          {uniformData.image && (
            <img
              src={uniformData.image}
              alt={`${season} uniform for ${gender}`}
              className='mb-4 rounded-md'
            />
          )}

          {uniformData.additionalDetails && (
            <ul className='pl-5 '>
              {uniformData.paragraph && (
                <p className='mb-4 text-lg font-semibold font-open-sans'>
                  {uniformData.paragraph}
                </p>
              )}
              {uniformData.additionalDetails.map((item, index) => (
                <div className='flex ' key={index}>
                  <span className='mt-1'>
                    <GoCheckCircleFill />
                  </span>
                  <li key={index} className='mb-2 ml-2 text-dark-grey'>
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Principles
