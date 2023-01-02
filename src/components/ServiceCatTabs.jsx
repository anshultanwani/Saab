import React, { useState, useEffect } from "react";
import axios from 'axios';
import './services-head.scss'; 
import Button from '@mui/material/Button';

const ServiceCatTabs = (props) => {
    const Tabs = () => {
        const [activeIndex, setActiveIndex] = useState(1);
        const handleClick = (index) => setActiveIndex(index);
        const checkActive = (index, className) => activeIndex === index ? className : "";
        const {
            passToParent, passToParent2
          } = props;
          
        const btnHandleClick = (event) => {
            passToParent2(event);
        }
        return (
            <>
                <div className="tabs">
                    <button
                        className={`tab ${checkActive(1, "active")}`}
                        onClick={() => {handleClick(1); passToParent("BREAKFAST");}}
                    >
                        <h1>BreakFast</h1>
                    </button>
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => {handleClick(2); passToParent("LUNCH");}}
                    >
                        <h1>Lunch</h1>
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => {handleClick(3); passToParent("DINNER");}}
                    >
                        <h1>Dinner</h1>
                    </button>
                </div>
                <div className="panels">
                    <div className={`panel ${checkActive(1, "active")}`}>
                    <label>Start having Breakfast from</label>
                    <p>
                    <Button className="ser-cat-btn" variant="contained" value="8 am onwards" onClick={(e) => btnHandleClick(e.target.value)}>8 am onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="9 am onwards" onClick={(e) => btnHandleClick(e.target.value)}>9 am onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="10 am onwards" onClick={(e) => btnHandleClick(e.target.value)}>10 am onwards </Button>
                    </p>
                    </div>
                    <div className={`panel ${checkActive(2, "active")}`}>
                    <label>Start having Lunch from</label>
                    <p>
                    <Button className="ser-cat-btn" variant="contained" value="10 am onwards" onClick={(e) => btnHandleClick(e.target.value)}>10 am onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="11 am onwards" onClick={(e) => btnHandleClick(e.target.value)}>11 am onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="12 am onwards" onClick={(e) => btnHandleClick(e.target.value)}>12 am onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="1 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>1 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="2 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>2 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="3 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>3 pm onwards </Button>
                    </p>
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                    <label>Start having Dinner from</label>
                    <p>
                    <Button className="ser-cat-btn" variant="contained" value="5 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>5 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="6 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>6 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="7 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>7 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="8 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>8 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="9 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>9 pm onwards </Button>
                    <Button className="ser-cat-btn" variant="contained" value="10 pm onwards" onClick={(e) => btnHandleClick(e.target.value)}>10 pm onwards </Button>
                    </p>
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
export default ServiceCatTabs;