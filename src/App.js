import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
    </div>
  );
};

export default App;