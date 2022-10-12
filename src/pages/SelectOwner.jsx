
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
import VerifyUser from  '../common/VerifyUser';
toast.configure()

const SelectOwner = (props) => {

    const {
        name
    } = props
    const searchParams = useLocation().search;
    const userType = queryString.parse(searchParams).userType;
    const [showModal, toggleModal] = useState(false)
    const [users, setUsers] = useState([])
    const textCustomerId = useRef({});
    const textCustomerName = useRef({});
    const textCustomerStatus = useRef({});
    const textCustomerPhone = useRef({});
    const history = useHistory();
    var userId = sessionStorage.getItem("userId");
   // let userId = getCookie('userId');
    console.log("userid==" + userId)


    const handleSubmit = () => {
        history.push('/add-owner-list');
    }
    
    const handleAssignedDish = (list) => {
        // var customerName = textCustomerName.current[id].value
        // var customerId = textCustomerId.current[id].value
        // var customerStatus = textCustomerStatus.current[id].value
        // var customerPhone = textCustomerPhone.current[id].value
        
       // console.log(customerId + "====" + customerName + "======" + customerStatus);
        // setCookie('customerName', list.name, 30);
        // setCookie('customerId', list._id, 30);
        // setCookie('customerStatus', list.customerStatus, 30);
        // setCookie('customerPhone', list.phone, 30);
        sessionStorage.setItem('customerName' , list.name)
        sessionStorage.setItem('customerId', list._id)
        sessionStorage.setItem('customerStatus', list.customerStatus)
        sessionStorage.setItem('customerPhone', list.phone)
        //console.log("todaydishusetype"+userType)
       
      //  setCookie('userType', userType, 30);
        if(list.customerStatus == 'UNVERIFIED'){
                console.log("user is unverified") 
                toggleModal(true) 
        }
        else{
            history.push('/todays-dish?userType='+userType);
        }
    }


    useEffect(() => {
        axios.get(window.apiDomain + '/v1/users/' + userId).then(res => {
            if (res.status === 200) {
                console.log("res.data" + res.data)
                if (res.data.data.customers.length >= 1) {
                    console.log("customers are avaialbel" + JSON.stringify(res.data.data));
                    console.log(res.data.data.customers.length)
                    console.log(res.data.data._id);
                    setUsers(res.data.data.customers)
                    // props.setSession({
                    //     ...props.session,
                    //     ...res.data.data
                    // })
                    // setCookie('isLoggedIn', true, 30);
                    // setCookie('userId', res.data.data._id, 30);
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
                    {users.length}
                    {
                        users.length >= 1 ?
                           // users.map(({ name, customerStatus, _id , phone}) => (

                               users.map(item =>{
                                    return (
                                        <>
					        <div className={"owner-list-index" + "  " + (item.customerStatus == "UNVERIFIED" ? 'verification-pending' : "verification-complete")} onClick={() => handleAssignedDish(item)}>
                                        
                                        <p>
                                        <div className="left">
                                            <p className="namethumb">
                                                {/* {item.name.slice(0, 2)}</p> */}
                                                {item.name}
                                                </p>
                                         </div>
                                         <div className="right">
                                             <div className="top">
                                                 <span>{item.name}</span>
                                             <span>
                                                {
                                                 item.customerStatus === "UNVERIFIED" ? "Pending"   : "Verified" 
                                                }
                                                </span>
                                        
                                            </div>

                                            <div className="bottum">
                                                <span>
                                                    <img src={require("../assets/images/" + "location.png").default} />
                                                </span>
                                                <span>
                                                401 c block Lorem Ipsum Dummy, 4th Floor, Lorem Ipsum, Road, Bangalore                                                </span>
                                            </div>
                                        </div>

                                    </p>
                                        </div>
                                        </>
                                    )
                                })
                
                                // <div className={"owner-list-index" + "  " + (customerStatus == "UNVERIFIED" ? 'verification-pending' : "verification-complete")} onClick={() => handleAssignedDish(_id)}>
                                //     <input type="hidden" ref={ref=> textCustomerId.current[_id] = ref} value={_id} name="customerid" />
                                //     <input type="hidden" ref={ref => textCustomerName.current[_id] = ref} value={name} name="customername" />
                                //     <input type="hidden" ref={ref => textCustomerStatus.current[_id] = ref} value={customerStatus} name="customerstatus" />
                                //     <input type="hidden" ref={ref => textCustomerPhone.current[_id] = ref} value={phone} name="customerphone" />
                                //     <p>
                                //         <div className="left">
                                //             <p className="namethumb">
                                //                 {name.slice(0, 2)}</p>
                                //             {/* <img src={require("../assets/images/" + "owner1.png").default} /> */}
                                //         </div>
                                //         <div className="right">
                                //             <div className="top">
                                //                 <span>{name}</span>
                                //                 <span>
                                //                 {
                                //                  customerStatus === "UNVERIFIED" ? "Pending"   : "Verified" 
                                //                 }
                                //                 </span>
                                        
                                //             </div>

                                //             <div className="bottum">
                                //                 <span>
                                //                     <img src={require("../assets/images/" + "location.png").default} />
                                //                 </span>
                                //                 <span>
                                //                 401 c block Lorem Ipsum Dummy, 4th Floor, Lorem Ipsum, Road, Bangalore                                                </span>
                                //             </div>
                                //         </div>

                                //     </p>
                                // </div>
                          //  ))
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
            <VerifyUser open={showModal} onClose={() => toggleModal(false)} />
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
