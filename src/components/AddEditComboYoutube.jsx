import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextField } from '@mui/material';
import './add-edit-combo-youtube.scss';
import Slider from "react-slick";

const AddEditComboYoutube = (props) => {
    const {
        selCat,
        foodVideoUrl
    } = props;
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        variableWidth: true
    };

    console.log("selcat" + selCat)
    // let youtubevideoUrl = foodVideoUrl;
    // console.log(youtubevideoUrl)
    // let youtube_video_id = youtubevideoUrl.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
    // console.log(youtube_video_id);

   // let video_thumbnail = '<img src="https://img.youtube.com/vi/' + youtube_video_id + '/0.jpg">'
   // console.log(video_thumbnail);
    return (
        <>
            <div className='youtube-sec-outer'>
                <div className='youtube-sec'>
                <Slider {...settings}>
                    {
                        foodVideoUrl.map((cur )=>(
                        <iframe
                        src={cur}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                        width="99"
                        height="60"
                    />
                        )
                        )
                    }
                  </Slider>  
                </div>
                <div className='food-quantity'>
                    <div className='youtube-left-sec'>{selCat} Qty: </div>
                    <div className='youtube-right-sec'>
                        <div className='input-holder'>
                            <span className='qty-btn'>-</span>
                            <TextField
                                className="qutn-feild"
                                sx={{ m: 1 }}
                                InputProps={{
                                    value: 0,
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