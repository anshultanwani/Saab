import { toBeRequired } from "@testing-library/jest-dom";
import React from "react";
import { connect } from "react-redux";
import { Button } from '@mui/material';
import { getCookie } from '../utils';
import { setCookie } from '../utils';
import axios from 'axios';
import "./select-owner.scss";
import { setSession } from '../actions';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from "react";
const AddOwner = (props) => {
    // const [data, updateData] = useEffect('')
    const history = useHistory();
    let userId = getCookie('userId');
    console.log("userid=="+userId)
    const handleSubmit = () => {
        history.replace('/add-owner-list');
    }

    const handleAssignedDish = (customername) => {
        console.log(customername);
        // history.replace('/todays-dish/'+customername);
        history.replace('/todays-dish');
    }

    // const fetchData = () =>{
    //     return axios.get(window.apiDomain + '/v1/users/' + userId).then(res => {
    //         if (res.status === 200) {
    //             console.log("customers list" + JSON.stringify(res.data.data))
    //             console.log("customers list" + JSON.stringify(res.data.data.customers))
    //             // updateData(res.data.data);
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     }) 
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    axios.get(window.apiDomain + '/v1/users/' + userId).then(res => {
        if (res.status === 200) {
            console.log("customers list" + JSON.stringify(res.data.data))
            console.log("customers list" + JSON.stringify(res.data.data.customers))
            // updateData(res.data.data);
        }
    }).catch(err => {
        console.log(err)
    })
       

    return (
        <div className="select-owner">
            <div className='border-card'>
                <div className="owner-list">
                    {
                        props.ownerlistset.map((item, index) => {
                            return (

                                <div key={index} className="owner-list-index" onClick={()=> handleAssignedDish(item.name)}>

                                    <div className="left">
                                        <img src={require("../assets/" + item.image).default} />
                                    </div>
                                    <div className="right">
                                        <p>{item.name}</p>
                                        <p>
                                            <span>
                                                <img src={require("../assets/images/" + "location.png").default} />
                                                {/* <img src={require('../assets/'+item.vegImage).default} alt="not loaded" /> */}

                                            </span>
                                            <span>
                                                {item.address}
                                            </span>
                                        </p>
                                    </div>

                                </div>
                            )
                        })}
                </div>
                <div className="add-cusotmer">
                    <Button
                        variant='contained'
                        className='emptycart-btn'
                        onClick={handleSubmit}
                        children={(
                            <div className='btn-content'>
                                Add Customer
                            </div>
                        )}
                    />
                 
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ownerlistset: state.foodData.ownerlist,
        session: state.session
    }
}
export default connect(mapStateToProps)(AddOwner);
