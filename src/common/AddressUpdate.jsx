import React from "react";
import Button from '@mui/material/Button';
import './complete-address.scss';
import Modal from '@mui/material/Modal';


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
          <img src={require('../assets/images/' + "cart.svg").default} alt="not loaded" />
          <p>Success!</p>
          <p>Address Updated Successfully!</p>
          <Button variant="contained" onClose={props.onClose}>OKAY!</Button>
        </div>
      </Modal>
    </>
  )
};




export default AddressUpdate;