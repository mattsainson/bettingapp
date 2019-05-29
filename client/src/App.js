import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import './App.css';
import Dashboard from './pages/Dashboard/dashboard';
import Bet from './pages/Betting/Betting';
import Footer from './components/Footer/Footer.js';
import NoMatch from './pages/NoMatch/NoMatch'
import Admin from './pages/Admin/Admin';

class App extends React.Component {
  
  state = {
    games: [],
    bets: [],
    transactions: []
  }
  
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/bet" component={Bet} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/admin" component={Admin} />
            <Route component={NoMatch} />
            </Switch>
        <Footer />
        </div>
      </Router>
    )}
};

export default App;
