import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextField } from '@mui/material';
import './assigned-dish.scss';
const AssignedDish = (props) => {
     return (
        <>
            <div className='assigned-dish-sec-outer'>
                <h1>Your Assigned Dishes</h1>
                <div className='assigned-dish-inner'>
                   <div className='dish-name'>
                    <div className='catergory'>
                    <span>Breakfast</span><span>REMOVE</span>
                    </div>
                    <div className='subcaterogy'>

                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default AssignedDish