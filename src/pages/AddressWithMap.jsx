import { Button } from '@mui/material';
import React from 'react';
import MapContainer from '../components/MapContainer';
import './address-map.scss';

const AddressWithMap = props => {
    const FixedBtn = () => {
        return (
            <div className='address-details'>
                <div className='address'>
                    <div className='left'>
                        <p><span><img src={require("../assets/images/"+"address-icon.png").default}/></span>Delivering to Home</p>
                        <p>Cook’s next visit </p>
                    </div>
                    <div className='right'>
                        CHANGE
                    </div>
                </div>
                <Button
                    variant='contained'
                    children='ENTER COMPLETE ADDRESS'
                    className='btn'
                />
            </div>
        )
    }
    return (
        <div className='address-map'>
            <div className='border-card'>
                <MapContainer />
            </div>
            <FixedBtn />
        </div>
    )
};

export default AddressWithMap;