import React, { Component } from 'react';

var firebase = require ('firebase');
var uuid = require('uuid');

//Firebase initializeApp
//Copy Pasta from the website
var config = {
    apiKey: "AIzaSyCgVteTzewD7SqpxGsnGPChmGOySO6CnI0",
    authDomain: "usurvey-ca1cd.firebaseapp.com",
    databaseURL: "https://usurvey-ca1cd.firebaseio.com",
    projectId: "usurvey-ca1cd",
    storageBucket: "usurvey-ca1cd.appspot.com",
    messagingSenderId: "941159316783"
  };
  firebase.initializeApp(config);

class Usurvey extends Component {
  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName }, function(){
      console.log(this.state);
    });
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: 'killerMan',
      answers: {
        answers1: '',
        answers2: '',
        answers3: '',
      },
      isSubmitted: false,
    };
    this.nameSubmit = this.nameSubmit.bind(this);

  }
  render(){
    var studentName;
    var questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false){
      studentName = <div>
        <h1>What is your name?</h1>
        <form onSubmit={this.nameSubmit}>
          <input className="namy" type="text" placeholder="Enter Your Name" ref="name" />
        </form>
      </div>
    } else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1>Welcome to U-Survery, {this.state.studentName}</h1>;
        questions = <p>Hey</p>;
    }

    return(
      <div>
        {studentName}
        -----------------------------------
        {questions}
      </div>
    );
  }
}
export default Usurvey;
