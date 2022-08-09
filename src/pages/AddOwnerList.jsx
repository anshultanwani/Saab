import React, { useState } from "react";
import { Button, TextField } from '@mui/material';
import { connect } from "react-redux";
import "./add-owner-list.scss";
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import AddressUpdate from "../common/AddressUpdate";
import Checkbox from '@mui/material/Checkbox';
import { setSession } from '../actions';
import { getCookie } from '../utils';
import { setCookie } from '../utils';

const AddOwnerList = (props) => {
    const history = useHistory();
    const [showModal, toggleModal] = useState(false)
    let userId = getCookie('userId');
    const [selectedType, updateUser] = useState(0)
    const [data, updateData] = useState({
        userId: userId,
        name: "",
        phone: "",
        onboarded: 1,
        userType: "COOK",
        monthlyServiceCharge: 3000,
        cookSpeciality: [],
        members: 1,
        workingDays: [],
        meals: []
    })
    const [monthlyServiceCharge, setMonthlyServiceCharge] = useState(data.monthlyServiceCharge);
    const [members, setMembers] = useState(data.members);
    const [checked, setChecked] = useState([]);
    const [checkedMeal, setCheckedMeal] = useState([]);
    const findAndUpdate = (dataObj, value, parentKey, key) => {
        for (var cur in dataObj) {
            if (typeof dataObj[cur] === 'object' && !Array.isArray(dataObj[cur]) && cur === parentKey.split('.')[0]) {
                findAndUpdate(dataObj[cur], value, parentKey.split('.').length > 1 ? parentKey.split('.')[1] : '', key);
            } else if (cur === key && !parentKey) {
                dataObj[cur] = value;
            }
        }
    }

    const handleChange = (node, value, subNode) => {
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        if (subNode == 'phone') {
            value = isNaN(Number(value)) ? newData[node][subNode] : Number(value);
        }
        findAndUpdate(newData, value, node, subNode);
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }


    const handleDecrement = () => {
        data.monthlyServiceCharge = data.monthlyServiceCharge - 1;
        setMonthlyServiceCharge(data.monthlyServiceCharge);
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }

    const handleIncrement = () => {
        data.monthlyServiceCharge = data.monthlyServiceCharge + 1;
        setMonthlyServiceCharge(data.monthlyServiceCharge);
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }

    const handleMembersDecrement = () => {
        data.members = data.members - 1;
        setMembers(data.members);
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }

    const handleMembersIncrement = () => {
        data.members = data.members + 1;
        setMembers(data.members);
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }


    const handleCheckbox = (event) => {
        data.workingDays = [...checked];
        if (event.target.checked) {
            data.workingDays = [...checked, event.target.name];
        } else {
            data.workingDays.splice(checked.indexOf(event.target.name), 1);
        }
        console.log(data.workingDays)
        setChecked(data.workingDays);
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }
    const handleMeals = (event) => {
        console.log(event.target.name)
        data.meals = [...checkedMeal];
        if (event.target.checked) {
            data.meals = [...checkedMeal, event.target.name];
        } else {
            data.meals.splice(checked.indexOf(event.target.name), 1);
        }
        console.log(data.meals)
        setCheckedMeal(data.meals);
        console.log("owner data" + JSON.stringify({ ...data }))
        let newData = { ...data };
        updateData(newData)
        console.log("updated values" + JSON.stringify(newData));
    }

    const handleSubmit = () => {
        let newData = { ...data };
        console.log("updated values" + JSON.stringify(newData));
        axios({
            method: 'put',
            url: window.apiDomain + '/v1/users/add/customer',
            data: {
                ...data,
                onboarded: 1,
            }
        }).then(res => {
            if (res.status === 200) {
                console.log("add owner response data" + JSON.stringify(res.data.data))
                // props.setSession({
                //     ...props.session,
                //     ...res.data.data
                // })
                setCookie('isLoggedIn', true, 30);
                setCookie('userId', res.data.data._id, 30);
                history.replace('/select-owner');
            }
        }).catch(err => {
            console.log(err)
        })
    }


    const label = { inputProps: { 'aria-label': 'mondaty' } };
    return (
        <div className="add-owner-list">
            <div className='border-card'>
                <div className="owner-list">
                    <div className="owner-details">
                        <div className="order-details-head">
                            <div className="title">Customer Details</div>
                        </div>
                        <TextField
                            className="reg-field"
                            sx={{
                                width: 1
                            }}
                            placeholder="Customer Name"
                            inputProps={{
                                value: data.name,
                                onChange: e => handleChange('', e.target.value, 'name')
                            }}
                        />
                        <TextField
                            className="reg-field"
                            sx={{
                                width: 1
                            }}
                            placeholder='Contact Number'
                            type='Number'
                            inputProps={{
                                value: data.phone,
                                onChange: e => {
                                    if (e.target.value.length > 10) {
                                        return;
                                    }
                                    handleChange('', e.target.value, 'phone')
                                },
                            }}
                        />

                        <div className='input-holder'>
                            <div className="title">Agreed Amount</div>
                            <div className="qty-sec">
                                <span className='qty-btn' onClick={(e) => handleDecrement(data.monthlyServiceCharge)}>-</span>
                                <TextField
                                    className="qutn-feild"
                                    sx={{ m: 1 }}
                                    InputProps={{
                                        value: data.monthlyServiceCharge || 0,
                                        type: 'number'
                                    }}
                                />
                                <span className='qty-btn' onClick={() => handleIncrement(data.monthlyServiceCharge)}>+</span>
                            </div>
                        </div>
                        <div className='input-holder'>
                            <div className="title">Number of Members</div>
                            <div className="qty-sec">
                                <span className='qty-btn' onClick={() => handleMembersDecrement(data.members)}>-</span>
                                <TextField
                                    className="qutn-feild"
                                    sx={{ m: 1 }}
                                    InputProps={{
                                        value: data.members || 0,
                                        type: 'number',
                                        onChange: (e) => handleChange('', e.target.value, 'members')
                                    }}
                                />
                                <span className='qty-btn' onClick={() => handleMembersIncrement(data.members)}>+</span>
                            </div>
                        </div>
                        <div className="working-days">
                            <div className="title">
                                Working Days
                            </div>
                            <ul>
                                {
                                    ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATURDAY"].map((index) => {
                                        return (
                                            <>
                                                <li>
                                                    <Checkbox {...label}
                                                        name={index}
                                                        onChange={handleCheckbox}
                                                    />
                                                    <span className={'label-div'}>
                                                        {index}
                                                    </span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="meal-numbers">
                            <div className="title">Number of Meals</div>
                            <ul>
                                {
                                    ['BREAKFAST', 'LUNCH', 'DINNER'].map((index) => {

                                        return (
                                            <>
                                                <li>
                                                    <Checkbox {...label}
                                                        name={index}
                                                        onChange={handleMeals}
                                                    />
                                                    <span className={'label-div'}>{index}</span>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="order-details-button">
                        <div className='btn-holder'>

                            <Button
                                variant='outlined'
                                className='cancel-btn'
                                children={(
                                    <div className='btn-content'>
                                        Cancel
                                    </div>
                                )}
                            />
                            <Button
                                variant='contained'
                                className=''
                                onClick={handleSubmit}
                                children={(
                                    <div className='btn-content'>
                                        Submit
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AddressUpdate open={showModal} onClose={() => toggleModal(false)} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ownerlistset: state.foodData.ownerlist,
        session: state.session
    }
}

export default connect(mapStateToProps)(AddOwnerList);