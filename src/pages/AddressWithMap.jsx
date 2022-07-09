import React, { useState } from 'react';
import { Button } from '@mui/material';
import MapContainer from '../components/MapContainer';
import './address-map.scss';
import { toggleSliderDrawer } from '../actions/index'
import { connect } from 'react-redux';

const AddressWithMap = props => {
    const [addressStr,setAddress] = useState('');
    const FixedBtn = () => {
        return (
            <div className='address-details'>
                <div className='address'>
                    <div className='left'>
                        <p><span><img src={require("../assets/images/"+"address-icon.png").default}/></span>Delivering to Home</p>
                        <p>{addressStr}</p>
                    </div>
                    <div className='right'>
                        CHANGE
                    </div>
                </div>
                <Button
                    variant='contained'
                    children='ENTER COMPLETE ADDRESS'
                    className='btn'
                    onClick={() => {
                        props.toggleSliderDrawer({
                            completeAddress: true
                        })
                    }}
                />
            </div>
        )
    }
    return (
        <div className='address-map'>
            <div className='border-card'>
                <MapContainer setAddress={str => setAddress(str)} />
            </div>
            <FixedBtn />
        </div>
    )
};

export default connect(null,{toggleSliderDrawer})(AddressWithMap);