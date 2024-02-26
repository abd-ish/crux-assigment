import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

// Define the type for your data
type ChartData = {
  name: string;
  Google: number;
  Instagram: number;
  Facebook: number;
  TikTok: number;
};

// Sample data
const data: ChartData[] = [
  { name: 'Jan', Google: 4000, Instagram: 2400, Facebook: 2400, TikTok: 1000 },
  { name: 'Feb', Google: 3000, Instagram: 1398, Facebook: 2210, TikTok: 2000 },
  { name: 'Mar', Google: 2000, Instagram: 9800, Facebook: 2290, TikTok: 3000 },
  { name: 'Apr', Google: 2780, Instagram: 3908, Facebook: 2000, TikTok: 4000 },
  { name: 'May', Google: 1890, Instagram: 4800, Facebook: 2181, TikTok: 5000 },
  { name: 'Jun', Google: 2390, Instagram: 3800, Facebook: 2500, TikTok: 6000 },
  { name: 'Jul', Google: 3490, Instagram: 4300, Facebook: 2100, TikTok: 7000 },
];

const Widget7: React.FC = () => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#282828',
      }}
    >
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Google"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Instagram" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Facebook" stroke="#ffc658" />
          <Line type="monotone" dataKey="TikTok" stroke="#ff8042" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Widget7;
