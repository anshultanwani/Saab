import React from 'react';
import { Button, Drawer } from '@mui/material';
import {ReactComponent as Ellipse} from '../assets/images/Ellipse.svg';
import {ReactComponent as Cross} from '../assets/images/Vector.svg';
import './feedback.scss';

const BottomDrawer = props => {
    const {
        label,
        children
    } = props;
    return (
        <Drawer
            anchor='bottom'
            open={props.open}
            PaperProps={{className: 'drawer'}}
        >
             <div className='feedback'>
                <Ellipse className='elipse' onClick={() => props.onClose()}/>
                <Cross className='cross' onClick={() => props.onClose()} />
                <div className='label-txt'>{label}</div>
                <div className='holder'>
                    {children}
                    <div className='btn-holder'>
                        {props?.btnArr?.map((cur,index) => 
                            <Button {...cur} key={index} />
                        )}
                    </div>
                </div>
            </div>
        </Drawer>
    )
};

export default BottomDrawer;