import React from "react";
import Button from '@mui/material/Button';
import './complete-address.scss';
import Modal from '@mui/material/Modal';
import { useHistory } from "react-router-dom";
import { toggleSliderDrawer } from '../actions/index';
const AddressUpdate = (props) => {
  const history = useHistory();
  const handleClose = () => {
    console.log("clied")
    history.push('/stock-refill?userType=' + "OWNER")
    let close = props.onClose;
    toggleSliderDrawer({
      completeAddress: false
    })
    console.log(close())

  }
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="popupsec">
          <img src={require('../assets/images/' + "success.png").default} alt="not loaded" />
          <p>Success!</p>
          <p>Address Updated Successfully!</p>
          <Button
            variant="contained"
            onClick={handleClose}
            // onClick={props.onClose}
            onClose={props.onClose}
          >OKAY!</Button>
        </div>
      </Modal>
    </>
  )
};




export default AddressUpdate;