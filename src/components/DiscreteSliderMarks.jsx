import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const  DiscreteSliderMarks = props => {
  const {
    marks
  } = props;

  
function valuetextfun(value) {
  console.log("inside slider range")
  console.log(`${value}`)
  return `${value}`;
}

  
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={5}
        getAriaValueText={valuetextfun}
        step={1}  
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}

export default DiscreteSliderMarks;