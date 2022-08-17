import { toBeRequired } from "@testing-library/jest-dom";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Button } from '@mui/material';
import "./select-owner.scss";
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { getCookie } from '../utils';
import { useEffect } from "react";
import { setCookie } from '../utils';
import { setSession } from '../actions';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const SelectOwner = (props) => {
    const {
        name
    } = props
    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
   
    const [users, setUsers] = useState([{}])
    const textCustomerId = useRef(11);
    const textCustomerName = useRef(null);
    const history = useHistory();
    
    let userId = getCookie('userId');
    console.log("userid==" + userId)


    const handleSubmit = () => {
        history.replace('/add-owner-list');
    }

    const handleAssignedDish = (e) => {
        var customerName = textCustomerName.current.value
        var customerId = textCustomerId.current.value
        console.log(customerId + "====" + customerName);
        setCookie('customerName', customerName, 30);
        setCookie('customerId', customerId, 30);
        console.log("todaydishusetype"+userType)
        history.replace('/todays-dish?userType='+userType);
        setCookie('userType', userType, 30);
    }


    useEffect(() => {
        axios.get(window.apiDomain + '/v1/users/' + userId).then(res => {
            if (res.status === 200) {
                if (res.data.data.customers.length >= 1) {
                    console.log("customers are avaialbel" + JSON.stringify(res.data.data));
                    console.log(res.data.data.customers.length)
                    setUsers(res.data.data.customers)
                    props.setSession({
                        ...props.session,
                        ...res.data.data
                    })
                    setCookie('isLoggedIn', true, 30);
                    setCookie('userId', res.data.data._id, 30);
                }
                else {
                    console.log("customers are not avaiable")
                    return null;
                }
            }
        }).catch(err => {
            console.log(err)
            console.log("Please add customer");
        })
    }, [])




    return (
        <div className="select-owner">
            <div className='border-card'>
                <div className="owner-list">
                    {
                        users.length >= 1 ?
                            users.map(({ name, customerStatus, _id }) => (

                                <div className={"owner-list-index" + "  " + (customerStatus === "UNVERIFIED" ? 'verification-pending' : "verification-complete")} onClick={() => handleAssignedDish()}>
                                    <input type="hidden" ref={textCustomerId} value="62f014d01e3721668b123996" name="customerid" />
                                    <input type="hidden" ref={textCustomerName} value={name} name="customername" />

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
                            ))
                            :
                            <div className="addnewcustomersec">
                                <p>Please click below to add new customer to your account</p>
                            </div>
                    }


                </div>
                <div className="add-cusotmer"  id={users.length > 1 ? "cusotmerexit" : "add-new-cusotmer"}>
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
export default connect(mapStateToProps, { setSession })(SelectOwner);
