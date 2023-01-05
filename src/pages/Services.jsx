import React, { useState, useEffect } from "react";
import axios from 'axios';
import './services.scss';
import ServicesHead from "../components/ServicesHead";

const Services = (props) => {
    return (
        <>
            <div className='service-outer'>
                <div class="border-card">
                  
                    <div className="services-buttom">
                            <ServicesHead />
                    </div>

                </div>

            </div>
        </>


    )
}






export default Services;