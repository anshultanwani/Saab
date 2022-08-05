import { Tab, Tabs } from "@mui/material";
import React from "react";
import { connect } from 'react-redux';
import './stockRefillHead.scss';


const PaymentHead = (props) => {
    const {
        count,
        curTab
    } = props;


    const getSection = () => {
        let arr = [(
            <Tab className='single-tab cart' id={'cart'} key={'c'} label={(
                <div className={"cart-sec " + (curTab === 0 ? 'selected' : '')}>
                    <div className="circle">
                        <p><img src={require('../assets/images/' + "history-icon.png").default} alt="not loaded" /></p>
                        <p>{'History'}</p>
                    </div>
                </div>
            )} />
        )];
        arr.push(
            Object.keys(props.ownerPayment).map((item, index) => {
                return (
                    <Tab className="single-tab" id={item} key={index} label={
                        <>
                            <div key={index} className="stockcat-sec">
                                <img src={require('../assets/' + props.ownerPayment[item].image).default} alt="not loaded" />
                               
                            </div>
                            <h6 className="head-title">{props.ownerPayment[item].name}</h6>
                        </>
                    }
                    />
                )
            })
        )
        return (
            <Tabs
                value={curTab}
                onChange={(e, newVal) => {
                    props.onTabChange(e.currentTarget.id);
                    console.log("harsha");
                }}
                variant="scrollable"
                className="tabs-sec"
                aria-label="icon tabs example">
                {arr}
            </Tabs>
        );
    }

    return (
        <div className="stockcat-sec-outer">
            <div className="tab-holder">
                {getSection()}
                {console.log(getSection())}
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        ownerPayment: state.paymentData.ownerPayment
    }
}

export default connect(mapStateToProps)(PaymentHead);