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
} from '@mui/material';
import './Widget2.css';

interface ProductData {
  name: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
}

const products: ProductData[] = [
  { name: 'Reusable', q1: 10, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Natural Resource', q1: 2, q2: 11, q3: 11, q4: 11, q5: 11 },
  { name: 'Compostite Compound', q1: 7, q2: 5, q3: 5, q4: 5, q5: 5 },
  { name: 'Reusable Materials', q1: 3, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Reusable', q1: 10, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Natural Resource', q1: 2, q2: 11, q3: 11, q4: 11, q5: 11 },
  { name: 'Compostite Compound', q1: 7, q2: 5, q3: 5, q4: 5, q5: 5 },
  { name: 'Reusable Materials', q1: 3, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Reusable', q1: 10, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Compostite Compound', q1: 7, q2: 5, q3: 5, q4: 5, q5: 5 },
  { name: 'Reusable Materials', q1: 3, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Reusable', q1: 10, q2: 4, q3: 4, q4: 4, q5: 4 },
  { name: 'Natural Resource', q1: 2, q2: 11, q3: 11, q4: 11, q5: 11 },
  { name: 'Compostite Compound', q1: 7, q2: 5, q3: 5, q4: 5, q5: 5 },
];

const MyComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Paper sx={{ backgroundColor: '#282828' }}>
      <Tabs
        value={selectedTab}
        onChange={handleChangeTab}
        indicatorColor="primary"
        centered={false}
      >
        <Tab label="7d" sx={{ color: 'white' }} />
        <Tab label="14d" sx={{ color: 'white' }} />
        <Tab label="30d" sx={{ color: 'white' }} />
      </Tabs>
      <TableContainer>
        <Table className="custom">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: '14px',
                  padding: '8px',
                  color: 'white',
                  fontWeight: 'bolder',
                  borderBottom: '0',
                  width: '40%',
                  paddingLeft: '32px',
                }}
                align="left"
              >
                PRODUCT
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  width: '12%',
                  padding: '8px',
                  borderBottom: '0',
                  color: 'white',
                }}
              >
                Q1-23
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  width: '12%',
                  padding: '8px',
                  borderBottom: '0',
                  color: 'white',
                }}
              >
                Q2-23
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  width: '12%',
                  padding: '8px',
                  borderBottom: '0',
                  color: 'white',
                }}
              >
                Q4-23
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  width: '12%',
                  padding: '8px',
                  borderBottom: '0',
                  color: 'white',
                }}
              >
                Q4-23
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  width: '12%',
                  padding: '8px',
                  borderBottom: '0',
                  color: 'white',
                }}
              >
                Q1-24
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  style={{
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    padding: '8px',
                    borderBottom: '0',
                    width: '0%',
                    color: 'white',
                    paddingLeft: '32px',
                  }}
                >
                  {product.name}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    padding: '8px',
                    borderBottom: '0',
                    color: 'white',
                  }}
                >
                  {product.q1}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '12px',
                    padding: '8px',
                    borderBottom: '0',
                    color: 'white',
                  }}
                >
                  {product.q2}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '12px',
                    padding: '8px',
                    borderBottom: '0',
                    color: 'white',
                  }}
                >
                  {product.q3}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '12px',
                    padding: '8px',
                    color: 'white',
                    borderBottom: '0',
                  }}
                >
                  {product.q4}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '12px',
                    padding: '8px',
                    borderBottom: '0',
                    color: 'white',
                  }}
                >
                  {product.q5}%
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  paddingLeft: '32px',
                  color: 'white',
                }}
              >
                Total
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '15px',
                  padding: '8px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                8%
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '15px',
                  padding: '8px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                12%
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '15px',
                  padding: '8px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                7%
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '15px',
                  padding: '8px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                20%
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '15px',
                  padding: '8px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                3%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MyComponent;
