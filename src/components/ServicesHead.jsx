import React, { useState, useEffect } from "react";
import axios from 'axios';
import './services-head.scss'; 
import Chefform from "../components/ChefForm";
const ServicesHead = (props) => {
    const Tabs = () => {
        const [activeIndex, setActiveIndex] = useState(1);
        const handleClick = (index) => setActiveIndex(index);
        const checkActive = (index, className) => activeIndex === index ? className : "";
        return (
            <>
                <div className="tabs cat_tab">
                    <button
                        className={`tab ${checkActive(1, "active")}`}
                        onClick={() => handleClick(1)}
                    >
                        <img src={require('../assets/images/' + "chef-banner4.jpg").default} alt="not loaded" />
                        <h1>Chef</h1>
                    </button>
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => handleClick(2)}
                        disabled
                    >
                        <img src={require('../assets/images/' + "waiter.jpg").default} alt="not loaded" />
                        <h1>Bar Tender</h1>
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => handleClick(3)}
                        disabled
                    >
                        <img src={require('../assets/images/' + "waiter-new1.png").default} alt="not loaded" />
                        <h1>Waiter</h1>
                    </button>
                    <button
                        className={`tab ${checkActive(4, "active")}`}
                        onClick={() => handleClick(4)}
                        disabled
                    >
                        <img src={require('../assets/images/' + "cleaning2.jpg").default} alt="not loaded" />
                        <h1>Cleaner</h1>
                    </button>
                    </div>
                <div className="panels cat-tab">
                    <div className={`panel ${checkActive(1, "active")}`}>
                      <Chefform/>
                    </div>
                    <div className={`panel ${checkActive(2, "active")}`}>
                        <p>second panel 2</p>
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                        <p>second panel 3</p>
                    </div>
                    <div className={`panel ${checkActive(4, "active")}`}>
                        <p>second panel 4</p>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
        <div className="service-bottom">
                    <Tabs />
                </div>
        </>


    )
}
export default ServicesHead;