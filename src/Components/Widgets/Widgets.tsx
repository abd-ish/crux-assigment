import React, { useState } from 'react';
import { AppBar, Box, Card, CardContent, Typography } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './Widgets.css';
import Widget1 from './Widget1/Widget1';
import Widget2 from './Widget2/Widget2';
import Widget3 from './Widget3/Widget3';
import Widget4 from './Widget4/Widget4';
import Widget5 from './Widget5/Widget5';
import Widget6 from './Widget6/Widget6';
import Widget7 from './Widget7/Widget7';
import Widget8 from './Widget8/Widget8';
import Widget9 from './Widget9/Widget9';

const Widgets = () => {
  return (
    <div className="widget-container">
      <div className="container">
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              width: '60%',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              // padding: '5px',
            }}
          >
            <Card sx={{ width: '25%', borderRadius: '15px' }}>
              <Widget1 />
            </Card>
            <Card sx={{ width: '25%', borderRadius: '15px' }}>
              <Widget3 />
            </Card>
            <Card
              sx={{
                width: '25%',
                height: '200px',
                backgroundColor: '#282828',
              }}
            >
              <Widget4 />
            </Card>
            <Card
              sx={{
                width: '25%',
                borderRadius: '15px',
                maxHeight: '200px',
                overflow: 'scroll',
              }}
            >
              <Widget5 />
            </Card>
            <Card sx={{ width: '50%', borderRadius: '15px' }}>
              <Widget2 />
            </Card>
            <Card sx={{ width: '50%', borderRadius: '15px', height: '250px' }}>
              <Widget6 />
            </Card>
            <Card sx={{ width: '25%', borderRadius: '15px' }}>
              <Widget9 />
            </Card>
            <Card sx={{ width: '25%', borderRadius: '15px' }}>
              <Widget3 />
            </Card>
          </div>
          <div
            style={{
              display: 'flex',
              width: '40%',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              gap: '0',
            }}
          >
            <Card sx={{ width: '100%', borderRadius: '15px', height: '200px' }}>
              <Widget6 />
            </Card>
            <Card sx={{ width: '50%', borderRadius: '15px', height: '500px' }}>
              <Widget7 />
            </Card>
            <Card sx={{ width: '50%', borderRadius: '15px', height: '200' }}>
              <Widget8 />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
