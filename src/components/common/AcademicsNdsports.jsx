import React, { useState, useRef, useEffect } from "react";
import DiffImageSlider from "../common/DiffImageSlider";

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
    sectionRefs.current[title]?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle tab switching
  const handleTabClick = (sectionTitle, tabName) => {
    setSelectedTabs((prevSelectedTabs) => ({
      ...prevSelectedTabs,
      [sectionTitle]: tabName,
    }));
  };

  return (
    <section className="academics-nds-container bg-white App ">
      <div className="flex-wrap py-20 lg:w-10/12 mx-auto  text-left rounded-lg md:flex overscroll-y-contain 2xl:flex 2xl:flex-nowrap">
        {/* Sidebar */}
        <div className="mx-auto mt-5 overflow-y-auto text-center md:w-8/12 md:overflow-hidden scroll-mx-0 2xl:w-1/4 lg:text-center px-4 ">
          <ul className="list-none border-0.2 border-[rgb(211,203,203)]  rounded-lg ">
           <div className="">
           {data.map((item) => (
              <li
              onClick={() => handleSidebarClick(item.title)}
                key={item.title}
                className=" border-b-0.2 border-[rgb(211,203,203)] last:border-b-0 leading-[1.8rem] "
              >
                <button
                  onClick={() => handleSidebarClick(item.title)}
                  className=" text-left p-2 bg-transparent "
                >
                  {item.title}
                </button>
              </li>
            ))}
           </div>
          </ul>
        </div>

        {/* Main Content */}
        <div className="sm:w-10/12 w-11/12 py-4 overflow-y-auto mx-auto">
          {data.map((section) => (
            <div
              key={section.title}
              ref={(el) => (sectionRefs.current[section.title] = el)}
              className="w-full p-4 last:border-b-0"
            >
              <h2 className="text-[1.8rem] text-dark-blue font-open-sans p-4 font-semibold mb-4 border-b-2 border-[rgb(141,141,141)]">
                {section.title}
              </h2>

              {section.tabs?.length > 0 ? (
                <>
                  {/* Tab Buttons */}
                  <div className=" tabs flex flex-wrap relative border-b-0.2 border-gray-300 bg-white">
                    {section.tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => handleTabClick(section.title, tab.name)}
                        className={`px-4 py-2 border-gray-300 hover:rounded-tl-lg hover:rounded-tr-lg hover:border hover:border-b-0 hover:border-gray-300 ${
                          selectedTabs[section.title] === tab.name
                            ? "bg-white text-blue-600 font-semibold border-blue-500 -mb-px rounded-tl-lg rounded-tr-lg border-t border-l border-r"
                            : "bg-white text-gray-500 hover:border-gray-300"
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
                        <div
                          key={tab.name}
                          className="mb-4 p-4 border-l-0.2 border-r-0.2 border-b-0.2 border-[rgb(220,217,217)]"
                        >
                          <h3 className="mb-4 text-lg font-[300]">{tab.h3}</h3>

                          {/* Render SliderImages if sliderImages is present */}
                          {tab.sliderImages && tab.sliderImages.length > 0 && (
                            <div className=" relative  flex items-center justify-center w-full h-auto text-center">
                              <DiffImageSlider images={tab.sliderImages} />
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
                            <div className="mb-4 border-red-600">
                              <iframe
                                src={tab.pdf}
                                title={tab.name}
                                className="w-full h-[600px]"
                                frameBorder="0"
                                allowFullScreen
                              ></iframe>
                            </div>
                          )}

                          {/* Render additional paragraphs */}
                          {tab.additionalParagraph && (
                            <div className="mb-4 text-lg font-[300]">
                              {Array.isArray(tab.additionalParagraph) ? (
                                tab.additionalParagraph.map(
                                  (paragraph, index) => (
                                    <p key={index} className="mb-2">
                                      {paragraph}
                                    </p>
                                  )
                                )
                              ) : (
                                <p className="mb-4 text-lg font-[300]">
                                  {tab.additionalParagraph}
                                </p>
                              )}
                            </div>
                          )}

                          {/* Render teachers if available */}
                          {tab.teachers && (
                            <div>
                              <h3 className="text-[1.5rem] font-semibold mb-4 border-b-0.2 p-4  border-[rgb(141,141,141)]">
                                TEACHERS & STAFF
                              </h3>
                              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                                {tab.teachers.map((teacher, index) => (
                                  <div
                                    key={index}
                                    className="mb-2 flex items-center flex-col  rounded-lg"
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
                        </div>
                      )
                  )}
                </>
              ) : (
                /* Render additional paragraphs if no tabs are present */
                section.additionalParagraph && (
                  <div className="mb-4 text-lg font-[300]">
                    {Array.isArray(section.additionalParagraph) ? (
                      section.additionalParagraph.map((paragraph, index) => (
                        <p key={index} className="mb-4 text-lg font-[300]">
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
