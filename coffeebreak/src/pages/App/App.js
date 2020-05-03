import React, {Component} from 'react';
// import logo from '../../logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import MainHeader from '../../components/MainHeader/MainHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import GroupView from '../../components/GroupView/GroupView';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';

class App extends Component {
  state = {
    user: userService.getUser()
}

handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
}

handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
}

  render() {
  return (
    <div>
      <h1>DashBoard</h1>
      <Menu
        user={this.state.user}
        handleLogout={this.handleLogout}
      />
      <MainHeader></MainHeader>
      <Dashboard></Dashboard>
      <GroupView></GroupView>
      <Switch>
            
        <Route exact path="/" render={() => (
            <h1>Hello.</h1>
        )} />
        <Route exact path="/signup" render={({ history }) => (
            <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
        )} />
        <Route exact path="/login" render={({ history }) => (
            <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
        )} />
        
        </Switch>
    </div>
  
   
  );
        }
}

export default App;
