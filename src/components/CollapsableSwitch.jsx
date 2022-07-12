import React from 'react';
import './collapsable-switch.scss';

const CollapsableSwitch = props => {
    const {
        label
    } = props;
    const Switch = (
        <label className={"status-switch "+(props.status?'on':'off')} onClick={() => props.updateStatus(!props.status)}>
            <input type="checkbox" className="custom-switch-inp" />
                <label className="custom-switch-btn">
                    <div className="switch-button"></div>
                </label>
        </label>
    )
    return (
        <div className='collapse-switch'>
            <div className='switch-label-holder'>
                <div className='label-txt'>{label}</div>
                {Switch}
            </div>
            {props.children}
        </div>
    )
};

export default CollapsableSwitch;