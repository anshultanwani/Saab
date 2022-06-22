import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import './stockRefillHead.scss';


const StockRefillHead = (props) => {
    const [curSection,updateSection] = useState(0);

    const getSection = () => {
        let arr = [(
            <Tab className='an' label={(
                <div className={"cart-sec " }>
        
                </div>
            )} />
        )];
        arr.push(
            Object.keys(props.stockRefillHeadset).map((item , index)=> {
                return (
                    <Tab classes="abc" label={
                        <>
                        <div key={index} class="stockcat-sec">
                            <img src={require('../assets/'+ props.stockRefillHeadset[item].displayImage).default} />
                        </div>
                        <h6 className="head-title">{props.stockRefillHeadset[item].displayName}</h6>
                        </>
                    }
                    />
                    )
                })
                )
        return (
            <Tabs 
                value={curSection}
                onChange={(e,newVal) => updateSection(newVal)}
                variant="scrollable"
                className="abc"
                classes={'abc'}
                aria-label="icon tabs example">
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