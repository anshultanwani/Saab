import React from 'react';

const BoxWithSideBorder = props => {
    const {
        title,
        subTitle,
        rightSec,
        onClick
    } = props;
    return (
        <div className='rating-box' onClick={onClick}>
            <div>
                <label className='box-label'>{title}</label>
                {subTitle ?
                    (<label className='sub-title'>{subTitle}</label>) : null}
            </div>
            {rightSec ?
                rightSec : null}
        </div>
    )
};

export default BoxWithSideBorder;