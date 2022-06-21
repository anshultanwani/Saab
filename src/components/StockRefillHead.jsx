import React from "react";
import { connect } from 'react-redux';
import './stockRefillHead.scss';


const StockRefillHead = (props) => {
    return(
         <div className="stockcat-sec-outer">
         {
         Object.keys(props.stockRefillHeadset).map((item , index)=> {
                 return (
                 <div key={index} class="stockcat-sec">
                 <img src={require('../assets/'+ props.stockRefillHeadset[item].displayImage).default}/>
                 <h6>{props.stockRefillHeadset[item].displayName}</h6>
                 </div>
                 )
         })}
         </div>
     );
    
}

const mapStateToProps = state => {
    return {
        stockRefillHeadset: state.cart.stockCat
    }
}

export default connect(mapStateToProps)(StockRefillHead);