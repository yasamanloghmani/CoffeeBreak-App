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
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Theme/theme';
import { GlobalStyles } from '../Theme/global';
// import tokenService from '../../utils/tokenService';

class App extends Component {
  state = {
    user: userService.getUser(),
    theme : 'light'
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
    </ThemeProvider>
  );
        }
}

export default App;
