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
    
      <div className="flex w-full  border-b border-gray-200 mt-4">
      {tabData.map((tab , index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-t-lg focus:outline-none  cursor-pointer font-light ${
            activeTab === tab.std ? 'border border-b-0 border-gray-200 bg-white text-gray-900' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(tab.std)}
        >
          {tab.name}
        </button>
      ))}
    </div>
    
  );
};

export default Tabs;
