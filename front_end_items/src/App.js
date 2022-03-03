
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // new imports
import Navbar from './components/Navbar'; // import navbar
import Login from './pages/auth/Login'; //import  Login
import Signup from './pages/auth/Signup'; // import Signup
import Logout from './pages/auth/Logout'; //import  Login
import Dashboard from './pages/DashBoard'; //import  Login


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/Dashboard' component={Dashboard} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;