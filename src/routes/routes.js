import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </BrowserRouter>
    )

}

export default Routes;