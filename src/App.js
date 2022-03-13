import React, { useEffect } from 'react';
import './App.css';
import { setInitialData } from './actions/index';
import { connect } from 'react-redux';
import Main from './pages/Main';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import data from './assets/data/data.json';


function App(props) {

  useEffect(() => {
    if(!props.countryData.length && window.location.pathname == '/'){
      props.setInitialData(data.countries);
    }
  },[window.location.pathname])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main}></Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    countryData: state.countryData.countryData
  }
};

export default connect(mapStateToProps,{setInitialData})(App);
