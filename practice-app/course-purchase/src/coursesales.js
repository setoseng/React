import React, { Component } from 'react';
class CourseSales extends Component {
  sumPrice(price){
    this.setState({total: this.state.total + price});
  }

  constructor(props){
    super(props);

    this.state = {
      total: 0,
    };
    this.sumPrice = this.sumPrice.bind(this);
  }

  render(){
    console.log(this.props.items);
    var courses = this.props.items.map((item, index) => {
      return <Course name ={item.name} price={item.price}
        key={index} sumPrice={this.sumPrice} active={item.active}/>
    });
    return(
      <div>
        I am from Course Sales
      </div>
    );
  }
}

class Course extends Component {
  render(){
    return(
      <div>

      </div>
    );
  }
}

export default CourseSales;
