import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import Widgets from '../Widgets/Widgets';
import './UpperNav.css';
import { Close } from '@mui/icons-material';
import {
  Box,
  Modal,
  IconButton,
  TextField,
  Button,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

const UpperNav = () => {
  const [activeItem, setActiveItem] = useState('overview');
  const [displayAddWidgetModal, setDisplayAddWidgetModal] = useState(false);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-1 col-sm-1"
          style={{ margin: '0', padding: '0' }}
        >
          <SideNav />
        </div>
        <div
          className="col-md-11 col-sm-11"
          style={{
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          <ul className="nav">
            <li className="nav-item">
              <i
                className="fas fa-home"
                style={{ fontSize: '20px' }}
                onClick={() => handleItemClick('home')}
              ></i>
            </li>
            <li
              className="nav-item item"
              style={{
                backgroundColor:
                  activeItem === 'overview' ? 'rgb(247, 246, 252)' : 'initial',

                border:
                  activeItem === 'overview'
                    ? '0.2px solid rgb(117, 115, 217)'
                    : '0.2px solid black',

                opacity: activeItem === 'overview' ? 1 : 0.5,
              }}
              onClick={() => handleItemClick('overview')}
            >
              <a className={activeItem === 'overview' ? 'current' : ''}>
                Overview{' '}
                <i
                  className="fas fa-times"
                  style={{
                    visibility: activeItem == 'overview' ? 'visible' : 'hidden',
                  }}
                ></i>
              </a>
            </li>
            <li
              className="nav-item item"
              style={{
                backgroundColor:
                  activeItem === 'customers' ? 'rgb(247, 246, 252)' : 'initial',

                border:
                  activeItem === 'customers'
                    ? '0.2px solid rgb(117, 115, 217)'
                    : '0.2px solid black',

                opacity: activeItem === 'customers' ? 1 : 0.5,
              }}
              onClick={() => handleItemClick('customers')}
            >
              <a className={activeItem === 'customers' ? 'current' : ''}>
                Customers{' '}
                <i
                  className="fas fa-times"
                  style={{
                    visibility:
                      activeItem == 'customers' ? 'visible' : 'hidden',
                  }}
                ></i>
              </a>
            </li>

            <li
              className="nav-item item"
              style={{
                backgroundColor:
                  activeItem === 'products' ? 'rgb(247, 246, 252)' : 'initial',

                border:
                  activeItem === 'products'
                    ? '0.2px solid rgb(117, 115, 217)'
                    : '0.2px solid black',

                opacity: activeItem === 'products' ? 1 : 0.5,
              }}
              onClick={() => handleItemClick('products')}
            >
              <a className={activeItem === 'products' ? 'current' : ''}>
                Products{' '}
                <i
                  className="fas fa-times"
                  style={{
                    visibility: activeItem == 'products' ? 'visible' : 'hidden',
                  }}
                ></i>
              </a>
            </li>
            <li
              className="nav-item"
              style={{
                backgroundColor: 'rgb(247, 246, 252)',
                border: '0.2px solid rgb(117, 115, 217)',
                borderRadius: '7px',
                width: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(67, 64, 222)',
                fontWeight: 'lighter',
              }}
            >
              <a>
                <i className="fas fa-plus"></i>
              </a>
            </li>

            <li
              className="nav-item item add-widget"
              style={{
                backgroundColor: 'rgb(247, 246, 252)',
                border: '0.2px solid rgb(117, 115, 217)',
                borderRadius: '7px',
                width: '8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(67, 64, 222)',
                marginLeft: 'auto',
              }}
              onClick={() => setDisplayAddWidgetModal(true)}
            >
              Add Widget
              <a>
                <i className="fas fa-plus" style={{ marginLeft: '5px' }}></i>
              </a>
            </li>
            <li
              className="nav-item item"
              style={{
                width: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <a>
                <i
                  className="fas fa-cog"
                  style={{ marginLeft: '5px', fontSize: '25px' }}
                ></i>
              </a>
            </li>
          </ul>

          <Box>
            <Modal
              open={displayAddWidgetModal}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  borderRadius: '8px',
                  overflowY: 'auto',
                  maxHeight: '90vh',
                  position: 'relative',
                  padding: '20px',
                  height: '80vh',
                  width: '80vw',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <IconButton
                  size="small"
                  color="inherit"
                  style={{ position: 'absolute', right: '5px', top: '3px' }}
                  onClick={() => setDisplayAddWidgetModal(false)}
                >
                  <Close fontSize="small" />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: '#5E5ADB', fontWeight: 'bolder' }}
                  >
                    Create Widget
                  </Typography>
                </Box>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="Data"
                      icon={<i className="fas fa-database"></i>}
                    />
                    <Tab
                      label="Graph"
                      icon={<i className="fas fa-chart-line"></i>}
                    />
                    <Tab
                      label="Summary"
                      icon={<i className="fas fa-scroll"></i>}
                    />
                  </Tabs>
                </Box>
                <Box
                  sx={{ flexGrow: 1, backgroundColor: 'rgb(243,243,249)' }}
                ></Box>

                <Box
                  sx={{ position: 'absolute', bottom: '20px', right: '20px' }}
                >
                  <Button
                    variant="contained"
                    sx={{ marginRight: '10px' }}
                    disabled={true}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginLeft: '0', backgroundColor: '#5E5ADB' }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>
          <div className="widget-container" style={{ flex: 1 }}>
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
