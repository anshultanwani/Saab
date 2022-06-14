import React, { useEffect, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { withRouter } from 'react-router-dom';
import './footer.scss';

const Footer = props => {
  const [showFooter, toggleFooter] = useState(window.location.pathname == '/login');

    useEffect(() => {
        if (props.ignoreFooter.includes(window.location.pathname)) {
            toggleFooter(false);
        } else {
          toggleFooter(true);
        }
    }, [window.location.pathname])
    
    return (
      showFooter?
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
        :null
    )
};

export default withRouter(Footer);