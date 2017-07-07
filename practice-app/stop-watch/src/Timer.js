import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state={
      clock: 0 ,
    }
    this.tick = this.tick.bind(this);
  }
  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  }
  tick(){
    this.setState({clock: new Date() - this.props.start});
  }
  render(){
    var clock = Math.round(this.state.clock / 1000)
    return(
      <div>
        <p> You have been on this site since: </p> <br/>
        <span>{clock}</span>
        <p>Seconds</p>
      </div>
    )
  }
}
export default Timer;
