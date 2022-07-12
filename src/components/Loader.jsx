import React from 'react';
import './loader.scss';

const Loader = props => {
    return (
        <div className='holder-div'>
            <div className="loader1">
                <div className="inside1">
                    <span>LOADING</span>
                </div>
            </div>
        </div>
    )
};

export default Loader;