import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './most-cooked.scss';
import { Button } from '@mui/material';

const MostCooked = props => {
    const [showAll,toggleAll] = useState(false);
    const dish = props.mostCooked.map(cur => {
        return (
            <div className='single-dish'>
                <img src={require('../assets/'+cur.image).default} />
                <div className='dish-title'>{cur.dishName}</div>
            </div>
        )
    })

    return (
        <div className='most-cooked'>
            <div className='heading-holder'>
                <div className='title'>Most Cooked At Home</div>
                <div className='dropdown-cat' onClick={() => alert('will redirect to change cat page')}>
                    All
                    <FontAwesomeIcon icon={faSortDown} className="arrow-icon" />
                </div>
            </div>
            <div className={'dish-section '+(showAll?'show-all':'hide')}>
                {dish}
            </div>
            {props.mostCooked.length > 8 ? 
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