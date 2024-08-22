import React, { useState, useEffect } from 'react';
import { socioculturalData } from '../../../data/StudentLife/sociocultural';
import DiffImageSlider from '../../common/DiffImageSlider';
import Clubs from './subcomponents/Clubs';
import PresentationTable from './subcomponents/PresentationTable';
import Arms from './subcomponents/Arms';
import IIMUNForm from './subcomponents/IIMUNForm';
import Championship from './subcomponents/Championship';

const SocioCultural = () => {
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    // Set the first tab as active for each section on mount
    const initialTabs = {};
    socioculturalData.forEach((section, index) => {
      if (section.tabs && section.tabs.length > 0) {
        initialTabs[index] = 0; // Set the first tab (index 0) as active
      }
    });
    setActiveTab(initialTabs);
  }, []);

  const handleTabChange = (sectionIndex, tabIndex) => {
    setActiveTab(prev => ({
      ...prev,
      [sectionIndex]: tabIndex,
    }));
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='academics-nds-container w-11/12 mx-auto bg-white'>
      {console.log('rendering')}
      <div className="flex flex-wrap md:justify-center 2xl:justify-start py-20 gap-x-8 rounded-lg 2xl:flex-nowrap">
        {/* Sidebar */}
        <div className="w-full  md:w-10/12 2xl:w-1/4 mt-4 overflow-y-auto text-center">
          <ul className='list-none border border-[rgb(211,203,203)] rounded-lg'>
            {socioculturalData.map((section, index) => (
              <li className='border-b border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem]' key={index}>
                <button 
                  className="text-left font-[600] p-2 bg-transparent"
                  onClick={() => scrollToSection(`section-${index}`)}
                >
                  {section.title}
                </button>
              </li>
            ))}
            {/* Titles for Additional Components */}
            <li className='border-b border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem]'>
              <button 
                className="text-left font-[600] p-2 bg-transparent text-wrap"
                onClick={() => scrollToSection('arms')}
              >
                The open ARMS Project-Inclusive Education
              </button>
            </li>
            <li className='border-b border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem]'>
              <button 
                className="text-left font-[600] p-2 bg-transparent text-wrap"
                onClick={() => scrollToSection('clubs')}
              >
                Clubs-Internationalism
              </button>
            </li>
            
            <li className='border-b border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem]'>
              <button 
                className="text-left font-[600] p-2 bg-transparent text-wrap"
                onClick={() => scrollToSection('championship')}
              >
                IIMUN Championship Conference-2024
              </button>
            </li>
            <li className='border-b border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem]'>
              <button 
                className="text-left font-[600] p-2 bg-transparent text-wrap"
                onClick={() => scrollToSection('iimunForm')}
              >
                IIMUN Form 2024
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="py-4 2xl:mt-0 mt-6 w-11/12 md:w-10/12 2xl:w-3/4 mx-auto">
          {socioculturalData.map((section, sectionIndex) => (
            <div key={sectionIndex} id={`section-${sectionIndex}`}>
              <h1 className="text-[1.8rem] text-dark-blue font-semibold mb-6 border-b border-[rgb(141,141,141)] p-2">
                {section.title}
              </h1>

              {section.additionalParagraph && section.additionalParagraph.map((p, paraIndex) => (
                <React.Fragment key={paraIndex}>
                  <p className="mb-6 font-light text-[1.1rem]">{p}</p>
                  {/* Conditionally render PresentationTable */}
                  {p.table && <PresentationTable />}
                </React.Fragment>
              ))}

              {section.tabs && (
                <div>
                  {/* Tab Buttons */}
                  <div className="tabs flex flex-wrap relative border-b border-gray-300 bg-white">
                    {section.tabs.map((tab, tabIndex) => (
                      <button
                        key={tabIndex}
                        onClick={() => handleTabChange(sectionIndex, tabIndex)}
                        className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${activeTab[sectionIndex] === tabIndex ? 'bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r' : 'bg-white text-gray-500 hover:border-gray-300'}`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  {section.tabs.map((tab, tabIndex) => (
                    <div
                      key={tabIndex}
                      className={`p-4 border-l border-b border-r border-gray-300 ${activeTab[sectionIndex] === tabIndex ? 'block' : 'hidden'}`}
                    >
                      <h3 className="text-xl font-semibold p-2">{tab.h3}</h3>

                      {tab.sliderImages && tab.sliderImages.length > 0 && (
                        <DiffImageSlider images={tab.sliderImages} slidesPerView={1} />
                      )}

                      {tab.images && tab.images.map((img, imgIndex) => (
                        <div className="text-center my-4" key={imgIndex}>
                          <img src={img.image} alt={img.tag} className="max-w-full h-auto" />
                          <p className='mb-6 font-light text-[1.1rem]'>{img.tag}</p>
                        </div>
                      ))}

                      {tab.additionalParagraph && tab.additionalParagraph.map((para, paraIndex) => (
                        <div key={paraIndex}>
                          {para.name && <h4 className="text-lg font-semibold p-2">{para.name}</h4>}
                          {para.Tabpara && para.Tabpara.map((innerPara, innerIndex) => (
                            <p className='mb-6 mt-2 font-light text-[1.1rem]' key={innerIndex}>{innerPara}</p>
                          ))}

                          {para.paralist && para.paralist.map((listItem, listIndex) => (
                            <div key={listIndex} className="my-4">
                              {listItem.liTitle && <h5 className="text-md font-semibold">{listItem.liTitle}</h5>}
                              {listItem.liHeading && <p className='mb-6 font-light text-[1.1rem] flex'>{listItem.liHeading}</p>}
                              {listItem.liList && (
                                <ul className="list-disc pl-5">
                                  {listItem.liList.map((item, itemIndex) => (
                                    <li className='mb-6 font-light text-[1.1rem]' key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}

                      {/* Conditionally render PresentationTable before Teachers & Staff */}
                      {tab.additionalParagraph?.some(para => para.table) && <PresentationTable />}

                      {/* Render teachers if available */}
                      {tab.teachers && (
                        <div>
                          <h3 className="text-[1.5rem] font-semibold mb-4 border-b border-[rgb(141,141,141)] p-4">
                            TEACHERS & STAFF
                          </h3>
                          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                            {tab.teachers.map((teacher, index) => (
                              <div
                                key={index}
                                className="mb-2 flex items-center flex-col rounded-lg"
                              >
                                <img
                                  src={teacher.image}
                                  alt={teacher.name}
                                  className="object-contain w-full h-auto mb-2 rounded-lg shadow-xl"
                                />
                                <h4 className="text-lg font-semibold text-center text-wrap">
                                  {teacher.name}
                                </h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {tab.ParaImages && tab.ParaImages.map((paraImage, paraImageIndex) => (
                        <div key={paraImageIndex} className="my-4">
                          <p>{paraImage.p}</p>
                          {paraImage.image && <img src={paraImage.image} alt={paraImage.p} className="max-w-full h-auto" />}
                        </div>
                      ))}

                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Additional Components */}
          <div id="clubs" className="mt-8">
            <Clubs />
          </div>
          <div id="arms" className="mt-8">
            <Arms />
          </div>
          <div id="championship" className="mt-8">
            <Championship />
          </div>
          <div id="iimunForm" className="mt-8">
            <IIMUNForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocioCultural;
