import React, {Component, useState, useEffect} from 'react';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from './pages/index/index';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';

import { auth } from './firebase/firebase.utils';
import './App.css';


function App() {
  const [state, setState] = useState({currentUser: null});

  let unsubscribeFromAuth = null;

  useEffect(() => {
    /* code that will be ran on component mount. if the 2nd arg is an empty array, it will
    behave exactly like componentDidMount. If you pass a value, useEffect will execute everytime
    those values change.*/

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setState({ currentUser: user});
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };

  }, []);

  return (
    <div className="App">
    <Router>
      <Switch> 
          <Route exact path='/' render={props => state.currentUser ? <Dashboard {...props} currentUser={state.currentUser} /> : Index} />
          <Route exact path='/signup' component={Register} />
          <Route path='/dashboard' render={props => <Dashboard {...props} currentUser={state.currentUser} />}/>
      </Switch>
    </Router>

    </div>
  );
}
export default App;
