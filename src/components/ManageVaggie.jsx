import React from "react";
import { connect } from 'react-redux';
import './manageveggies.scss';

const ManageVaggie = (props) => {
        return (
        <div className="manageveggies">
        <div className="title">Shop by Categories</div>
        <div className="manageveggies-sec">
            {
            props.manageveggiesset.map((item , index)=> {
                    return (
                    <div key={index} className="manageveggiessec">
                    <img src={require('../assets/'+item.vegImage).default} alt="not loaded" />
                    <h6>{item.vegName}</h6>
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