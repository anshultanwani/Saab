import React from 'react';

const RewardList = (props) =>{
    return (
        <>
        <div className='rewardlist-sec'>
            <ul>
                <li>
                <p><img src={require('../assets/images/' + "refer-new.png").default} alt="not loaded" /></p>
                <p>Refer your friend</p>
                </li>

                <li>
                <p><img src={require('../assets/images/' + "gro.jpg").default} alt="not loaded" /></p>
   
                <p>Grocery 30 percent discount</p>
                </li>
            </ul>
        </div>
        </>
    )
}


export default RewardList;