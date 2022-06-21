import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index'
import CollapsableSwitch from '../components/CollapsableSwitch';
import BottomDrawer from './BottomDrawer';
import './auto-approve.scss';

const AutoApprove = props => {
    const [approveStatus, updateStatus] = useState(false)
    const content = (
        <div className='auto-approve'>
            <CollapsableSwitch label={''} status={approveStatus} updateStatus={status => updateStatus(status)} />
        </div>
    )
    return (
        <BottomDrawer
            {...props}
            label={'What is Enable Auto Approve?'}
            onClose={() => props.toggleSliderDrawer({
                addMemberDrawer: false
            })}
            children={content}
            btnArr={[{
                className: 'btn-submit',
                variant: "contained",
                onClick: () => console.log('onclick done'),
                children: "Confirm !",
            }]}
        />
    )
};

export default connect(null,{toggleSliderDrawer})(AutoApprove);
