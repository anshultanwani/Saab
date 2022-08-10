import { toBeRequired } from "@testing-library/jest-dom";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from '@mui/material';
import "./select-owner.scss";
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { setSession } from '../actions';
import { getCookie } from '../utils';
import { setCookie } from '../utils';
import { useEffect } from "react";
const SelectOwner = (props) => {
    const [users, setUsers] = useState([{}])
    const history = useHistory();
    let userId = getCookie('userId');
    console.log("userid==" + userId)
    const handleSubmit = () => {
        history.replace('/add-owner-list');
    }

    const handleAssignedDish = (customername) => {
        console.log(customername);
        // history.replace('/todays-dish/'+customername);
        history.replace('/todays-dish');
    }

    const fetchData = () =>{
        return axios.get(window.apiDomain + '/v1/users/' + userId).then(res => {
            if (res.status === 200) {
                setUsers(res.data.data.customers)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    


    return (
        <div className="select-owner">
            <div className='border-card'>
                <div className="owner-list">
                    {users.map(({ name, phone, customerStatus }) => (
                       
                        <div className={"owner-list-index" + "  " + (customerStatus === "UNVERIFIED" ? 'verification-pending' : "verification-complete")} onClick={() => handleAssignedDish({ name })}>

                            <p>
                                <div className="left">
                                    <img src={require("../assets/images/" + "owner1.png").default} />
                                </div>
                                <div className="right">
                                    <div className="top">
                                    <span>{name}</span>

                                    <span>{customerStatus}</span>
                                    </div>
                                  
                                    <div className="bottum">
                                        <span>
                                            <img src={require("../assets/images/" + "location.png").default} />
                                        </span>
                                        <span>
                                            401 c block Lorem Ipsum Dummy , Bangalore
                                        </span>
                                    </div>
                                </div>

                            </p>
                        </div>
                    ))}


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
export default connect(mapStateToProps)(SelectOwner);
