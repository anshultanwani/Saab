import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextField } from '@mui/material';
import './add-edit-combo-youtube.scss';
import Slider from "react-slick";
import { toggleSliderDrawer } from '../actions';
const AddEditComboYoutube = (props) => {
    const {
        selCat,
        foodVideoUrl ,
        foodQuantity
    } = props;

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots:false,
        infinite: true,
        speed: 300,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    const openVideo = (foodVideoUrl) => {
      //  console.log("harsha")
        toggleSliderDrawer({
            videoPopup: true,
            data : {
                videoUrl : foodVideoUrl
           }
        })
    }
   
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const videoThumnail = () => {
        return foodVideoUrl.map((videoIndex) => {
            let youtube_video_id = videoIndex.match(regExp);
            return (
                <img src={"https://img.youtube.com/vi/" + youtube_video_id[2] + "/0.jpg"} onClick={openVideo}/>
            );
        })
    }

    return (
        <>
            <div className='youtube-sec-outer'>
                <div className='youtube-sec'>
                    <Slider {...settings}>
                        {
                            videoThumnail()
                        }
                    </Slider>
                    <div className='video-overlay'></div>
                </div>
                <div className='food-quantity'>
                    <div className='youtube-left-sec'>{selCat} Qty: </div>
                    <div className='youtube-right-sec'>
                        <div className='input-holder'>
                        <span className='qty-btn'>-</span>
                        <TextField
                            className="qutn-feild"
                            sx={{ m: 1}}
                            InputProps={{
                                value: 1 || 0,
                                type: 'number'
                            }}
                        />
                        <span className='qty-btn'>+</span>
                    </div>
                    </div>
                </div>
                <div className='additional-notes'>
                    <label>Additional Notes</label>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        placeholder="Type Additional Notes..."
                        style={{ width: 200 }}
                    />
                </div>
            </div>
        </>
    )
}

export default AddEditComboYoutube;