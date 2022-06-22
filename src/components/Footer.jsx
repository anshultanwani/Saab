import React, { useEffect, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { withRouter } from 'react-router-dom';
import './footer.scss';

const Footer = props => {
  const [showFooter, toggleFooter] = useState(window.location.pathname == '/login');
  const [selectedTab,updateTab] = useState(0)

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
          <div className={'selection-line'} style={{
            left: Number(selectedTab * 25)+'%'
          }}/>
          <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation
                showLabels
                value={selectedTab}
                onChange={(event, newValue) => {
                  updateTab(newValue);
                }}
              >
                <BottomNavigationAction label="Home" />
                <BottomNavigationAction label="Assign Dish" />
                <BottomNavigationAction label="Stock" />
                <BottomNavigationAction label="Payment" />
              </BottomNavigation>
          </Paper>
        </div>
        :null
    )
};

export default withRouter(Footer);