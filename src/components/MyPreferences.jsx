import React from "react";
import { connect } from 'react-redux';
import './my-preference.scss';
import { Button } from '@mui/material';

const MyPreferences = (props) => {
        return (
        <div class="preferences">
        <div class="title">My Preferences</div>
        <div className="myPreferences-sec">
            {
            props.mypreferencesset.map((item , index)=> {
                    return (
                    <div key={index} class="prefrencesec">
                    <h6>{item.comboName}</h6>
                    <p>{item.comboDishName}</p>
                    <Button 
                    variant="contained"
                    className="preferences-btn"
                >
                    Assign
                </Button>
                    </div>
                    )
            })}
            </div>
          </div>
        );
      }


const mapStateToProps = state => {
        return {
            mypreferencesset: state.foodData.mypreferences
        }
}
export default connect(mapStateToProps)(MyPreferences);