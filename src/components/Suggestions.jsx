import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './suggestion.scss';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
const Suggestions = props => {
    const {
        suggestions
    } = props;
    const history = useHistory();
    const mealType = ['breakfast' ,'LUNCH' , 'DINNER' ]

    console.log(mealType);
    const handleAssign = (comboId) => {
       console.log('comboId '+comboId)
        //history.push('/addedit-combo?cat=' + comboId)
    }

    const handleButtonClick = () =>{
        history.push('/meal-plan')
    }
    const handleEdit = (comboId) => {
      //  console.log(combo)
       // history.push('/editcombo')
        history.push('/addedit-combo?cat=' + comboId)
    }

    // useEffect(() => {
    //     mealType.map((cur)=>{
    //         axios.get(window.apiDomain + "/meals?type="+ cur)
    //         .then((res)=>{
    //             console.log(res)
    //             console.log(res.data.data)
    //         })
    //     })
    // }, [])

    // axios.get(window.apiDomain + "/meals?type="+ "BREAKFAST")
    // .then((res)=>{
    //     console.log(res)
    //     console.log(res.data.data)
    // })


    const dishData = suggestions.map((cur,index) => {
        var comboStr = '';
        cur.dishCombo.map((dish,index) => {
            comboStr = comboStr + dish + (index === cur.dishCombo.length - 1 ? '' : ' + ');
            return dish;
        })
        return (
            <div className='card' key={index} >
                <div className='img-holder'>
                <div className='edit-meal' onClick={() => handleEdit(cur.category)}>
                <img src={require('../assets/images/editmeal.png').default} alt="not loaded" />
                    </div>
                    {
                        cur.images.map((image,index) => {
                            return (
                                <img key={cur.category+'_'+index} src={require('../assets/'+image).default} className={"dish-img"} alt="not loaded" />
                            )
                        })
                    }
                </div>
               
                <div className='cat-holder'>
                    <div className='category'>{cur.category}</div>
                </div>
                <div className='dish'>{comboStr}</div>
                <Button 
                    variant="contained"
                    className="assign-btn"
                    onClick={() => handleAssign(cur.category)}
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
                <Button  className='plan-title' variant="contained" onClick={handleButtonClick}>PLAN YOUR MEAL</Button>
            </div>
            <div className='card-holder'>
                {dishData}
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