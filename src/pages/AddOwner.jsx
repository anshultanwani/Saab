import { toBeRequired } from "@testing-library/jest-dom";
import React from "react";
import { connect } from "react-redux";
import { Button } from '@mui/material';
import "./add-owner.scss";
const AddOwner = (props) => {
    return (
        <div className="add-owner">
            <div className='border-card'>
                <div className="owner-list">
                    {
                        props.ownerlistset.map((item, index) => {
                            return (
                                <div key={index} className="owner-list-index">

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
