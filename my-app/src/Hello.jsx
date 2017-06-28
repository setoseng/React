import React, { Component } from 'react';

class HelloMessage extends Component{
  constructor (props){
    super(props);
    this.state = {
      date: new Date(),
      people: [
        {id: 1, name:'Paublo'},
        {id: 2, name:'Kanye'}
      ]
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date: new Date()
    });
  }
  handleClick(event,p){
    if (p.selected) {
    p.selected = false;
  } else {
    p.selected = true;
  }
  this.setState({people: this.state.people});
}


  render(){
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <ul>
          {this.state.people.map((p) =>
            <li key={p.id}>
            <button onClick={(e) => this.handleClick(e, p)}>
              <span className={p.selected ? 'selected' : 'not'}>
                {p.name}
              </span>
            </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default HelloMessage;
