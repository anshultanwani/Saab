import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HomeSlider from '../components/HomeSlider';
import ManageVaggie from '../components/ManageVaggie';
import MostCooked from '../components/MostCooked';
import MyPreferences from '../components/MyPreferences';
import Button from '@mui/material/Button';
import Suggestions from '../components/Suggestions';
import { setSession } from '../actions';
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import { getCookie } from '../utils';
import { toggleSliderDrawer } from '../actions';
import axios from 'axios';
const Main = props => {
    const {
        name,
    } = props.session
    let cookName = getCookie('cookName');
    console.log("cookName in  header" + cookName)
    var userId = sessionStorage.getItem("userId");
    console.log("userid in header====" + userId)
    const [orderStatusNew, updateOrderStatusNew] = useState([]);
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const loadPost = async () => {
        console.log("post function call")
        setLoading(true);
        const res = await axios.get(window.apiDomain + "/v1/orders?userId=" + userId)
            .then((res) => {
                console.log("res data====" + JSON.stringify(res.data.data))
                Object.keys(res.data.data).map((cur) => {
                    sessionStorage.setItem('orderIdValue', res.data.data[cur]._id)
                    console.log("outside if 1" + cur + res.data.data[cur].status)
                    if (res.data.data[cur].status == 'REQUESTED') {
                        console.log("inside if 1" + res.data.data[cur].status)
                        updateOrderStatusNew("REQUESTED")

                    }
                })
            })
    }
    useEffect(() => {
        console.log("inside useeffect fun")
        loadPost();
    }, [])

    if(sessionStorage.getItem('isLoggedIn')) {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function(event) {
          window.history.go(1);
        };
      }

    return (
        <div className='homepage-sec-outer'>
            {console.log("showgorcerybanner====2" + orderStatusNew)}
            {orderStatusNew == 'REQUESTED' && location.pathname === '/home' ?
                <div className='header-bottom'>
                    <div className='grocey-sec'>
                        <div className='left'>
                            <h1>{'Hi ' + name + "!"}</h1>
                            <p>{cookName + '  requested for stock refill'}</p>
                            {/* <Button color="inherit" onClick={handleApproveOrder}> */}
                            <Button color="inherit" onClick={() => props.history.push('/stock-refill?userType=OWNER')}>
                                Approve Order
                            </Button>
                        </div>
                        <div className='right'>
                            <img src={require('../assets/images/groceyrightimg.svg').default} />

                        </div>
                    </div>
                </div>
                : null}
            <div className={'home-page container ' +  (orderStatusNew == 'REQUESTED' ? 'order-arroved' : 'order-req')}>
                <div className="main-content">
                    <HomeSlider />
                    <Suggestions />
                    {/* <MostCooked /> */}
                    {/* <MyPreferences /> */}
                    <ManageVaggie />
                </div>
            </div>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.foodData.suggestions,
        session: state.session
    }
}



export default connect(mapStateToProps, { setSession, toggleSliderDrawer })(withRouter(Main));