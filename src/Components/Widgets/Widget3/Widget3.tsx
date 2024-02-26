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
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import './Widget3.css';

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
  const [today, setToday] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setToday(event.target.value);
  };

  return (
    <Paper sx={{ backgroundColor: '#5E5ADB' }}>
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
          sx={{ fontSize: '11px', width: '33%', padding: '0', color: 'white' }}
        />
      </Tabs>
      <TableContainer>
        <Table className="custom">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: '11px',
                  padding: '5px',
                  color: 'white',
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
                  color: 'white',
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
                  color: 'white',
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
                    paddingLeft: '15px',
                    color: 'white',
                    opacity: '0.65',
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
                    color: 'white',
                    opacity: '0.65',
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
                    color: 'white',
                    opacity: '0.65',
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
                  color: 'white',
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
                  color: 'white',
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
                  color: 'white',
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
