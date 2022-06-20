import React from "react";
import { connect } from 'react-redux';

const StockRefillHead = (props) => {
    return(
        // <div className="stockrefillhead">
        //     <h1>harsha</h1>
        // </div>
         <div className="manageveggies-sec">
         {
         props.StockRefillHeadset.map((item , index)=> {
                 return (
                 <div key={index} class="manageveggiessec">
                 <img src={require('../assets/'+item.vegImage).default}/>
                 <h6>{item.vegName}</h6>
                 </div>
                 )
         })}
         </div>
     );
    
}

const mapStateToProps = state => {
    return {
        StockRefillHeadset: state.foodData.manageveggies
    }
}

export default connect(mapStateToProps)(StockRefillHead);