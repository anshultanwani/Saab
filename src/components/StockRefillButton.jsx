import React, { useState } from 'react';
import './stockrefill-button.scss';
import { Button } from '@mui/material';

const StockRefillButton = props => {
    const {
        label
    } = props;

    return (
        <div className='stockrefill-button-sec'>
            <div className='stockrefillebtn-label-holder'>
                <div className='button-text'>
                    Rps 600
                    <span>(6 items)</span>
                </div>
                <div className='btn-holder'>
                    <Button
                        variant='contained'
                        className='stockpage-btn'
                       // onClick={enbleautoApprove}
                        children={(
                            <div className='btn-content'>
                              PROCEED TO PAY
                            </div>
                        )}
                    />
                </div>
            </div>
            {props.children}
        </div>
    )
};

export default StockRefillButton;