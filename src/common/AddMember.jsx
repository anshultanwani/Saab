import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import BottomDrawer from './BottomDrawer';
import { toggleSliderDrawer } from '../actions/index'
import { connect } from 'react-redux';
import ReplayIcon from '@mui/icons-material/Replay';
import { setCookie } from '../utils';
import { getCookie } from '../utils';
import axios from 'axios';

const AddMember = props => {
    const {
        userType
    } = props

   // let userId = getCookie('userId');
   var userId = sessionStorage.getItem("userId");
    console.log("add memeber userid==" + userId)

    const [mobileNum, updateNum] = useState('');
    const [errors, updateErrors] = useState('');
    const content = (
        <>
            <TextField
                className="mob-field"
                sx={{ m: 1 }}
                InputProps={{
                    placeholder: 'Full Name'
                }}
            />
            <TextField
                className="mob-field"
                sx={{ m: 1 }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{'(+91)'}</InputAdornment>,
                    endAdornment: <InputAdornment position="end">
                        <img src={require("../assets/images/reload.png").default} onClick={() => updateNum('')} />
                    </InputAdornment>,
                    value: mobileNum,
                    onChange: e => {
                        if (e.target.value.length > 10 || e.target.value.includes('.')) {
                            return;
                        }
                        errors && updateErrors('');
                        updateNum(e.target.value)
                    },
                    placeholder: '000 000 0000',
                    type: 'Number'
                }}
            />
        </>
    )


    const handleAddMember = () => {
        if (mobileNum.length < 10) {
            updateErrors('Please Enter Valid Mobile Number');
            return;
        }
        console.log("memeberadded" + Number(mobileNum));
        axios({
            method: 'post',
            url: window.apiDomain + '/v1/users/add/member',

            data: {
                userType: "OWNER",
                otp: "1010",
                relation: "FLATMATE",
                userId: userId,
                phone: Number(mobileNum)
            }
        }).then((res) => {
            if (res.status === 200) {
                console.log(res);
                console.log("cook response data" + res.data.data)
                // props.setSession({
                //     ...props.session,
                //     ...res.data.data
                // })

                // setCookie('isLoggedIn', true, 30);
                // setCookie('userId', res.data.data._id, 30);
            }
        })
    }
    return (
        <BottomDrawer
            {...props}
            label={'Add New Member'}
            onClose={() => props.toggleSliderDrawer({
                addMemberDrawer: false
            })}
            children={content}
            btnArr={[{
                className: 'btn-submit',
                variant: "contained",
                onClick: handleAddMember,
                children: "DONE !",
            }]}
        />
    )
}

export default connect(null, { toggleSliderDrawer })(AddMember);