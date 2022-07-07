import React, { useState } from "react";
import { connect } from 'react-redux';
import { toggleSliderDrawer } from '../actions/index';
import BottomDrawer from './BottomDrawer';
import { TextField, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import './complete-address.scss';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const AddressUpdate = (props) => {
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="popupsec">
          <img src={require('../assets/images/' + "cart.svg").default} />
          <p>Success!</p>
          <p>Address Updated Successfully!</p>
          <Button variant="contained" onClose={props.onClose}>OKAY!</Button>
        </div>
      </Modal>
    </>
  )
};




export default AddressUpdate;