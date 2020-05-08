import React, {Component} from 'react';
// import coffeeService from '../../utils/coffeeService';
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
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Theme/theme';
import { GlobalStyles } from '../Theme/global';
import groupService from '../../utils/groupService';
// import tokenService from '../../utils/tokenService';

class App extends Component {
  state = {
    user: userService.getUser(),
    
}

toggleTheme = () => {
  if (this.state.theme === 'light') {
    this.setState({theme : 'dark'});
  } else {
    this.setState({theme : 'light'});
  }
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

handleJoinGroup = async (groupId) => {
    await groupService.join(groupId);
  // const user = usergroup.user;
  // const group = usergroup.group;
  // this.setState({user})
  
}

async shouldComponentUpdate(){
  return true;
}

  render() {
  return (
    <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
    <div className='main-page'>
    <GlobalStyles />
      <Menu 
        user={this.state.user}
        handleLogout={this.handleLogout}
        toggleTheme={this.toggleTheme}
        theme={this.state.theme}
      />
      <div>
      
      <Switch>  
        <Route
          exact
          path="/"
          render={({ history }) => 
          userService.getUser() ? (
          <MainDashboard
            history={history}
            user={this.state.user}
            handleJoinGroup={this.handleJoinGroup}
            usergroup={this.state.usergroup}
            />
            ) : (
              <Redirect to="/login" />
              )
          }
      />
        <Route 
          exact
           path="/profile" 
           render={({ history }) => 
            userService.getUser() ? (
              <ProfilePage 
                history={history}
                user = {this.state.user}
                handleDeleteProfile={this.handleDeleteProfile}
              />
              ) : (
                <Redirect to="/login" />
                )
              }
          />
        <Route
      
          exact
          path="/group"
          render={({ history }) =>
          userService.getUser() ? (
            <GroupPage
              history={history}
              user={this.state.user}
              usergroup={this.state.usergroup}
              />
              
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
    </ThemeProvider>
  );
        }
}

export default App;
