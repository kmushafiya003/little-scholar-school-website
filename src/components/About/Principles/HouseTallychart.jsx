import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, color, tally, year } = payload[0].payload;
    return (
      <div className="bg-black bg-opacity-75 p-2 rounded text-white text-sm">
        <p>{name}</p>
        <div className="flex items-center">
          <div style={{ backgroundColor: color }} className="w-2 h-2 mr-2"></div>
          <p className="mr-2">{year}</p>
          <p>{`House Tally ${tally}`}</p>
        </div>
      </div>
    );
  }
  return null;
};

// Custom X-axis tick component
const CustomXAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <line x1="0" y1="0" x2="0" y2="-400" stroke="#ccc" />
    <text
      x="0"
      y="0"
      dy={20}
      textAnchor="middle"
      fill="#666"
      style={{
        
        fontSize: '0.95rem', // Default font size
        fontWeight: 'bold',  // Make the text bold
      }}
      className="sm:text-xs md:text-sm lg:text-base"
    >
      {payload.value}
    </text>
  </g>
);

const HouseTallyChart = ({ data }) => (
  <div className="w-full max-w-6xl mx-auto p-4">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 10, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="none" vertical={false} horizontal={true} />
        <XAxis dataKey="name" tickLine={false} tick={<CustomXAxisTick />} />
        <YAxis ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="tally"
          fill="#8884d8"
          animationBegin={10}
          animationDuration={1500}
          animationEasing="ease-in-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} className="opacity-50" fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default HouseTallyChart;
