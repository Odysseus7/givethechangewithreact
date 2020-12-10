import './App.css';
import index from './pages/index';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path='/' component={index} />
          {/* <Route exact path='/signin' component={SignIn} /> */}
          {/* <Route exact path='/signin' component={SignInAndSignUpPage} /> */}
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
