import React, { useEffect, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { withRouter } from 'react-router-dom';
import './footer.scss';
import { getCookie } from '../utils';

const Footer = props => {

  let userType = getCookie('userType');
  console.log("usertype footer" + userType)
  const [showFooter, toggleFooter] = useState(window.location.pathname === '/login');
  const [selectedTab, updateTab] = useState(0)

  useEffect(() => {
    if (props.ignoreFooter.includes(window.location.pathname)) {
      toggleFooter(false);
    } else {
      toggleFooter(true);
    }
  }, [window.location.pathname])

  return (
    showFooter ?
      <div className='footer-ui '>
        {userType == "COOK" ?
          <>
            <div className={'selection-line'} style={{
              left: Number(selectedTab * 25) + '%'
            }} />
            <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation
                showLabels
                value={selectedTab}
                onChange={(event, newValue) => {
                  updateTab(newValue);
                }}
              >
                <BottomNavigationAction label="Customers" onClick={() => props.history.push('/select-owner?userType=' + "COOK")} />
                  {/* <BottomNavigationAction label="My Ratings" onClick={() => props.history.push('/history')} /> */}
                <BottomNavigationAction label="My Reward" onClick={() => props.history.push('/my-reward?userType=' + "COOK")} />
                {/* <BottomNavigationAction label="Payment" onClick={() => props.history.push('/payment')} /> */}
              </BottomNavigation>
            </Paper>
          </>
          :
          <>
            <div className={'selection-line'} style={{
              left: Number(selectedTab * 25) + '%'
            }} />
            <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation
                showLabels
                value={selectedTab}
                onChange={(event, newValue) => {
                  updateTab(newValue);
                }}
              >
                <BottomNavigationAction label="Home" onClick={() => props.history.push('/home')} />
                <BottomNavigationAction label="Meal Planing" onClick={() => props.history.push('/history')} />
                <BottomNavigationAction label="Stock" onClick={() => props.history.push('/stock-refill?userType=' + "OWNER")} />
                <BottomNavigationAction label="Payment" onClick={() => props.history.push('/payment')} />

              </BottomNavigation>
            </Paper>
          </>

        }
      </div>
      : null
  )
};

export default withRouter(Footer);