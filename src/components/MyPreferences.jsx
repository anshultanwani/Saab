import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';
import './my-preference.scss';
import { Button } from '@mui/material';

const MyPreferences = (props) => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        //   autoplay: true,
        //   autoplaySpeed: 1500,
        };
        return (
          <div>
        <div className="myPreferences-sec">
        <div class="title">My Preferences</div>
            <Slider {...settings}>
            {
            props.mypreferencesset.map((item , index)=> {
                    return (
                    <div key={index} class="prefrencesec">
                    <h6>{item.comboName}</h6>
                    <p>{item.comboDishName}</p>
                    <Button 
                    variant="contained"
                    className="preferences-btn"
                >
                    Assign
                </Button>
                    </div>
                    )
            })}
            </Slider>
            </div>
          </div>
        );
      }


const mapStateToProps = state => {
        return {
            mypreferencesset: state.foodData.mypreferences
        }
}
export default connect(mapStateToProps)(MyPreferences);