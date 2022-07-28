import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import './my-preferences-details.scss';
const MyPreferencesDetails = (props) => {
    const [data, setData] = useState("")
    const [catergoy, setCatergoy] = useState(["all"])
    const handleAssign = () => {
        console.log("assigned")
    }

    const filterResult = (selCat) => {
        console.log(selCat);
        const result = props.mypreferencesset.filter((curData) => {
            console.log(curData)
            return curData.category === selCat;
        });
        console.log("reslected" + result);
        setData(result);
    }
    useEffect(() => {
        filterResult();
    }, [])


    const handleCategoryChange = (selCat) => {
        filterResult(selCat);
        // console.log(selCat);
    }


    const dishData = () => props.mypreferencesset.map((cur, index) => {
        var comboStr = '';
        cur.dishCombo.map((dish, index) => {
            comboStr = comboStr + dish + (index === cur.dishCombo.length - 1 ? '' : ' + ');
            return dish;
        })

        return (
            <div className='card' key={index} >
                <div className="left-sec">
                    <div className='img-holder'>
                        {
                            cur.images.map((image, index) => {
                                return (
                                    <img key={cur.category + '_' + index} src={require('../assets/' + image).default} className={"dish-img"} alt="not loaded" />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right-sec">
                    <div className='cat-holder'>
                        <div className='comboname'>{cur.comboName}</div>
                    </div>
                    <div className='dish'>{comboStr}</div>
                    <Button
                        variant="contained"
                        className="assign-btn"
                        onClick={() => handleAssign(cur.category)}
                    >
                        Re-assign
                    </Button>
                </div>
            </div>
        );
    }
    )
    return (
        <div className="preferences-details">
               <div className="border-card">
            <div className="filter-sec">
            <span>Sort By :</span>
            <select onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="all">All</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
            </div>


            <div className="myPreferences-sec-details">
                {dishData()}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mypreferencesset: state.foodData.mypreferences
    }
}
export default connect(mapStateToProps)(MyPreferencesDetails);