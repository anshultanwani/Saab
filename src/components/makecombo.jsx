import React  from "react";
import { connect } from "react-redux";

const MakeCombo = (props) => {
return(
    <h1>Your combo</h1>
)
}

const mapStateToProps = state => {
    return {
        makecombo: state.foodData.makecombo
    }
}

export default connect(mapStateToProps)(MakeCombo);