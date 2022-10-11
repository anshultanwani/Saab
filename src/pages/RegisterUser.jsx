import React, { useState } from 'react';
import { Button, TextField, Switch } from '@mui/material';
import './register-user.scss';
import InputWithSearch from '../common/InputWithSearch';
import CollapsableSwitch from '../components/CollapsableSwitch';
import axios from 'axios';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { setCookie } from '../utils';
import { connect } from 'react-redux';
import { setSession } from '../actions';
import { getCookie } from '../utils';

const RegisterUser = props => {
    const searchParams = useLocation().search;
    const history = useHistory();
    const phoneNum = queryString.parse(searchParams).phone;
    const userType = queryString.parse(searchParams).userType;
    console.log("usertype=" + userType);
    const [switchStatus, updateStatus] = useState({
        cook: false,
        maid: false
    })
   const [addressArray , updateAddressArray] = useState([])
    const [data, updateData] = useState({
        name: "",
        email: "",
        phone: '',
        address:
            {
            houseNo: '',
            floor: "",
            society: "",
            locality: "",
            pin: 560008,
            regionality: []
        },
        services: {
            cook: {
                existing: 1,
                name: "",
                phone: '',
                specialities: []
            },
            maid: {
                existing: 1,
                name: "",
                phone: '',
                specialities: []
            }
        },
    });

   // console.log("data arr "+ data.address[0].houseNo)
    const [cookData, updateCookData] = useState({
        name: "",
        phone: '',
        cookSpeciality: []
    });

    const findAndUpdate = (dataObj, value, parentKey, key) => {
        for (var cur in dataObj) {
            if (typeof dataObj[cur] === 'object' && !Array.isArray(dataObj[cur]) && cur === parentKey.split('.')[0]) {
                console.log("data object inside=====" + JSON.stringify(dataObj[cur]));
                findAndUpdate(dataObj[cur], value, parentKey.split('.').length > 1 ? parentKey.split('.')[1] : '', key);
              //  data.addressArray.push(JSON.stringify(dataObj[cur]));
               /// updateAddressArray(JSON.stringify(dataObj[cur]))
               console.log("new values===" + JSON.stringify(dataObj[cur]) + value +  parentKey.split('.').length + parentKey.split('.')[1] + key)
            }
            else if (typeof dataObj[cur] === 'object' && Array.isArray(dataObj[cur]) ) {
                console.log("inside array")
            }
            else if (cur === key && !parentKey) {
                dataObj[cur] = value;
            }
        }
    }
    const handleChange = (node, value, subNode) => {
       let newData;
        if (userType == "OWNER") {
            console.log("owner data" + JSON.stringify({ ...data }))
            newData = { ...data };

            if (subNode == 'phone') {
                value = isNaN(Number(value)) ? newData[node][subNode] : Number(value);
            }
        }
        if (userType == "COOK") {
            console.log("cook data" + JSON.stringify({ ...cookData }))
            newData = { ...cookData };
            if (subNode == 'phone') {
                value = isNaN(Number(value)) ? newData[node][subNode] : Number(value);
            }
        }
        console.log("onchange data===" + JSON.stringify(newData));
        findAndUpdate(newData, value, node, subNode);
        updateData(newData)
        updateCookData(newData);
    }

    const handleSubmit = () => {
        console.log("ownercliekd" + data.address)
        const temp = [];
        temp.push(data.address);
        console.log(temp)
      
        const formData = {
            name : data.name,
            email: "",
            phone: Number(phoneNum),
            address: temp,
            services: {
            cook: data.services.cook,
            maid: data.services.maid
           },
            onboarded: 1,
            subscriptionType: null,
            userType: userType
          }
          console.log(formData)
      //  axios.post(window.apiDomain + '/v1/users/register' , formData).then(res => {
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/users/register',
            data:formData
            
        }).then(res => {
            if (res.status === 200) {
              //  console.log("owner response data" + JSON.stringify(res.data.data))
                console.log("owner response data" + JSON.stringify(res.data.data.services))
                props.setSession({
                    ...props.session,
                    ...res.data.data
                })
                setCookie('isLoggedIn', true, 30);
                setCookie('userId', res.data.data._id, 30);
                let userId = getCookie('userId');
                console.log("userid in register page==" + userId)
                // setCookie('cookName', res.data.data.services.cook.name , 30)
           //  window.location.pathname('/home');
               history.push('/home');
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleCookSubmit = () => {
        console.log("cookcLicked"+
        {
            ...cookData,
            onboarded: 1,
            subscriptionType: null,
            userType
        })
        console.log(userType);
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/users/register',
            data: {
                ...cookData,
                onboarded: 1,
                subscriptionType: null,
                userType
            }
        }).then((res) => {
            console.log(
             {
                ...cookData,
                onboarded: 1,
                subscriptionType: null,
                userType
            })
            console.log(res.status)
            if (res.status === 200) {
                console.log(res);
                console.log("cook response data" + res.data.data)
                props.setSession({
                    ...props.session,
                    ...res.data.data
                })

                setCookie('isLoggedIn', true, 30);
                setCookie('userId', res.data.data._id, 30);
               
                history.push('/select-owner?userType='+userType);
            }
        })

    }

    const cookHelperSection = ({ isCook = true }) => {
        return (
            <>
                <div className={'label-div'}>{(isCook ? "Cook's" : "Helper's") + "Details"}</div>
                <TextField
                    className="reg-field"
                    sx={{
                        width: 1
                    }}
                    placeholder={(isCook ? "Cook" : "Helper") + " Name"}
                    inputProps={{
                        value: isCook ? data.services.cook.name : data.services.maid.name,
                        onChange: e => handleChange('services.' + (isCook ? 'cook' : 'maid'), e.target.value, 'name')
                    }}
                />
                <TextField
                    className="reg-field"
                    sx={{
                        width: 1
                    }}
                    placeholder="Contact Number"
                    inputProps={{
                        value: isCook ? data.services.cook.phone || '' : data.services.maid.phone || '',
                        onChange: e => {
                            if (e.target.value.length > 10) {
                                return;
                            }
                            handleChange('services.' + (isCook ? 'cook' : 'maid'), e.target.value, 'phone')
                        },
                    }}
                />
                <div className={'label-div'}>{(isCook ? "Cook's" : "Helper's") + " Speciality"}</div>
                <InputWithSearch selected={data.services[isCook ? "cook" : "maid"].specialities} updateList={list => handleChange('services.' + (isCook ? 'cook' : 'maid'), list, 'specialities')} />
            </>
        )
    };
    return (
        <div className={'login-home signup'}>
            <div className={'upper-sec'}>
                <div className={'title'}>
                    Sign Up
                </div>
            </div>

            {userType === "OWNER" ?
                <div className={'lower-sec'}>
                    <div className={'data-holder'}>
                        <div className={'label-div'}>Your Details</div>
                        <div>
                            <TextField
                                className="reg-field"
                                sx={{
                                    width: 1
                                }}
                                placeholder="Your Name"
                                inputProps={{
                                    value: data.name,
                                    onChange: e => handleChange('', e.target.value, 'name')
                                }}
                            />
                            <div className='field-holder'>
                                <TextField
                                    className="reg-half-field"
                                    sx={{ width: 1 / 2.09 }}
                                    placeholder="House/Flat/Block No."
                                    inputProps={{
                                        value: data.address.houseNo || '',
                                        onChange: e => handleChange('address', e.target.value, 'houseNo')
                                    }}
                                />
                                <TextField
                                    className="reg-half-field"
                                    sx={{ width: 1 / 2.09 }}
                                    placeholder="Apartment/Road/Area"
                                    inputProps={{
                                        value: data.address.society || '',
                                        onChange: e => handleChange('address', e.target.value, 'society')
                                    }}
                                />
                            </div>
                        </div>
                        <div className='reasonality-srchbar'>
                            <div className={'label-div'}>Regionality</div>
                            <InputWithSearch updateList={list => handleChange('address', list, 'regionality')} />
                        </div>
                        <div className="selected-regin"></div>
                        <CollapsableSwitch label={'Do you have a Cook?'} status={switchStatus.cook} updateStatus={status => updateStatus({ ...switchStatus, cook: status })} >
                            {switchStatus.cook ? cookHelperSection({}) : null}
                        </CollapsableSwitch>
                        <div className="have-cook">
                            <CollapsableSwitch label={'Do you have Helper?'} status={switchStatus.maid} updateStatus={status => updateStatus({ ...switchStatus, maid: status })}>
                                {switchStatus.maid ? cookHelperSection({ isCook: false }) : null}
                            </CollapsableSwitch>
                        </div>
                        <div className='btn-holder'>
                            <Button
                                variant={'contained'}
                                children={'SIGN UP'}
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
                :
                <div className={'lower-sec'}>
                    <div className={'data-holder'}>
                        <div className={'label-div'}>Your Details</div>
                        <div>
                            <TextField
                                className="reg-field"
                                sx={{
                                    width: 1
                                }}
                                placeholder="Cook Name"
                                inputProps={{
                                    value: cookData.name,
                                    onChange: e => handleChange('', e.target.value, 'name')
                                }}
                            />
                            <div className='field-holder'>
                                <TextField
                                    className="reg-field"
                                    sx={{
                                        width: 1
                                    }}
                                    placeholder='Contact Number'
                                    type='Number'
                                    inputProps={{
                                        value: cookData.phone,
                                        onChange: e => {
                                            if (e.target.value.length > 10) {
                                                return;
                                            }
                                            handleChange('', e.target.value, 'phone')
                                        },
                                    }}
                                />
                            </div>
                            <div className={'label-div'}>Cook's Speciality</div>
                            <InputWithSearch updateList={list => handleChange('', list, 'cookSpeciality')} />
                        </div>
                        <div className='btn-holder'>
                            <Button
                                variant={'contained'}
                                children={'SIGN UP'}
                                onClick={handleCookSubmit}
                            // onClick={() => props.history.push('/select-owner')}
                            />
                        </div>
                        <p className='signinpage'><span>Already have an account? </span><a href='/login'>Sign In</a></p>
                    </div>
                </div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps, { setSession }) (withRouter(RegisterUser));
