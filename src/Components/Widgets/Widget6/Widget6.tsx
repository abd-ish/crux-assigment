import React from 'react';
import {
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  Box,
} from '@mui/material';

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
  { name: 'Reusable Natural', q1: 10, q2: 4 },
  { name: 'Reusable', q1: 7, q2: 5 },
];

const MyComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper>
      <Tabs
        textColor="secondary"
        centered={false}
        sx={{
          height: '20px',
          minHeight: '35px',
        }}
      >
        <Tab
          label={
            <div>
              Today <i className="fas fa-chevron-down"></i>
            </div>
          }
          sx={{
            fontSize: '11px',
            width: '33%',
            padding: '0',
            color: '#5E5ADB',
          }}
        />
      </Tabs>
      <Box
        sx={{
          textAlign: 'left',
          fontSize: '14px',
          padding: '20px',
        }}
      >
        Based on the provided data, the most effective hour of the day to send
        an email across all stores for all time, with the highest engagement
        after opening, is at 15:00(3 PM), with a total of 5041 emails opened.
        The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with{' '}
        <span style={{ fontWeight: 'bolder' }}>5007</span> and{' '}
        <span style={{ fontWeight: 'bolder' }}>4785</span> emails opened
        respectively. There is a noticeable drop in the most effective hour of
        the day to send
      </Box>
    </Paper>
  );
};

export default MyComponent;
