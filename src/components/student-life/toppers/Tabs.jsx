// src/components/Tabs/Tabs.js

import React from 'react';

const tabData = [
  {
    std: "X",
    name: "Class 'X'",
  },
  {
    std: "XII",
    name: "Class 'XII'",
  },
];

const Tabs = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (std) => {
    setActiveTab(std);
  };

  return (
    <section className='relative w-full'>
      <div className="flex w-10/12 mx-auto border-b border-gray-200">
      {tabData.map((tab) => (
        <button
          key={tab.name}
          className={`px-4 py-2 rounded-t-lg focus:outline-none ${
            activeTab === tab.name ? 'border border-b-0 border-gray-200 bg-white text-gray-900' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(tab.std)}
        >
          {tab.name}
        </button>
      ))}
    </div>
    </section>
  );
};

export default Tabs;
