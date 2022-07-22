import React from "react";
import { connect } from 'react-redux';
import './my-preference.scss';
import { Button } from '@mui/material';

const MyPreferences = (props) => {
    const handleAssign = () => {
        console.log("assigned")
    }
    const dishData = () => props.mypreferencesset.map((cur, index) => {
        var comboStr = '';
        cur.dishCombo.map((dish, index) => {
            comboStr = comboStr + dish + (index === cur.dishCombo.length - 1 ? '' : ' + ');
            return dish;
        })

        return (
            <div key={index} className="prefrencesec">
                <h6>{cur.comboName}</h6>
                <p>{comboStr}</p>
                <Button
                    variant="contained"
                    className="preferences-btn"
                    onClick={() => handleAssign(cur.category)}
                >
                    Re-assign
                </Button>
            </div>
        );
    }
    )
    return (
        <div className="homepage  preferences">
            <div className="title-sec">
                <div className="title">My Preferences</div>
                <div className="title-sec-right">
                    <a href="/my-prefrences">VIEW ALL</a></div>
            </div>

            <div className="myPreferences-sec">
                {dishData()}
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