import React, { useEffect } from 'react';
import './App.css';
import { setInitialData } from './actions/index';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import data from './assets/data/data.json';
import SliderDrawer from './common/SliderDrawers';
import { getCookie } from './utils';
import axios from 'axios';
import { setSession } from './actions/index';
import Loader from './components/Loader';
import AddEditCombo from './pages/AddEditCombo';
import History from './pages/History';
import MyPreferencesDetails from './pages/MyPreferencesDetails';
import AddOwner from './pages/SelectOwner';
import AddOwnerList from './pages/AddOwnerList';
import TodayDish from './pages/TodayDish';
import Payment from './pages/Payment';
import GroceryOrderHistory from './pages/GroceryOrderHistory';
import Reward from './pages/Reward';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const LoginHome = React.lazy(() => import('./pages/LoginHome'));
const ComboPage = React.lazy(() => import('./pages/ComboPage'));
const RegisterUser = React.lazy(() => import('./pages/RegisterUser'));
const StockRefill = React.lazy(() => import('./pages/StockRefill'));
//const AddEditCombo = React.lazy(() => import('./pages/AddEditCombo'));
const SplashScreen = React.lazy(() => import('./pages/SplashScreen'));
const AddressWithMap = React.lazy(() => import('./pages/AddressWithMap'));
function App(props) {
  window.apiDomain = 'http://44.205.231.204';

  const getPath = () => {
    if(!getCookie('isLoggedIn') && window.location.pathname !== "/login") {
      console.log("userlogout")
      window.location.replace('/login')
    }else if(!props.session._id && getCookie("userId")){
        let userId = getCookie('userId');
        axios.get(window.apiDomain+'/v1/users/'+userId).then(res => {
          if(window.location.pathname === '/') {
            window.location.replace('/home')
          }
            props.setSession({
                ...res.data.data
            })
        })
    }
  }


  useEffect(() => {
    if(window.location.pathname === '/') {
      setTimeout(() => {
        getPath()
      }, 6000);
    }else {
      getPath();
    }
    
    if(!props.suggestions.length){
      props.setInitialData(data);
    }
  })

  const ignoreFooter = ['/login','/signup','/','/add-address'   ];
  const customHeader = ['/stock-refill','/add-address' , '/addedit-combo' , 'my-prefrences' , "/history"
   , "/select-owner" , "add-owner-list" , '/todays-dish' , "/payment"];
  
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <div className="App">
          <Header customHeader={customHeader} />
          <Switch>
            <Route exact path='/' render={() => <SplashScreen />}></Route>
            <Route exact path='/home' render={() => <HomePage/>}></Route>
            <Route exact path='/login' component={LoginHome}></Route>
            <Route exact path='/signup' component={RegisterUser}></Route>
            <Route exact path='/editcombo' component={ComboPage}></Route>
            <Route exact path='/stock-refill' component={StockRefill}></Route>
            <Route exact path='/addedit-combo' component={AddEditCombo}></Route>
            <Route exact path='/add-address' component={AddressWithMap}></Route>
            <Route exact path='/my-prefrences' component={MyPreferencesDetails}></Route>
            <Route exact path='/history' component={History}></Route>
            <Route exact path='/select-owner' component={AddOwner}></Route>
            <Route exact path='/add-owner-list' component={AddOwnerList}></Route>
            <Route exact path='/todays-dish' component={TodayDish}></Route>
            <Route exact path='/payment' component={Payment}></Route>
            <Route exact path='/my-reward' component={Reward}></Route>
            <Route exact path='/grocery-history' component={GroceryOrderHistory}></Route>
          </Switch>
          <Footer ignoreFooter={ignoreFooter} />
          {/* <Loader/> */}
          <SliderDrawer />
        </div>
      </Router>
    </React.Suspense>
  );
}

const mapStateToProps = state => {
  return {
    suggestions: state.foodData.suggestions,
    showFeedback: state.session.showFeedback,
    session: state.session
  }
};

export default connect(mapStateToProps,{setInitialData,setSession})(App);
