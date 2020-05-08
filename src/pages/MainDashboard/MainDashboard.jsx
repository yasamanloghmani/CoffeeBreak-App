import React, { Component } from "react";
import coffeeService from '../../utils/coffeeService';
import groupService from '../../utils/groupService';
import MainHeader from '../../components/MainHeader/MainHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import GroupView from '../../components/GroupView/GroupView';


class MainDashboard extends Component{
   state = {
    coffees : [],
    theme : 'light',
    sumSize : 0,
    sumCost : 0,
    costpercent: 0,
    costdata: this.getCostData(0),
    sizepercent: 0,
    sizedata: this.getSizeData(0),
    group : [{}],
    
    
   }

  getCostData(costpercent) {
      return [{ x: 1, y: costpercent }, { x: 2, y: 100 - costpercent }];
  }
  
  getSizeData(sizepercent) {
      return [{ x: 1, y: sizepercent }, { x: 2, y: 100 - sizepercent }];
  }
  handleAddCoffee = async newCoffeeData => {
    const coffees = await coffeeService.create(newCoffeeData, this.props.user.id);
    const sumSize = coffees.reduce(function(prev, cur) {
      return prev + cur.size;
    }, 0);
    const sumCost = coffees.reduce(function(prev, cur){
      return prev + cur.price;
    }, 0);
    const costpercent = (sumCost / this.props.user.limitOfExpense ) *100;
    const sizepercent = (sumSize / this.props.user.limitOfCoffee ) *100;
    this.setState({coffees, sumCost, sumSize, costpercent, costdata: this.getCostData(costpercent), sizepercent, sizedata: this.getSizeData(sizepercent)});
  }

  handleAddGroup = async newGroupData => {
    const group = await groupService.create(newGroupData);
    this.setState({group})
  }

  async componentDidMount() {
    const coffees = await coffeeService.getAll(this.props.user.id);
    const group = await groupService.getAll();
    const sumSize = coffees.reduce(function(prev, cur) {
      return prev + cur.size;
    }, 0);
    const sumCost = coffees.reduce(function(prev, cur){
      return prev + cur.price;
    }, 0);
    const costpercent = (sumCost / this.props.user.limitOfExpense ) *100;
    const sizepercent = (sumSize / this.props.user.limitOfCoffee ) *100;
    this.setState({coffees, sumCost, sumSize, costpercent, costdata: this.getCostData(costpercent), sizepercent, sizedata: this.getSizeData(sizepercent), group});
  }

  async shouldComponentUpdate(){
    return true;
  }
    render(){
        return(
            <div className='MainDashboard'>
                <div className='flexLeft'>
                <MainHeader user={this.props.user}></MainHeader>
                <Dashboard user={this.props.user} handleAddCoffee={this.handleAddCoffee} costpercent={this.state.costpercent} costdata={this.state.costdata} sizepercent={this.state.sizepercent} sizedata={this.state.sizedata}>
                </Dashboard>
                </div>
                <div className='flexRight'>
                <GroupView user={this.props.user} handleAddGroup={this.handleAddGroup} group={this.state.group} handleJoinGroup={this.props.handleJoinGroup}></GroupView>
                </div>
                
                
            </div>
        );
    }
}

export default MainDashboard;