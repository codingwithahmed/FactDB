import './App.css';
import Business from './components/Business/Business';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact/Contact'
import Submits from './components/Contact/Submit/Submit'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Ledger from "./components/Ledger"
import Dispute from './components/Contact/Dispute/Dispute';
import Help from './components/Contact/Help/Help';
import Legal from './components/Legal/Legal';
import Search from './components/Search/índex';
import LoginScreen from './components/Login/Login'
import RegisterScreen from './components/Login/Register'
import ForgotPasswordScreen from './components/Login/Forgotpassword'
import ResetPasswordScreen from './components/Login/ResetPasswordScreen'
import PrivateScreen from './components/Login/PrivateScreen'
import PrivateRoute from './components/routing/PrivateRoutes'
import { createBrowserHistory } from 'history';
import Admin from './components/Admin/Admin';

function App() {


  return (
    <Router>
    <div className="App">

     

<Switch >
<Route path="/admin">
<Admin />
</Route>
  
  <Route path="/business">
  <Header />
   <Business />
   <Footer />
  </Route>
  <Route path="/contact" >
  <Header />
  <Contact />
  <Footer />
  </Route>
  <Route path="/ledger">
  <Header />
    <Ledger />
    <Footer />
  </Route>
  <Route path="/submit">
  <Header />
    <Submits />
    <Footer />
  </Route>
  <Route path="/dispute">
  <Header />
    <Dispute />
    <Footer />
  </Route>

  <Route path="/help">
  <Header />
    <Help />
    <Footer />
  </Route>
  <Route path="/trysearch">
  <Header />
    <Search />
    <Footer />
  </Route>
  <Route path="/legal">
  <Header />
   <Legal />
   <Footer />
  </Route>


<Route exact path='/login' component={LoginScreen} />
<Route exact path='/register' component={RegisterScreen} />
<Route exact path='/resetpassword/:resetToken' component={ResetPasswordScreen} />
<Route exact path='/forgotpassword' component={ForgotPasswordScreen} />
<PrivateRoute path='/dashboard' component={PrivateScreen} />

  <Route path="/">
  <Header />
    <Home />
    <Footer />
  </Route>
  
</Switch>


    </div>
    </Router>
  );
}

export default App;
