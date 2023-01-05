import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const  DiscreteSliderMarks = props => {
  const {
    passToParent
  } = props;
  const marks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 25,
        label: '25',
    },
    {
      value: 50,
      label: '50',
    }
];

  
function valuetextfun(value) {
  console.log("inside slider range")
  console.log(`${value}`)
  props.passToParent(`${value}`);
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
        min={1}
        max={50}
      />
    </Box>
  );
}

export default DiscreteSliderMarks;