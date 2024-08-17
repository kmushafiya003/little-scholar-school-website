import React, { useState, useRef, useEffect } from 'react';
import ImageSlider from '../common/ImageSlider'

const AcademicsNdsports = ({ data }) => {
  const sectionRefs = useRef({});
  const [selectedTabs, setSelectedTabs] = useState({});

  // Initialize selectedTabs state based on the first tab of each section
  useEffect(() => {
    const initialSelectedTabs = {};
    data.forEach((section) => {
      if (section.tabs && section.tabs.length > 0) {
        initialSelectedTabs[section.title] = section.tabs[0].name;
      }
    });
    setSelectedTabs(initialSelectedTabs);
  }, [data]);

  // Handle sidebar navigation
  const handleSidebarClick = (title) => {
    sectionRefs.current[title]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle tab switching
  const handleTabClick = (sectionTitle, tabName) => {
    setSelectedTabs((prevSelectedTabs) => ({
      ...prevSelectedTabs,
      [sectionTitle]: tabName,
    }));
  };

  return (
    <section className="academics-nds-container">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white text-black p-4">
          <h2 className="text-lg font-semibold mb-4">Sections</h2>
          <ul>
            {data.map((item) => (
              <li key={item.title} className="mb-2">
                <button
                  onClick={() => handleSidebarClick(item.title)}
                  className="w-full text-left p-2 bg-white hover:bg-gray-200"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4 overflow-y-auto">
          {data.map((section) => (
            <div
              key={section.title}
              ref={(el) => (sectionRefs.current[section.title] = el)}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

              {section.tabs?.length > 0 ? (
                <>
                  {/* Tab Buttons */}
                  <div className="mb-4">
                    {section.tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => handleTabClick(section.title, tab.name)}
                        className={`p-2 mr-2 ${
                          selectedTabs[section.title] === tab.name
                            ? 'bg-gray-400 text-white'
                            : 'bg-white'
                        }`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>

                  {/* Display Content of Selected Tab */}
                  {section.tabs.map(
                    (tab) =>
                      selectedTabs[section.title] === tab.name && (
                        <div key={tab.name} className="mb-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {tab.h3}
                          </h3>

                          {/* Render SliderImages if sliderImages is present */}
                          {tab.sliderImages && tab.sliderImages.length > 0 && (
                            <div className="mb-4">
                               <ImageSlider
                images={tab.sliderImages}
                backgroundColor="transparent"
                showNames={true}
                spaceBetween={40} 
                showDesignation={true}
                rounded={true} 
              />
                            </div>
                          )}

                          {/* Render individual images if available */}
                          {tab.images && (
                            <div className="mb-4">
                              {tab.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={tab.h3}
                                  className="w-full mb-2"
                                />
                              ))}
                            </div>
                          )}

                          {/* Check for PDF and render it */}
                          {tab.pdf && (
                            <div className="mb-4">
                              <h4 className="text-md font-semibold mb-2">
                                PDF Document:
                              </h4>
                              <iframe
                                src={tab.pdf}
                                title={tab.name}
                                className="w-full h-64"
                                frameBorder="0"
                                allowFullScreen
                              ></iframe>
                            </div>
                          )}

                          {/* Render additional paragraphs */}
                          {tab.additionalParagraph && (
                            <div className="mb-4">
                              {Array.isArray(tab.additionalParagraph) ? (
                                tab.additionalParagraph.map(
                                  (paragraph, index) => (
                                    <p key={index} className="mb-2">
                                      {paragraph}
                                    </p>
                                  )
                                )
                              ) : (
                                <p>{tab.additionalParagraph}</p>
                              )}
                            </div>
                          )}

                          {/* Render teachers if available */}
                          {tab.teachers && (
                            <div>
                              <h4 className="text-md font-semibold mb-2">
                                Teachers:
                              </h4>
                              {tab.teachers.map((teacher, index) => (
                                <div
                                  key={index}
                                  className="mb-2 flex items-center"
                                >
                                  <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="w-12 h-12 rounded-full mr-2"
                                  />
                                  <span>{teacher.name}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                  )}
                </>
              ) : (
                /* Render additional paragraphs if no tabs are present */
                section.additionalParagraph && (
                  <div className="mb-4">
                    {Array.isArray(section.additionalParagraph) ? (
                      section.additionalParagraph.map((paragraph, index) => (
                        <p key={index} className="mb-2">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p>{section.additionalParagraph}</p>
                    )}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsNdsports;
