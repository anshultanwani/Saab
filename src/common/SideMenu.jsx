import React from 'react';
import { Avatar, Button, Drawer } from '@mui/material';
import { connect } from 'react-redux';
import { toggleSliderDrawer, setSession } from '../actions';
import {ReactComponent as HomeIcon} from '../assets/images/HomeIcon.svg';
import {ReactComponent as HistoryIcon} from '../assets/images/history.svg';
import {ReactComponent as PaymentIcon} from '../assets/images/payment.svg';
import {ReactComponent as AboutIcon} from '../assets/images/aboutUs.svg';
import {ReactComponent as PreferIcon} from '../assets/images/preference.svg';
import {ReactComponent as SettingIcon} from '../assets/images/setting.svg';
import './side-menu.scss';
import { setCookie } from '../utils';
import { useHistory } from 'react-router-dom';

const SideMenu = props => {
    const history = useHistory();
    const {
        open,
        toggleSliderDrawer,
        session
    } = props;

    const profiles = [
        {
            name: session.name,
            role: '',
            profilePic: require(`../assets/images/login-photo.png`)
        },
        {
            name: 'Smith Joe',
            role: 'Member',
            profilePic: ''

        },
        {
            name: 'Carol Duseja',
            role: 'Member',
            profilePic: ''   
        }
    ];

    const menu = [
        {
            icon: HomeIcon,
            label: 'Home',
            path: '/home'
        },
        {
            icon: PreferIcon,
            label: 'My Preferences',
            path: '/home'
        },
        {
            icon: HistoryIcon,
            label: 'History',
            path: '/home'
        },
        {
            icon: PaymentIcon,
            label: 'Payment',
            path: '/home'
        },
        {
            icon: AboutIcon,
            label: 'About Us',
            path: '/home'
        },
        {
            icon: SettingIcon,
            label: 'Settings',
            path: '/home'
        }
    ]

    const getProfiles = () => {
        let profileArr = profiles.map((cur,index) => {
            const nameArr = cur.name.split(' ');
            const nameInitial = nameArr.length > 1 ? nameArr[0][0].toUpperCase()+nameArr[1][0].toUpperCase(): nameArr[0][0].toUpperCase();
            return (
                <div className={'single-profile '+(cur.role?'':'admin')} key={index} >
                    <Avatar className="avtar" src={cur.profilePic.default} >{!cur.profilePic?nameInitial:null}</Avatar>
                    <div className='name'>{cur.name.split(' ')[0]}</div>
                    <div className='role'>{cur.role?cur.role: 'Admin'}</div>
                </div>
            )
        })
        if(profiles.length < 4){
            profileArr.push((
                <div className='single-profile' onClick={() => toggleSliderDrawer({
                    sideMenu: false,
                    addMemberDrawer: true
                })}>
                    <Avatar className='add'>+</Avatar>
                    <div className='name'>Add</div>
                    <div className='role' />
                </div>
            ))
        }
        return profileArr;
    }

    const closeSlider = () => {
        toggleSliderDrawer({sideMenu: false})
    }

    const logout = () => {
        props.setSession({});
        setCookie("isLoggedIn",'',0);
        setCookie("userId",'',0)
        closeSlider();
        history.replace('/login');
    }

    const redirectToPath = path => {
        closeSlider();
        if(window.location.pathname !== path) {
            history.push(path);
        }
    }

    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={() => toggleSliderDrawer({sideMenu: false})}
        >
            <div className='side-menu-container'>
                <div className='profile-holder'>
                    {open ? getProfiles() :null}
                </div>
                <div className='border-card'>
                    {menu.map((cur,index) => {
                        return (
                            <div className='menu-item' onClick={() => redirectToPath(cur.path)} key={index} >
                                <div className='icon'>{<cur.icon />}</div>
                                <div className='label'>{cur.label}</div>
                            </div>
                        )
                    })}
                    <Button
                        onClick={logout}
                        className='fixed-btn'
                        variant='contained'
                        children={'LOG OUT'}
                    />
                </div>
            </div>
      </Drawer>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps,{toggleSliderDrawer,setSession})(SideMenu);