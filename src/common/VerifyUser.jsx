import React from "react";
import Button from '@mui/material/Button';
import './complete-address.scss';
import Modal from '@mui/material/Modal';
import { getCookie } from "../utils";
import axios from "axios";

const VerifyUser = (props) => {
    let userId = getCookie('userId');
    let customerPhone = getCookie('customerPhone');
    console.log(userId);
    const handleVerification = () =>{
            console.log(
              {
                    userId,
                    customerPhone: customerPhone,
                    status: "VERIFIED"
                }
            )
            axios({
                method: 'put',
                url: window.apiDomain + '/v1/users/update/status',
                data: {
                    userId,
                    customerPhone: customerPhone,
                    status: "VERIFIED"
                
                }
            })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.data)
                }
            }).catch(err => {
                console.log(err)
                console.log("Please add customer");
            })
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
          <img src={require('../assets/images/' + "cart.svg").default} alt="not loaded" />
          <p className="verifyuserheading">Customer verification is pending.</p>
          {/* <p>Ask customer to verify</p> */}
          <Button variant="contained" onClick={handleVerification} onClose={props.onClose}>Ask customer to verify</Button>
        </div>
      </Modal>
    </>
  )
};




export default VerifyUser;