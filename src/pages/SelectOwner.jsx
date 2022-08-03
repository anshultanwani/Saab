import { toBeRequired } from "@testing-library/jest-dom";
import React from "react";
import { connect } from "react-redux";
import { Button } from '@mui/material';
import "./select-owner.scss";
import { useHistory, useLocation } from 'react-router-dom';
const AddOwner = (props) => {
    const history = useHistory();
    const handleSubmit = () => {
        history.replace('/add-owner-list');
    }

    const handleAssignedDish = (customername) => {
        console.log(customername);
        // history.replace('/todays-dish/'+customername);
        history.replace('/todays-dish');
    }

    return (
        <div className="select-owner">
            <div className='border-card'>
                <div className="owner-list">
                    {
                        props.ownerlistset.map((item, index) => {
                            return (

                                <div key={index} className="owner-list-index" onClick={()=> handleAssignedDish(item.name)}>

                                    <div className="left">
                                        <img src={require("../assets/" + item.image).default} />
                                    </div>
                                    <div className="right">
                                        <p>{item.name}</p>
                                        <p>
                                            <span>
                                                <img src={require("../assets/images/" + "location.png").default} />
                                                {/* <img src={require('../assets/'+item.vegImage).default} alt="not loaded" /> */}

                                            </span>
                                            <span>
                                                {item.address}
                                            </span>
                                        </p>
                                    </div>

                                </div>
                            )
                        })}
                </div>
                <div className="add-cusotmer">
                    <Button
                        variant='contained'
                        className='emptycart-btn'
                        onClick={handleSubmit}
                        children={(
                            <div className='btn-content'>
                                Add Customer
                            </div>
                        )}
                    />
                 
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ownerlistset: state.foodData.ownerlist
    }
}
export default connect(mapStateToProps)(AddOwner);
