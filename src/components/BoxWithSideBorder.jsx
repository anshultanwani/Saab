import React from 'react';

const BoxWithSideBorder = props => {
    const {
        title,
        subTitle,
        rightSec
    } = props;
    return (
        <div className='rating-box'>
            <label className='box-label'>{title}</label>
            {subTitle ?
                (<label className='sub-title'>{subTitle}</label>) : null}
            {rightSec ?
                rightSec : null}
        </div>
    )
};

export default BoxWithSideBorder;