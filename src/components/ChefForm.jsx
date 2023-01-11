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
  const [noOfGasBurner, setNoOfGasBurner] = useState(1);
  let summaryObjectStep1 = new Object();
  let summaryObjectStep2 = new Object();

  
  const summaryStep1Callback = (value) => {
    summaryObjectStep1 = Object.assign(summaryObjectStep1, value);
  }

  const summaryStep2Callback = (value) => {
    summaryObjectStep2 = Object.assign(summaryObjectStep2, value);
  }

  const ChildCallback = (value) =>  {
    setCatState(value);
  }
    const CuisineCallback = (value) =>  {
      setCuisineArr(value)
    }

    var apiClick = () =>{
      console.log("butn click")
    }

    const handleGasBurnerCallBack = (value) => 
  {
    setNoOfGasBurner(value);
  }

    const apiCallBack = (apiValue) =>{
      apiClick = apiValue;
    }

   
  return (
    <Container className='form-step'>
      <MultiStepForm activeStep={active} className="step-from">
        <Step label='step1'>
          <ChefFormStep1 passToParent={ChildCallback} passToParentCuisine={CuisineCallback} passToParentStep1Callback={summaryStep1Callback} passToParentBurnerCallback={handleGasBurnerCallBack}/>
        </Step>
        <Step label='step2'>
          <ChefFormStep2 catState={catState} cuisineArr={cuisineArr} noOfGasBurner={noOfGasBurner} passToParentApiCallBack={apiCallBack} passToParentStep2Callback={summaryStep2Callback}/>
        </Step>
        <Step label='step3'>
         <ChefFormSummary summaryStep1={summaryObjectStep1} summaryStep2={summaryObjectStep2}/>
        </Step>
      </MultiStepForm>

      {active !== 1 && (
        <Button  
        style={{
          float: 'left'
        }}
        className="prebtn"
         onClick={() => setActive(active - 1)}>Previous</Button>
      )}
      {active !== 3 && (
        <Button
          className="Nextbtn"
          onClick={() => {setActive(active + 1); apiClick(1)}}
          style={{
          float: 'right'
        }}
        >
          Next
        </Button>
      )}
    </Container>
  )
}

export default ChefForm