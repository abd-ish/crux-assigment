import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Paper, Tabs, Tab } from '@mui/material';

export default function Widget8() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  interface ProductData {
    name: string;
    q1: number;
    q2: number;
  }

  const products: ProductData[] = [
    { name: 'Reusable Natural', q1: 10, q2: 4 },
    { name: 'Reusable', q1: 7, q2: 5 },
    { name: 'Compostite', q1: 2, q2: 11 },
    { name: 'Reusable', q1: 7, q2: 5 },
  ];
  return (
    <Paper>
      <Tabs
        value={selectedTab}
        onChange={handleChangeTab}
        textColor="secondary"
        centered={true}
        sx={{
          height: '20px',
          minHeight: '35px',
          '& .MuiTabs-indicator': {
            backgroundColor: '#5E5ADB',
          },
        }}
      >
        <Tab label="7d" sx={{ fontSize: '11px', width: '33%', padding: '0' }} />
        <Tab label="14d" sx={{ fontSize: '11px', padding: '0' }} />
        <Tab label="30d" sx={{ fontSize: '11px', padding: '0' }} />
      </Tabs>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'series A' },
              { id: 1, value: 15, label: 'series B' },
              { id: 2, value: 20, label: 'series C' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </Paper>
  );
}
