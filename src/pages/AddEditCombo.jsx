import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import './addeditcombo.scss';
import Slider from "react-slick";
import AddEditComboYoutube from '../components/AddEditComboYoutube';
const AddEditCombo = (props) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        variableWidth: true
    };
    const searchParams = useLocation().search;
    const foodCat = queryString.parse(searchParams).cat;
    console.log(foodCat);
    const selFoodCat = props.addeditcombo[foodCat];
    const [itemIndex, updateIndex] = useState(0);
    
    return (
        <>
            <div className='assign-dish-sec'>
                <div className='border-card'>
                    <div className='sidebar'>
                        <ul>
                            {
                                selFoodCat.map((data, index) =>
                                    <li onClick={() => updateIndex(index)} className={index === itemIndex ? "selected" : ""}>
                                        <p> <img src={require('../assets/' + data.foodimage).default} /></p>
                                        <p> {data.foodname}</p>
                                        <p>{ data.foodquantity }</p>
                                    </li>

                                )
                            }
                        </ul>
                    </div>
                    <div className='right-sec'>
                    <div className='subcatheader'>
                    <Slider {...settings}>
                        {
                            selFoodCat[itemIndex].options.map((cur) => {
                                return (
                                    <>
                                        <div className='sec'>
                                            <img src={require('../assets/' + cur.image).default} />
                                            <p>
                                                {cur.name}
                                            </p>
                                        </div>

                                    </>

                                )
                            })
                        }
                        </Slider>
                    </div>
                    <AddEditComboYoutube />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        addeditcombo: state.foodData.foodCombo
    }
}

export default connect(mapStateToProps)(AddEditCombo);

