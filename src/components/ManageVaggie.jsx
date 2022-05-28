import React from "react";
import { connect } from 'react-redux';
import './manageveggies.scss';
import { Button } from '@mui/material';

const ManageVaggie = (props) => {
        return (
        <div className="manageveggies">
        <div className="title">Manage Your Veggies Stock</div>
        <div className="manageveggies-sec">
            {
            props.manageveggiesset.map((item , index)=> {
                    return (
                    <div key={index} class="manageveggiessec">
                    <img src={require('../assets/'+item.vegImage).default}/>
                    <h6>{item.vegName}</h6>
                    <p>{item.vegQuantity}</p>
                    </div>
                    )
            })}
            </div>
          </div>
        );
      }


const mapStateToProps = state => {
        return {
            manageveggiesset: state.foodData.manageveggies
        }
}
export default connect(mapStateToProps)(ManageVaggie);