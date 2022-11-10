import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const RewardHistory = (props) => {
    const {
        rewardValue
    } = props;

   
    return (
        <>
            <div className='list-history'>
                <ul>
                   <li>
                   {
                    rewardValue
                                        //    rewardValue.map(item =>{
                                        //         return (
                                        //             <>
                                                   
                                        //             {item}
                                        //             </>
                                        //         )
                                        //     })
                                        }
                   </li>

                    <li>
                        <div className="left">
                            <p className='title'>Punctuality</p>
                            <p>Data: 20/May/22</p>
                        </div>
                        <div className='right'>
                            <span>+ 20</span>
                            <span><img src={require('../assets/images/'+ "coin-PhotoRoom.png").default} alt="not loaded" /></span>

                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <p className='title'>Special Dish</p>
                            <p>Data: 20/May/22</p>
                        </div>
                        <div className='right'>
                        <span>+ 10</span>
                            <span><img src={require('../assets/images/'+ "coin-PhotoRoom.png").default} alt="not loaded" /></span>
   
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <p className='title'>Meal</p>
                            <p>Data: 20/May/22</p>
                        </div>
                        <div className='right'>
                        <span>+ 20</span>
                            <span><img src={require('../assets/images/'+ "coin-PhotoRoom.png").default} alt="not loaded" /></span>

                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}


export default RewardHistory;