import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './suggestion.scss';
import { Button } from '@mui/material';

const Suggestions = props => {

    const handleAssign = (comboId) => {
        alert('comboId '+comboId)
    }

    const handleEdit = () => {
        alert('Edit Code')
    }

    const cards = props.suggestions.map(cur => {
        var comboStr = '';
        cur.dishCombo.map((dish,index) => {
            comboStr = comboStr + dish + (index === cur.dishCombo.length - 1 ? '' : ' + ')
        })
        return (
            <div className='card'>
                <div className='img-holder'>
                    {
                        cur.images.map(image => {
                            return (
                                <img src={require('../assets/'+image).default} className={"dish-img"} />
                            )
                        })
                    }
                </div>
                <div className='cat-holder'>
                    <div className='category'>{cur.category}</div>
                    <div className='edit-meal' onClick={() => handleEdit()}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </div>
                <div className='dish'>{comboStr}</div>
                <Button 
                    variant="contained"
                    className="assign-btn"
                    onClick={() => handleAssign(cur.comboId)}
                >
                    Assign
                </Button>
            </div>
        )
    })
    return (
        <div className='main-holder'>
            <div className='title-holder'>
                <div className='title'>Today's Suggestions</div>
                <div className='plan-title'>Plan Your Meal</div>
            </div>
            <div className='card-holder'>
                {cards}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        suggestions: state.foodData.suggestions
    }
}
export default connect(mapStateToProps)(Suggestions);