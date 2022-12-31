import React from "react";
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import './selectaddress.scss';
const SelectAddress = (props) => {
    const {
        userAddress
    } = props
    var userId = sessionStorage.getItem("userId");
    console.log("userId in stockrefill" + userId)

    const content = (

        <div className="addresslist">
            <div className='address-btn-holder'>
                <Button
                    variant='text'
                    className='enable-btn'
                    onClick={() => props.toggleSliderDrawer({
                        selectaddress: false,
                        completeAddress: true
                    })}
                    // onClick={changeAddress}
                    children={(
                        <div className='btn-content'>
                            + ADD ADDRSS
                        </div>
                    )}
                />
            </div>
            <div className="addresslist-inner">
                <p class="save-add">Saved Address</p>
                <ul>
                    {
                        Object.keys(userAddress).map((item) => {
                            return (
                                <>
                                    <li>
                                        <div className="del">Delivers To</div>
                                        <div className="default-address">
                                        </div>
                                        <div className="add-detail">
                                            <div className="left-icon">
                                                home icon
                                            </div>
                                            <div className="mid-sec">
                                                <p className="loc-tag"> {userAddress[item].locationType} </p>
                                                <p>
                                                    {userAddress[item].houseNo} ,
                                                    {userAddress[item].floor}  ,
                                                    {userAddress[item].society}
                                                </p>
                                                <p>
                                                    {userAddress[item].locality}
                                                    {userAddress[item].pin}
                                                </p>
                                            </div>
                                        </div>
                                    </li>

                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )


    return (
        <BottomDrawer
            {...props}
            label={'Select An Address'}
            onClose={() => props.toggleSliderDrawer({
                selectaddress: false
            })}
            children={content}
        />
    )

}


const mapStateToProps = state => {
    return {
        session: state.session,
        userAddress: state.cart.userAddress
    }
}


export default connect(mapStateToProps, { toggleSliderDrawer })(SelectAddress);