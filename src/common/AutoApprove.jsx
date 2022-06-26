import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index'
import CollapsableSwitch from '../components/CollapsableSwitch';
import BottomDrawer from './BottomDrawer';
import './auto-approve.scss';
import axios from 'axios';

const AutoApprove = props => {
    const [approveStatus, updateStatus] = useState(false)
    const content = (
        <div className='auto-approve'>
            <CollapsableSwitch label={''} status={approveStatus} updateStatus={status => updateStatus(status)} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, but also the leap into electronic typesetting, remaining essentially unchanged.
                <br /><br/>It was popularised in the 1960s with the release of Letraset sheets containing.</p>
        </div>
    )

    const onSubmit = () => {
        axios.put(window.apiDomain+'/v1/users/payment/auto-approve',{
            userId: props.session._id,
            paymentAutoApproved: approveStatus?1:0
        }).then(res => {
            if(res.status == '200') {
               props.setSession({
                   ...res.data.data
               })
               props.toggleSliderDrawer({
                    autoApprove : false
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <BottomDrawer
            {...props}
            label={'What is Enable Auto Approve?'}
            onClose={() => props.toggleSliderDrawer({
                autoApprove : false
            })}
            children={content}
            btnArr={[{
                className: 'btn-submit',
                variant: "contained",
                onClick: onSubmit,
                children: "Confirm !",
            }]}
        />
    )
};

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps,{toggleSliderDrawer})(AutoApprove);
