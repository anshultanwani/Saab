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
        arrows: false
    };
    console.log("1");
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const videoThumnail = () => {
        return foodVideoUrl.map((videoIndex) => {
            let youtube_video_id = videoIndex.match(regExp);
            let video_thumbnail_image = `<img src="https://img.youtube.com/vi/${youtube_video_id[2]}/0.jpg">`
            return video_thumbnail_image;
        })
    }
    return (
        <>
            <div className='youtube-sec-outer'>
                <div className='youtube-sec'>
                    <Slider {...settings}>
                            {
                                //     foodVideoUrl.map((cur )=>(
                                //     <iframe
                                //     src={cur}
                                //     frameborder="0"
                                //     allow="autoplay; encrypted-media"
                                //     allowfullscreen
                                //     title="video"
                                //     width="99"
                                //     height="60"
                                // />
                                //     )
                                //     )
                                videoThumnail()
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