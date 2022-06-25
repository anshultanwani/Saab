import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../utils';
import { setSession } from '../actions';
import './splash-screen.scss';
import axios from 'axios';

const SplashScreen = props => {
    useEffect(() => {
        setTimeout(() => {
            if(!getCookie('isLoggedIn')) {
                window.location.replace('/login')
              }else if(!props.session._id){
                  let userId = getCookie('userId');
                  axios.get(window.apiDomain+'/v1/users/'+userId).then(res => {
                      window.location.replace('/home')
                      props.setSession({
                          ...res.data.data
                      })
                  })
              }
        }, 6000);
    },[])
    return (
        <div className={'splash-screen'}>
            <div className={'welcome'}></div>
            <div className='welcome splash'></div>
            <div className='text-holder'>
                <div className='text'>
                    SAAB
                </div>
                <div className='loading'>You 're about to Enter New Era</div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps,{setSession})(SplashScreen);