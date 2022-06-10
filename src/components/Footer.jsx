import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import './footer.scss';

const Footer = props => {
    return (
        <div className='footer-ui '>
          <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation
                showLabels
                value={0}
                onChange={(event, newValue) => {
                  // setValue(newValue);
                }}
              >
                <BottomNavigationAction label="Home" />
                <BottomNavigationAction label="My Ratings" />
                <BottomNavigationAction label="My Dishes" />
                <BottomNavigationAction label="Payment" />
              </BottomNavigation>
          </Paper>
        </div>
    )
};

export default Footer;