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
  answerSelected(event){
    var answers = this.state.answers;
    if(event.target.name === 'answer1'){
      answers.answer1 = event.target.value;
    } else if (event.target.name === 'answer2'){
      answers.answer2 = event.target.value;
    } else if (event.target.name === 'answer3'){
      answers.answer3 = event.target.value;
    }
    this.setState({answers: answers}, function(){
      console.log(this.state);
    });
  }
  questionSubmit(){
    firebase.database().ref('uSurvery/'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers
    });
    this.setState({isSubmitted: true});
  }


  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answers1: '',
        answers2: '',
        answers3: '',
      },
      isSubmitted: false,
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);

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
        questions = <div>
          <h2>Here are some questions: </h2>
          <form onSubmit={this.questionSubmit}>
            <div className="card">
              <label>What kind of Courses you like the most: </label> <br/>
              <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
              <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
              <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Marketing
            </div>
            <div className="card">
              <label>You are a: </label> <br/>
              <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student
              <input type="radio" name="answer2" value="in-job" onChange={this.answerSelected} />In-Job
              <input type="radio" name="answer2" value="looking-job" onChange={this.answerSelected} />Looking-Job
            </div>
            <div className="card">
              <label>Is online learning helpful: </label> <br/>
              <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />Yes
              <input type="radio" name="answer3" value="no" onChange={this.answerSelected} />No
              <input type="radio" name="answer3" value="maybe" onChange={this.answerSelected} />Maybe
            </div>
            <input className="feedback-button" type="submit" value="Submit"/>
          </form>

        </div>
    } else if (this.state.studentName !== '' && this.state.isSubmitted === true){
      studentName = <h1>Thanks, {this.state.studentName}</h1>
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
