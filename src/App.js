import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from './pages/index/index';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/signup' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
