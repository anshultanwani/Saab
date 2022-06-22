import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import './stockRefillHead.scss';


const StockRefillHead = (props) => {
    const [curSection,updateSection] = useState(0);

    const getSection = () => {
        let arr = [(
            <Tab label={(
                <div className={"cart-sec " }>
        
                </div>
            )} />
        )];
        arr.push(
            Object.keys(props.stockRefillHeadset).map((item , index)=> {
                return (
                    <Tab label={
                        <>
                        <div key={index} class="stockcat-sec">
                        <img src={require('../assets/'+ props.stockRefillHeadset[item].displayImage).default} />
                        <h6>{props.stockRefillHeadset[item].displayName}</h6>
                        </div>
                        </>
                    }
                    />
                    )
                })
                )
        return (
            <Tabs value={curSection} onChange={(e,newVal) => updateSection(newVal)} aria-label="icon tabs example">
                {arr}
            </Tabs>
        );
    }

    return(
         <div className="stockcat-sec-outer">
             <div className="tab-holder">
                {getSection()}
             </div>
         </div>
     );
    
}

const mapStateToProps = state => {
    return {
        stockRefillHeadset: state.cart.stockCat
    }
}

export default connect(mapStateToProps)(StockRefillHead);