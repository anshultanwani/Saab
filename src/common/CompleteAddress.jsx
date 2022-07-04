import React, { useState } from "react";
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index';
import BottomDrawer from './BottomDrawer';
import { TextField, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import './complete-address.scss';
import AddressUpdate from "./AddressUpdate";

const CompleteAddress = (props) => {
    const [showModal, toggleModal] = useState(false)
    const content = (
        <>
            <p>Save address as*</p>
            <div className="comlete-address-btn-sec">
                <Button variant="contained">Home</Button>
                <Button variant="contained">Work</Button>
                <Button variant="contained">Hotel</Button>
                <Button variant="contained">Others</Button>
            </div>
            <div className='field-holder'>
                <TextField
                    className="reg-half-field"
                    sx={{ width: 1 / 2.09 }}
                    placeholder="House/Flat/Block No."
                />
                <TextField
                    className="reg-half-field"
                    sx={{ width: 1 / 2.09 }}
                    placeholder="Apartment/Road/Area"
                />
            </div>
            <TextField
                className="nearlandmark"
                sx={{
                    width: 1
                }}
                placeholder="Nearby Landmark"
            />
        </>
    )

    const handleOpen = () => {
        toggleModal(true);
    }


    return (
        <>
        <BottomDrawer
            {...props}
            label={'Enter Complete Address'}
            onClose={() => props.toggleSliderDrawer({
                completeAddress: false
            })}
            children={content}
            btnArr={[{
                className: 'btn-submit',
                variant: "contained",
                onClick: handleOpen,
                children: "Save Address",
            }]}
        />
        <AddressUpdate open={showModal} onClose={()=>toggleModal(false)}/>
    </>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}


export default connect(mapStateToProps, { toggleSliderDrawer })(CompleteAddress);