
import React from 'react';

const YearSelector = ({ setSelectedYear }) => {
  return (
    <div  style={{ marginBottom: '20px' }}>
      <button style={buttonStyle} onClick={() => setSelectedYear('2022-23')}>House Tally 2022-23</button>
      <button style={buttonStyle} onClick={() => setSelectedYear('2019-20')}>House Tally 2019-20</button>
      <button style={buttonStyle} onClick={() => setSelectedYear('2017-18')}>House Tally 2017-18</button>
    </div>
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  cursor: 'pointer'
};

export default YearSelector;
