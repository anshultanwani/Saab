import React from 'react'
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
  
  const [active, setActive] = React.useState(1);
  const [catState, setCatState] = React.useState('BREAKFAST');

  const ChildCallback = (value) =>  {
    setCatState(value);
}

  return (
    <Container className='form-step'>
      <MultiStepForm activeStep={active} className="step-from">
        <Step label='step1'>
          <ChefFormStep1 passToParent={ChildCallback}/>
        </Step>
        <Step label='step2'>
          <ChefFormStep2 catState={catState}/>
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
          onClick={() => setActive(active + 1)}
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