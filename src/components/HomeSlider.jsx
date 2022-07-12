import React from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';
import './home-slider.scss';
import { Button } from '@mui/material';

const HomeSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
  //  autoplay: true,
  //  autoplaySpeed: 1500,
    slidesToScroll: 1
  };
  return (
    <div className="homeslider">
      <Slider {...settings}>
        {
          props.homesliderimages.map((image, index) => {
            return (
              <div key={index}>
                <div className="sec-left">
                  <h1>{image.imgText}<span>{image.imgText1}</span></h1>
                  <Button
                    variant="outlined"
                    className="slider-btn"
                  >
                    Book Now
                  </Button>
                </div>
                <div className="sec-right slidertext">
                  <img src={require('../assets/' + image.imgPath1).default} alt="not loaded" />
                  <img src={require('../assets/' + image.imgPath).default} alt="not loaded" />
                </div>
              </div>
            )
          })}
      </Slider>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    homesliderimages: state.foodData.homeslider
  }
}
export default connect(mapStateToProps)(HomeSlider);