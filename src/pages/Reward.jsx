import React, { useState, useEffect } from "react";
import './reward.scss';
import RewardList from "../components/RewardList";
import RewardHistory from "../components/RewardHistory";
import RewardBudges from "../components/RewardBudges";
import axios from 'axios';

const Reward = (props) => {
    var userId = sessionStorage.getItem("userId");
    const [rewardHistory , getRewardHistory] = useState([])
    const [totalPoints, updateTotalPoints] = useState([])
    useEffect(() => {
    axios.get(window.apiDomain + "/v1/users/find/ratings?userId=" + userId )
                .then((res) => {
                    if (res.status === 200) {
                        let ratingsArr = [];
                        console.log("rating value" + JSON.stringify(res.data.data.ratings[0].rating))
                    
                            
                         getRewardHistory(ratingsArr)
                        updateTotalPoints(res.data.data.totalPoints) 
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            },[])
      


    const Tabs = () => {
        const [activeIndex, setActiveIndex] = useState(3);
        const handleClick = (index) => setActiveIndex(index);
        const checkActive = (index, className) => activeIndex === index ? className : "";
        return (
            <>
                <div className="tabs">
                    {/* <button
                        className={`tab ${checkActive(1, "active")}`}
                        onClick={() => handleClick(1)}
                    >
                        Rewards
                    </button> */}
                    <button
                        className={`tab ${checkActive(2, "active")}`}
                        onClick={() => handleClick(2)}
                    >
                        Badges
                    </button>
                    <button
                        className={`tab ${checkActive(3, "active")}`}
                        onClick={() => handleClick(3)}
                    >
                        Histroy
                    </button>
                </div>
                <div className="panels">
            
                    {/* <div className={`panel ${checkActive(1, "active")}`}>
                        <RewardList />
                    </div> */}
                    <div className={`panel ${checkActive(2, "active")}`}>
                        <RewardBudges />
                    </div>
                    <div className={`panel ${checkActive(3, "active")}`}>
                        <RewardHistory rewardValue={rewardHistory} />
                    </div>
                   
                </div>
            </>
        );
    };
    return (
        <>
            <div className='reward-outer'>
                <div class="border-card">

                    <div className="curret-coins">
                        <p>
                            <img src={require("../assets/images/" + "reward-beg.png").default} />

                        </p>

                        <p>
                        <p>Current Points</p>
                        <span>
                        {totalPoints}
                        </span></p>
                    </div>
                    <div className="reward-bottom">
                        <div className="rewardlist">

                            <Tabs />
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}






export default Reward;