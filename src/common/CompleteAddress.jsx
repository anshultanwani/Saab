import React, { useState } from "react";
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index';
import BottomDrawer from './BottomDrawer';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import './complete-address.scss';
import AddressUpdate from "./AddressUpdate";
import axios from "axios";
import { getCookie, setCookie } from '../utils';
import { setSession } from '../actions';

const CompleteAddress = (props) => {
    //let userId = getCookie('userId');
    var userId = sessionStorage.getItem("userId");
    console.log("userId for complete address" + userId)
    const [locationtype , updateLocationType] = useState("")
    const [showvalue, updateShowValue] = useState({
        address: {
            houseNo: '',
            floor: "",
            society: "",
            locality: "",
            pin: 560008
        }
    });
    const [showModal, toggleModal] = useState(false)

    const handleLocationType = (locationValue) => {
        console.log("location type lcicked" + locationValue)
        updateLocationType(locationValue)
       
    }

    const findAndUpdate = (dataObj, value, parentKey, key) => {
        for (var cur in dataObj) {
            if (typeof dataObj[cur] === 'object' && !Array.isArray(dataObj[cur]) && cur === parentKey.split('.')[0]) {
                findAndUpdate(dataObj[cur], value, parentKey.split('.').length > 1 ? parentKey.split('.')[1] : '', key);
                console.log("inside if" + dataObj[cur])
            } else if (cur === key && !parentKey) {
                dataObj[cur] = value;
                console.log("inside elese" + JSON.stringify(dataObj[cur]))
            }
        }
    }
    const handleChange = (node, value, subNode) => {
        console.log("button click")
        console.log(value);
        let newData;
        newData = { ...showvalue };
        findAndUpdate(newData, value, node, subNode);
        updateShowValue(newData)
        console.log(showvalue)
    }

    const content = (
        <>
            <p className="completeaddlable">Save address as*</p>
            <div className="comlete-address-btn-sec">
                <Button variant="contained" value="Home" onClick={(e) => handleLocationType(e.target.value)}>Home</Button>
                <Button variant="contained" value="Works" onClick={(e) => handleLocationType(e.target.value)}>Work</Button>
                <Button variant="contained" value="Hotels" onClick={(e) => handleLocationType(e.target.value)}>Hotel</Button>
                <Button variant="contained" value="Others" onClick={(e) => handleLocationType(e.target.value)}>Others</Button>
            </div>
            <div className='field-holder comaddsec'>
                <TextField
                    className="reg-half-field"
                    sx={{ width: 1 / 2.09 }}
                    placeholder="House/Flat/Block No."
                    inputProps={{
                        value: showvalue.address.houseNo || '',
                        onChange: e => handleChange('address', e.target.value, 'houseNo')
                    }}
                />
                <TextField
                    className="reg-half-field"
                    sx={{ width: 1 / 2.09 }}
                    placeholder="Apartment/Road/Society"
                    inputProps={{
                        value: showvalue.address.society || '',
                        onChange: e => handleChange('address', e.target.value, 'society')
                    }}
                />
            </div>
            <TextField
                className="nearlandmark"
                sx={{
                    width: 1
                }}
                placeholder="Nearby Landmark"
                inputProps={{
                    value: showvalue.address.locality || '',
                    onChange: e => handleChange('address', e.target.value, 'locality')
                }}
            />

        </>
    )

    const handleOpen = () => {
        toggleModal(true);
        console.log("updated" +
            JSON.stringify({
                userId: userId,
                locationType: locationtype,
                ...showvalue
            })
        )
        console.log(window.apiDomain + '/v1/users/add/address')
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/users/add/address',
            data: {
                userId: userId,
                locationType: locationtype,
                ...showvalue
            }
        }).then(res => {
            if (res.status === 200) {
                console.log("owner response data" + JSON.stringify(res.data.data))
            }
        }).catch(err => {
            console.log(err)
        })
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
            <AddressUpdate open={showModal} onClose={() => toggleModal(false)} />
        </>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}


export default connect(mapStateToProps, { toggleSliderDrawer })(withRouter(CompleteAddress));