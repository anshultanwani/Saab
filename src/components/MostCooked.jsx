import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import './most-cooked.scss';

const MostCooked = props => {
    const dish = props.mostCooked.map(cur => {
        return (
            <div className='single-dish'>
                <img src={require('../assets/'+cur.image).default} />
                <div className='dish-title'>{}</div>
            </div>
        )
    })
    return (
        <div className='most-cooked'>
            <div className='heading-holder'>
                <div className='title'>Most Cooked At Home</div>
                <div className='dropdown-cat'>
                    All
                    <FontAwesomeIcon icon={faSortDown} className="arrow-icon" />
                </div>
            </div>
            <div className='section'>
                {dish}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mostCooked: state.foodData.mostcooked
    }
}
export default connect(mapStateToProps)(MostCooked);