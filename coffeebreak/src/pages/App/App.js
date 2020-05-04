import React, {Component} from 'react';
// import logo from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import GroupPage from '../GroupPage/GroupPage';
import MainDashboard from '../MainDashboard/MainDashboard';
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
handleDeleteProfile = () => {
  this.setState({ user: null });
};
  render() {
  return (
    <div className='main-page'>
      
      <Menu 
        user={this.state.user}
        handleLogout={this.handleLogout}
      />
      <div>
      <Switch>  
        <Route
          exact
          path="/"
          render={() => <MainDashboard user={this.state.user} />}
        />
        <Route 
          exact
           path="/profile" 
           render={() => (
              <ProfilePage 
                user = {this.state.user}
                handleDeleteProfile={this.handleDeleteProfile}
              />
        )} />
        <Route
      
          exact
          path="/group"
          render={({ history }) =>
          userService.getUser() ? (
            <GroupPage
              history={history}
              user={this.state.user}/>
              ) : (
                <Redirect to="/login" />
            )
          }
      />
        <Route exact path="/signup" render={({ history }) => (
            <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
        )} />
        <Route exact path="/login" render={({ history }) => (
            <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
        )} />
        
        </Switch>
      </div>
    </div>
  );
        }
}

export default App;
