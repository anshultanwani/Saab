import React from 'react';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCart, toggleSliderDrawer ,updateOrderStatus } from '../actions';
const RewardBudges = (props) => {

    const benefitVideo = () => {
        console.log("video click")
        toggleSliderDrawer({
            selectaddress: true,
            videoPopup: true
        })
    }
    return (
        <>
            <div className='reward-badges-outer'>
                <ul className='reward-badges inner'>
                    <li>
                        <div className='left'>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>

                        </div>
                        <div className='right'>
                            <p className='reward-bedges-pos'>Chef+</p>
                            <p>
                            <Button
                            variant='text'
                            className='benefit-btn'
                            onClick={benefitVideo}
                            children={(
                                <div className='btn-content'>
                                  Benefits Video
                                </div>
                            )}
                        />  </p>
                        </div>
                      
                    </li>
                    <li>
                        <div className='left'>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>

                        </div>
                        <div className='right'>
                            <p className='reward-bedges-pos'>Chef</p>
                            <p>
                            <Button
                            variant='text'
                            className='benefit-btn'
                            onClick={benefitVideo}
                            children={(
                                <div className='btn-content'>
                                  Benefits Video
                                </div>
                            )}
                        /> 
                            </p>
                        </div>
                      
                    </li>
                    <li>
                        <div className='left'>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>

                        </div>
                        <div className='right'>
                            <p className='reward-bedges-pos'>RCook+</p>
                            <p>
                            <Button
                            variant='text'
                            className='benefit-btn'
                            onClick={benefitVideo}
                            children={(
                                <div className='btn-content'>
                                  Benefits Video
                                </div>
                            )}
                        /> 
                            </p>
                        </div>
                       
                    </li>
                    <li>
                        <div className='left'>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>

                        </div>
                        <div className='right'>
                            <p className='reward-bedges-pos'>COOk+</p>
                            <p>
                            <Button
                            variant='text'
                            className='benefit-btn'
                            onClick={benefitVideo}
                            children={(
                                <div className='btn-content'>
                                  Benefits Video
                                </div>
                            )}
                        /> 
                            </p>
                        </div>
                      
                    </li>
                    <li>
                        <div className='left'>
                            <span><img src={require('../assets/images/' + "coin-PhotoRoom.png").default} alt="not loaded" /></span>
                        </div>
                        <div className='right'>
                            <p className='reward-bedges-pos'>COOk</p>
                            <p>
                            <Button
                            variant='text'
                            className='benefit-btn'
                            onClick={benefitVideo}
                            children={(
                                <div className='btn-content'>
                                  Benefits Video
                                </div>
                            )}
                        /> 
                            </p>
                        </div>
                        
                    </li>
                </ul>

            </div>
        </>
    )
}


//export default RewardBudges;
export default (withRouter(RewardBudges));
