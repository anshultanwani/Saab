import React from "react";
import { Rating, TextareaAutosize } from '@mui/material';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';
import './selectaddress.scss' ;
import { useHistory, useLocation } from 'react-router-dom';

const SelectAddress = (props) => {
    const history = useHistory();

    // const changeAddress = () =>{
    //     toggleSliderDrawer({
    //     selectaddress: false
    //       //  completeAddress: true
    //     })
    //     // history.push('/add-address')
    // }
    const content = (

        <div className="addresslist">
            <div className='address-btn-holder'>
                <Button
                    variant='text'
                    className='enable-btn'
                    onClick={() => props.toggleSliderDrawer({
                        selectaddress: false ,
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
                <p>Saved Address</p>
                <ul>
                    <li>
                    <div className="deliverhead">Delivers To</div>
                    <div className="deliveraddress">
                        <div className="left-sec">
                        <img src={require('../assets/images/home.png').default} alt="not loaded" />
                            <p>1.5km</p>
                        </div>
                        <div className="right-sec">
                            <p>Home</p>
                            <p>390 b block Lorem Ipsum WIpro, 3rd Floor,
                            Lorem Ipsum, Road, Carmelaram, Hadosiddapura, Chik...</p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="deliverhead">Delivers To</div>
                    <div className="deliveraddress">
                        <div className="left-sec">
                        <img src={require('../assets/images/home.png').default} alt="not loaded" />
                        <p>4.5km</p>
                        </div>
                        <div className="right-sec">
                            <p>Hotel</p>
                            <p>401 c block Lorem Ipsum Dummy, 4th Floor, 
                                Lorem Ipsum, Road, Bangalore</p>
                        </div>
                    </div>
                    </li>
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
        session: state.session
    }
}


export default connect(mapStateToProps, { toggleSliderDrawer })(SelectAddress);