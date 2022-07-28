import React , {useState} from "react";
import { Button, TextField } from '@mui/material';
import { connect } from "react-redux";
import "./add-owner-list.scss";
import AddressUpdate from "../common/AddressUpdate";
const AddOwnerList = (props) => {
    const[showModal, toggleModal] = useState(false)
    const handleOpen = () => {
        console.log("harsha");
        toggleModal(true)
    }
    return (
        <div className="add-owner">
            <div className='border-card'>
                <div className="owner-list">
                <div className="owner-details">
                <p className="index-number">1</p>
                <TextField
                    className="reg-field"
                    sx={{
                        width: 1
                    }}
                    placeholder="Enter Phone Number"
                />
                 {/* <TextField
                    className="reg-field"
                    sx={{
                        width: 1
                    }}
                    placeholder="Monthly Charges"
                /> */}
                </div>
                <div className="owner-details">
                <p className="index-number">2</p>
                <TextField
                    className="reg-field"
                    sx={{
                        width: 1
                    }}
                    placeholder="Enter Phone Number"
                />
                {/* <TextField
                    className="reg-field"
                    sx={{
                        width: 1
                    }}
                    placeholder="Monthly Charges"
                /> */}
                </div>   
                </div>
                <div className="add-cusotmer">
                    <Button
                        variant='contained'
                        className='emptycart-btn'
                        // onClick={handleSubmit}
                        children={(
                            <div className='btn-content'>
                                Cancel
                            </div>
                        )}
                    />
                     <Button
                        variant='contained'
                        className='emptycart-btn'
                        onClick={handleOpen}
                        children={(
                            <div className='btn-content'>
                                Add
                            </div>
                        )}
                    />
                   

                </div>
            </div>
            <AddressUpdate open={showModal} onClose={()=>toggleModal(false)}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ownerlistset: state.foodData.ownerlist
    }
}

export default connect(mapStateToProps)(AddOwnerList);