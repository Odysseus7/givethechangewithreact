import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Index from './pages/index/index';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

function App() {
  const [state, setState] = useState({currentUser: null});

  let unsubscribeFromAuth = null;

  useEffect(() => {
    /* code that will be ran on component mount. if the 2nd arg is an empty array, it will
    behave exactly like componentDidMount. If you pass a value, useEffect will execute everytime
    those values change.*/

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setState({currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }});
        });
      }

      setState({currentUser: null}) // if there is no userauth, there is no current user.
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };

  }, []);

  return (
    <div className="App">
    <Router>
      <Switch basename={process.env.PUBLIC_URL}> 
          <Route path={`${process.env.PUBLIC_URL}/`} render={props => state.currentUser ? <Dashboard {...props} currentUser={state.currentUser} /> : <Index />} />
          <Route path={`${process.env.PUBLIC_URL}/signup`} component={Register} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} render={props => state.currentUser ? <Dashboard {...props} currentUser={state.currentUser} /> : <Redirect to="/" />}/>
      </Switch>
    </Router>

    </div>
  );
}
export default App;
