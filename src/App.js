import React, { useEffect } from 'react';
import './App.css';
import { setInitialData } from './actions/index';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage';
import ComboPage from './pages/ComboPage';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import data from './assets/data/data.json';
import LoginHome from './pages/LoginHome';
import RegisterUser from './pages/RegisterUser';
import SliderDrawer from './common/SliderDrawers';


function App(props) {

  useEffect(() => {
    if(!props.suggestions.length && window.location.pathname == '/'){
      props.setInitialData(data);
    }
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/login' component={LoginHome}></Route>
          <Route exact path='/signup' component={RegisterUser}></Route>
          <Route exact path='/editcombo' component={ComboPage}></Route>
        </Switch>
        <Footer/>
        <SliderDrawer />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    suggestions: state.foodData.suggestions,
    showFeedback: state.session.showFeedback
  }
};

export default connect(mapStateToProps,{setInitialData})(App);
