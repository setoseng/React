import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {addContact} from './actions.js';
import { connect } from 'react-redux';

import database , {User} from '../fsociety';

import './myform.css';

class MyForm extends Component{
  constructor (props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    };
  }
function mapStateToProps (state) {
  return {
    contacts: state
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (id, data) {
      dispatch(addContact(id, data))
    }
  }
}
  update_select(event, key){
    console.log(event);
    this.setState({[key]: event.target.value});
    //var new_state ={};
    //new_state[key] = event.target.value;
    //this.setState(new_state);
  }

  handleSubmit (event){
    console.log("submitted:", this.state);
    database.ref('contacts/' + User.user.uid).set({
    paul: {name: "Paul B"},
    jim: {name: "Jim"},
    });
    event.preventDefault();
    //this.history.push('/');
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Card className="md-card">
            <CardTitle title="Enter Contact Information" subtitle=""/>
              <CardText>
                <TextField floatingLabelText="Name"
                  defaultValue={this.state.name}
                  onChange={event => this.update_select(event, 'name')}/>
                <br/><br/>

                <TextField floatingLabelText="E-mail"
                  defaultValue={this.state.email}
                  onChange={event => this.update_select(event, 'email')}/>
                <br/><br/>

                <TextField floatingLabelText="Phone Number"
                  defaultValue={this.state.number}
                  onChange={event => this.update_select(event, 'number')}/>
                <br/><br/>

                <TextField floatingLabelText="Address"
                  defaultValue={this.state.address}
                  onChange={event => this.update_select(event, 'address')}/>
                <br/><br/>

                <TextField floatingLabelText="City"
                  defaultValue={this.state.city}
                  onChange={event => this.update_select(event, 'city')}/>
                <br/><br/>

                <TextField floatingLabelText="State"
                  defaultValue={this.state.state}
                  onChange={event => this.update_select(event, 'state')}/>
                <br/><br/>

                <TextField floatingLabelText="Zip Code"
                  defaultValue={this.state.zip}
                  onChange={event => this.update_select(event, 'zip')}/>
                <br/><br/>

              </CardText>
              <CardActions>
                <RaisedButton type="submit" label="Submit" primary={true}/>
              </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}
MyForm = connect(
  mapStateToProps, mapDispatchToProps)(MyForm)
export default MyForm;
