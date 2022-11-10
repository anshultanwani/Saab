import React from "react";
import Button from '@mui/material/Button';
import './complete-address.scss';
import Modal from '@mui/material/Modal';
import { getCookie } from '../utils';
import { alignProperty } from "@mui/material/styles/cssUtils";
import { connect } from 'react-redux';
import { updateCart, toggleSliderDrawer ,updateOrderStatus } from '../actions';

const RequestSend = (props) => {
  const handleReq = () =>{
     setTimeout(props.updateCart([]), 50000);
  }
  let customerName = getCookie('customerName');
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
          <p>Request Sent Succeefully to Customer</p>
          <p>Request Sent to {customerName}</p>
          <Button variant="contained" onClose={props.onClose} onClick={handleReq}>OKAY!</Button>
        </div>
      </Modal>
    </>
  )
};


const mapStateToProps = state => {
  return {
      cartList: state.cart.cartList,
      session: state.session
  }
}


export default connect(mapStateToProps , { updateCart, toggleSliderDrawer })(RequestSend);