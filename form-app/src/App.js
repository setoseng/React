import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyForm from './myform'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import {BrowserRouter, Route, Link}
  from 'react-router-dom';

const theme = getMuiTheme({
  palette: {primary1Color: red700}
});


const Home = () => (<h2>Home</h2>) 

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/form">Form</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/form" component={MyForm}/>
          </div>
        </BrowserRouter>

      </MuiThemeProvider>
    );
  }
}

export default App;
