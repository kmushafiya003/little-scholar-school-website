// src/components/TopperSection.js

import React, { useState } from 'react';
import Tabs from './Tabs';
import TopperAlbumTamplate from './TopperAlbumTamplate';
import { session_23_24 } from '../../../data/StudentLife/topper-data'; // Adjust the path to your data file

const TopperSection = ({topperYear}) => {
  
  const [activeTab, setActiveTab] = useState('X')

  return (
    <div className="w-full">
    
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopperAlbumTamplate activeTab={activeTab} session ={session_23_24}  />
    
    </div>
  );
};

export default TopperSection;
