import React , {useState} from 'react'
import styled from 'styled-components';
import { MultiStepForm, Step } from 'react-multi-form'
import ChefFormStep1 from '../components/ChefFormStep1'
import ChefFormStep2 from '../components/ChefFormStep2'
import { Button, TextField, Switch } from '@mui/material';
import ChefFormSummary from './ChefFormSummary';
const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  @media(max-width: 590px) {
    width: 327px;
  }
`

const ChefForm = () => {
 
  const [active, setActive] = useState(1);
  const [catState, setCatState] = useState('BREAKFAST');
  const [cuisineArr, setCuisineArr] = useState([]);
  const ChildCallback = (value) =>  {
    setCatState(value);
}
    const CuisineCallback = (value) =>  {
      setCuisineArr(value)
    }

    var apiClick = () =>{
    }
    console.log("apivalue" + apiClick)
    const apiCallBack = (apiValue) =>{
      apiClick = apiValue;
    }

   
  return (
    <Container className='form-step'>
      <MultiStepForm activeStep={active} className="step-from">
        <Step label='step1'>
          <ChefFormStep1 passToParent={ChildCallback} passToParentCuisine={CuisineCallback} />
        </Step>
        <Step label='step2'>
          <ChefFormStep2 catState={catState} cuisineArr={cuisineArr} passToParentApiCallBack={apiCallBack}/>
        </Step>
        <Step label='step3'>
         <ChefFormSummary/>
        </Step>
      </MultiStepForm>

      {active !== 1 && (
        <Button  
        style={{
          float: 'left', 
          color:"#ED7768",
          fontWeight: "900",
          fontSize: "15px",
          textDecoration: "underline"
        }}
         onClick={() => setActive(active - 1)}>Previous</Button>
      )}
      {active !== 3 && (
        <Button
          className="Nextbtn"
          onClick={() => {setActive(active + 1); apiClick()}}
          style={{
          float: 'right', 
          color:"#ED7768",
          fontWeight: "900",
          fontSize: "15px",
          textDecoration: "underline"
        }}
        >
          Next
        </Button>
      )}
    </Container>
  )
}

export default ChefForm