import React, { useEffect } from 'react';
import './App.css';
import { setInitialData } from './actions/index';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage';
import ComboPage from './pages/ComboPage';
import Header from './components/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import data from './assets/data/data.json';


function App(props) {

  useEffect(() => {
    if(!props.suggestions.length && window.location.pathname == '/'){
      props.setInitialData(data);
    }
  },[window.location.pathname])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/make-your-combo' component={ComboPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    suggestions: state.foodData.suggestions
  }
};

export default connect(mapStateToProps,{setInitialData})(App);
