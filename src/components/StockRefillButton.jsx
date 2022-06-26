import React, { useState } from 'react';
import './stockrefill-button.scss';
import { Button } from '@mui/material';

const StockRefillButton = props => {
    const {
        btnTxt = 'PROCEED TO PAY',
        amt,
        count,
        clickHandler
    } = props;

    return (
        <div className='stockrefill-button-sec'>
            <div className='stockrefillebtn-label-holder'>
                <div className='button-text'>
                    ₹ {amt}
                    <span>{'('+count+' items)'}</span>
                </div>
                <div className='btn-holder'>
                    <Button
                        variant='contained'
                        className='stockpage-btn'
                       onClick={clickHandler}
                        children={(
                            <div className='btn-content'>
                              {btnTxt}
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