import React from 'react';
// import logo from '../../logo.svg';
import './App.css';
import Menu from '../../components/Menu/Menu';
import MainHeader from '../../components/MainHeader/MainHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import GroupView from '../../components/GroupView/GroupView';

function App() {
  return (
    <div>
      <h1>DashBoard</h1>
      <Menu></Menu>
      <MainHeader></MainHeader>
      <Dashboard></Dashboard>
      <GroupView></GroupView>
    </div>
   
  );
}

export default App;
