import React from 'react'
import styled from 'styled-components';
import { MultiStepForm, Step } from 'react-multi-form'
import ChefFormStep1 from '../components/ChefFormStep1'
import { Button, TextField, Switch } from '@mui/material';
const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  @media(max-width: 590px) {
    width: 327px;
  }
`

const ChefForm = () => {
    
  const [active, setActive] = React.useState(1)
  return (
    <Container>
      <MultiStepForm activeStep={active}>
        <Step label='step1'>
          {/* <Shipping /> */}
          <ChefFormStep1/>
        </Step>
        <Step label='step2'>
          {/* <Payment /> */}
          <p>Panel1122</p>
        </Step>
        <Step label='step3'>
          {/* <Confirmation /> */}
          <p>Panel112233</p>
        </Step>
      </MultiStepForm>

      {active !== 1 && (
        <Button onClick={() => setActive(active - 1)}>Previous</Button>
      )}
      {active !== 3 && (
        <Button
          className="Nextbtn"
          onClick={() => setActive(active + 1)}
          style={{ float: 'right' }}
        >
          Next
        </Button>
      )}
    </Container>
  )
}

export default ChefForm