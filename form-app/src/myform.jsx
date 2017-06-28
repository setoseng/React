import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './myform.css';

class MyForm extends Component{
  constructor (props){
    super(props);
    this.state = {
      name: '',
      color: 'blue'
    };
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
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <AppBar title="My Awesome Form"/>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Card className="md-card">
            <CardTitle title="My Form" subtitle="subtitle"/>
              <CardText>
                <TextField floatingLabelText="Your Name?"
                  defaultValue={this.state.name}
                  onChange={event => this.update_select(event, 'name')}/>
                <br/><br/>
                <SelectField
                  floatingLabelText="Color"
                  value={this.state.color}
                  onChange={this.update_select}>
                  <MenuItem value="red" primaryText="Red"/>
                  <MenuItem value="blue" primaryText="Blue"/>
                </SelectField>
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
export default MyForm;
