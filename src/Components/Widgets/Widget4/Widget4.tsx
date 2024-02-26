import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Card from '@mui/material/Card';

// Define the type for your data
type ChartData = {
  name: string;
  uv: number;
  fill: string;
};

// Sample data
const data: ChartData[] = [
  { name: '', uv: 4000, fill: 'red' },
  { name: '', uv: 3000, fill: 'yellow' },
  { name: '', uv: 2000, fill: 'green' },
  { name: '', uv: 1890, fill: 'orange' },
  { name: '', uv: 2390, fill: 'purple' },
  { name: '', uv: 3490, fill: 'pink' },
];

const Widget4: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis tick={{ fontSize: '10px' }} />
        <Tooltip />
        <Bar dataKey="uv" fill={data[3].fill} barSize={5} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Widget4;
