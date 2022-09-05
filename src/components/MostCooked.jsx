import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './most-cooked.scss';
import { Button } from '@mui/material';

const MostCooked = props => {
    const {
        mostCooked
    } = props;

    const [showAll,toggleAll] = useState(true);
    const dish = mostCooked.map((cur,index) => {
        return (
            <div className='single-dish' key={index} >
                <img src={require('../assets/'+cur.image).default} alt="not loaded" />
                <div className='dish-title'>{cur.dishName}</div>
            </div>
        )
    })

    return (
        <div className='most-cooked'>
            <div className='heading-holder'>
                <div className='title'>Food Categories</div>
                <div className='dropdown-cat' onClick={() => alert('will redirect to change cat page')}>
                    All
                    <FontAwesomeIcon icon={faSortDown} className="arrow-icon" />
                </div>
            </div>
            <div className={'dish-section '+(showAll?'show-all':'hide')}>
                {dish}
            </div>
            {mostCooked.length > 8 ? 
            <Button
                variant="outlined"
                className="more-less-btn"
                onClick={() => toggleAll(!showAll)}
            >
                {showAll?"View Less":"View More"}
            </Button>
            :null}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mostCooked: state.foodData.mostcooked
    }
}
export default connect(mapStateToProps)(MostCooked);