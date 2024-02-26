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
import './Widget1.css';

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

const MyComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

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
      <TableContainer>
        <Table className="custom">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: '11px',
                  padding: '5px',
                  color: '#5E5ADB',
                  fontWeight: 'bolder',
                  borderBottom: '0',
                  paddingLeft: '20px',
                }}
                align="left"
              >
                PRODUCT
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '11px',
                  padding: '5px',
                  color: '#5E5ADB',
                  borderBottom: '0',
                  whiteSpace: 'nowrap',
                }}
              >
                Q1-23
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '11px',
                  width: '30%',
                  padding: '5px',
                  color: '#5E5ADB',
                  whiteSpace: 'nowrap',
                  borderBottom: '0',
                }}
              >
                Q2-23
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
                    fontSize: '11px',
                    whiteSpace: 'nowrap',
                    padding: '5px',
                    borderBottom: '0',
                    // width: '0%',
                    paddingLeft: '15px',
                  }}
                >
                  {product.name}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '11px',
                    whiteSpace: 'nowrap',
                    padding: '5px',
                    borderBottom: '0',
                  }}
                >
                  {product.q1}%
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontSize: '11px',
                    padding: '5px',
                    borderBottom: '0',
                  }}
                >
                  {product.q2}%
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  padding: '0',
                  paddingLeft: '15px',
                }}
              >
                Total
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  padding: '5px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                }}
              >
                8%
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontSize: '12px',
                  padding: '5px',
                  borderBottom: '0',
                  fontWeight: 'bold',
                }}
              >
                12%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MyComponent;
