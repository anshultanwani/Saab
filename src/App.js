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
	Switch
} from 'react-router-dom';
import data from './assets/data/data.json';
import SliderDrawer from './common/SliderDrawers';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const LoginHome = React.lazy(() => import('./pages/LoginHome'));
const ComboPage = React.lazy(() => import('./pages/ComboPage'));
const RegisterUser = React.lazy(() => import('./pages/RegisterUser'));
const StockRefill = React.lazy(() => import('./pages/StockRefill'));

function App(props) {

  useEffect(() => {
    if(!props.suggestions.length && window.location.pathname == '/'){
      props.setInitialData(data);
    }
  },[])

  const ignoreFooter = ['/login','/signup','/stock-refill'];

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <HomePage/>}></Route>
            <Route exact path='/login' component={LoginHome}></Route>
            <Route exact path='/signup' component={RegisterUser}></Route>
            <Route exact path='/editcombo' component={ComboPage}></Route>
            <Route exact path='/stock-refill' component={StockRefill}></Route>
          </Switch>
          <Footer ignoreFooter={ignoreFooter} />
          <SliderDrawer />
        </div>
      </Router>
    </React.Suspense>
  );
}

const mapStateToProps = state => {
  return {
    suggestions: state.foodData.suggestions,
    showFeedback: state.session.showFeedback
  }
};

export default connect(mapStateToProps,{setInitialData})(App);
