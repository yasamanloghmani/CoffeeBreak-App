import React, { Component } from "react";
import './CostChart.css';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

class CostChart extends Component{
    // constructor() {
    //     super();
    //     this.state = {
    //       percent: 0, data: this.getData(0)
    //     };
    // }
    // componentDidMount() {
    //     // let percent = this.props.user.limitOfExpense;
      
    //     // this.setState({
    //     // percent, data: this.getData(percent)
    //     });
    // }
    
    // getData(percent) {
    // return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    // }

    render() {
        return (
            
            <div className='chart'>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
                <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={400} height={400}
                data={this.props.costdata}
                innerRadius={120}
                cornerRadius={25}
                labels={() => null}
                style={{
                    data: { fill: ({ datum }) => {
                    const color = datum.y > 80 ? "orangered" : "blue";
                    return datum.x === 1 ? color : "transparent";
                    }
                    }
                }}
                />
                <VictoryAnimation duration={1000} data={this.props.costdata}>
                {(newProps) => {
                    return (
                    <VictoryLabel
                        textAnchor="middle" verticalAnchor="middle"
                        x={200} y={200}
                        text={`${Math.round(this.props.costpercent)}%
                        Cost`}
                        style={{ fontSize: 45}}
                    />
                    );
                }}
                </VictoryAnimation>
            </svg>
            
            </div>
            
            
            
        );
    }
   
}

export default CostChart;