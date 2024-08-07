import React, { useState } from 'react';
import { principlesData } from '../../data/principles-data';
import { GoCheckCircleFill } from 'react-icons/go';


const Principles = () => {
  return (
    <div className="App bg-white min-h-screen flex flex-col">
     
      <div className="flex flex-grow overflow-hidden">
        <div className="w-1/4 bg-gray-200 p-4 h-screen overflow-y-auto sticky top-0">
          <h2 className="text-2xl font-semibold mb-4">Sections</h2>
          <ul className="list-none pl-0">
            {principlesData.map((section, index) => (
              <li key={index} className="mb-2">
                <a href={`#section-${index}`} className="text-blue-500 hover:underline">
                  {section.section}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 p-4 overflow-y-scroll h-screen">
          {principlesData.map((section, index) => (
            <div key={index} id={`section-${index}`} className="w-full max-w-4xl p-4">
              <SectionCard section={section} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SectionCard = ({ section }) => {
  const [season, setSeason] = useState('winter');
  const [gender, setGender] = useState('boys');

  const handleSeasonChange = (season) => {
    setSeason(season);
  };

  const handleGenderChange = (gender) => {
    setGender(gender);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-2">{section.section}</h2>
      <img src={section.image} alt={section.section} className="h-48 w-full object-cover rounded-lg mb-4" />
      
      <p className="text-gray-700 mb-4">{section.paragraph}</p>
      {section.additionalDetails && (
        <ul className="list-none pl-0 text-gray-700 mb-4">
          {section.additionalDetails.map((detail, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <GoCheckCircleFill className="text-green-500 mr-2" /> {detail}
            </li>
          ))}
        </ul>
      )}
      {section.section === "School Uniform" && (
        <div className="mb-4">
          <div className="mb-4">
            <button onClick={() => handleSeasonChange('winter')} className={` px-4 py-2 border ${season === 'winter' ?  'bg-white text-[rgb(185,179,183)]' : 'bg-white'}`}>
              Winter
            </button>
            <button onClick={() => handleSeasonChange('summer')} className={`px-4 py-2 border ${season === 'summer' ? 'bg-blue-500 text-white border-b-0' : 'bg-white'}`}>
              Summer
            </button>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="mb-4">
              <button onClick={() => handleGenderChange('boys')} className={`mr-2  font-bold py-3 px-5 border border-blue-700 rounded ${gender === 'boys' ? 'bg-[rgb(32,44,69)] text-white' : ' text-[rgb(32,44,69)] border-none hover:text-[rgb(236,26,159)]'}`}>
                Boys
              </button>
              <button onClick={() => handleGenderChange('girls')} className={` font-bold py-3 px-5 border  rounded transition-all ease-in-out ${gender === 'girls' ? 'bg-[rgb(32,44,69)] text-white' : 'text-[rgb(32,44,69)] border-none hover:text-[rgb(236,26,159)]'}`}>
                Girls
              </button>
            </div>
            {section.details[season] && (
              <>
                <UniformDetails type={gender.charAt(0).toUpperCase() + gender.slice(1)} details={section.details[season][gender]} season={season} />
              </>
            )}
          </div>
        </div>
      )}
      {section.details && section.section !== "School Uniform" && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Winter Uniform</h3>
          {section.details.winter && (
            <>
              <UniformDetails type="Boys" details={section.details.winter.boys} season="winter" />
              <UniformDetails type="Girls" details={section.details.winter.girls} season="winter" />
            </>
          )}
          <h3 className="text-xl font-semibold mb-2 mt-4">Summer Uniform</h3>
          {section.details.summer && (
            <>
              <UniformDetails type="Boys" details={section.details.summer.boys} season="summer" />
              <UniformDetails type="Girls" details={section.details.summer.girls} season="summer" />
            </>
          )}
        </div>
      )}
      {section.charts && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">House Tally</h3>
          {section.charts.map((chart, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold">{chart.title}</h4>
              <img src={chart.image} alt={chart.title} className="h-48 w-full object-cover rounded-lg mb-4" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const UniformDetails = ({ type, details, season }) => {
  return (
    <div className={`mb-4 border ${season === 'winter' ? 'border-gray-200' : 'border-gray-300'} p-4 rounded-lg flex`}>
      <img src={details.image} alt={`${type} uniform`} className="h-48 w-48 object-cover rounded-lg mb-4 mr-4" />
      <div>
        <h4 className="text-lg font-semibold">For All days Except Monday and Friday</h4>
       
        <ul className="list-none pl-0 text-gray-700">
          {details.additionalDetails.map((detail, idx) => (
            <li key={idx} className="flex items-center mb-2">
              <GoCheckCircleFill className="text-green-500 mr-2" /> {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Principles;
