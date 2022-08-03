import React, { useState } from "react";
import { Button, TextField } from '@mui/material';
import { connect } from "react-redux";
import "./add-owner-list.scss";
import AddressUpdate from "../common/AddressUpdate";
import Checkbox from '@mui/material/Checkbox';
const AddOwnerList = (props) => {
    const [showModal, toggleModal] = useState(false)
    const handleOpen = () => {
        console.log("harsha");
        toggleModal(true)
    }
    const label = { inputProps: { 'aria-label': 'mondaty' } };
    return (
        <div className="add-owner-list">
            <div className='border-card'>
                <div className="owner-list">
                    <div className="owner-details">
                        <p className="index-number">1</p>
                        <div className="order-details-head">
                            <span>Owner Details</span>
                            <span>
                                <Button
                                    variant='contained'
                                    className='emptycart-btn'
                                    children={(
                                        <div className='btn-content'>
                                            Add
                                        </div>
                                    )}
                                />
                                <Button
                                    variant='contained'
                                    className='emptycart-btn'
                                    children={(
                                        <div className='btn-content'>
                                            Remove
                                        </div>
                                    )}
                                />
                            </span>
                        </div>
                        <TextField
                            className="reg-field"
                            sx={{
                                width: 1
                            }}
                            placeholder="Customer Name"
                        // inputProps={{
                        //     value: data.name,
                        //     onChange: e => handleChange('', e.target.value, 'name')
                        // }}
                        />
                        <TextField
                            className="reg-field"
                            sx={{
                                width: 1
                            }}
                            placeholder="Contact Number"
                        />
                        <div className='input-holder'>
                            <div className="title">Agreed Amount</div>
                            <div className="qty-sec">
                                <span className='qty-btn'>-</span>
                                <TextField
                                    className="qutn-feild"
                                    sx={{ m: 1 }}
                                    InputProps={{
                                        value: 3000 || 0,
                                        type: 'number'
                                    }}
                                />
                                <span className='qty-btn'>+</span>
                            </div>

                        </div>
                        <div className="working-days">
                            <div className="title">
                                Working Days
                            </div>
                            <ul>
                                <li>

                                    <Checkbox {...label} name="moday" />
                                    <span className={'label-div'}>Monday</span>
                                </li>
                                <li>

                                    <Checkbox {...label} name="tuesday" />
                                    <span className={'label-div'}>Tuesday</span>
                                </li>
                                <li>

                                    <Checkbox {...label} name="wednesday" />
                                    <span className={'label-div'}>Wednesday</span>
                                </li>
                                <li>

                                    <Checkbox {...label} name="thrusday" />
                                    <span className={'label-div'}>Thursday</span>
                                </li>
                                <li>

                                    <Checkbox {...label} name="friday" />
                                    <span className={'label-div'}>Friday</span>
                                </li>
                                <li>

                                    <Checkbox {...label} name="satuday" />
                                    <span className={'label-div'}>Saturday</span>
                                </li>
                                <li>

                                    <Checkbox {...label} name="Sunday" />
                                    <span className={'label-div'}>Sunday</span>
                                </li>
                            </ul>
                        </div>
                        <div className="meal-numbers">
                            <div className="title">Number of Meals</div>
                            <ul>
                                <li>
                                    <p>
                                        <img src={require('../assets/images/' + "breakfast-icon.PNG").default} alt="not loaded" />
                                    </p>
                                    <p>Breakfast</p>
                                </li>
                                <li>
                                    <p>
                                        <img src={require('../assets/images/' + "breakfast-icon.PNG").default} alt="not loaded" />

                                    </p>
                                    <p>Lunch</p>
                                </li>
                                <li>
                                    <p>
                                        <img src={require('../assets/images/' + "breakfast-icon.PNG").default} alt="not loaded" />

                                    </p>
                                    <p>Dinner</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="order-details-button">
                        <div className='btn-holder'>
                           
                            <Button
                                variant='outlined'
                                className='cancel-btn'
                                children={(
                                    <div className='btn-content'>
                                        Cancel
                                    </div>
                                )}
                            />
                             <Button
                                variant='contained'
                                className=''
                                onClick={handleOpen}
                                children={(
                                    <div className='btn-content'>
                                        Add
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AddressUpdate open={showModal} onClose={() => toggleModal(false)} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ownerlistset: state.foodData.ownerlist
    }
}

export default connect(mapStateToProps)(AddOwnerList);