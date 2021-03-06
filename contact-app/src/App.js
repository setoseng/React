import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuExampleSimple from './components/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MyForm from './components/myform';
import {auth} from './fsociety.js'

const Home = () => (<h2>Home</h2>)
const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

const theme = getMuiTheme({
  palette: {primary1Color: red700}
});

class App extends Component {

  login () {
  auth()
    .then(function (user) {
      console.log(user);
    })
    .catch(function (e) {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <BrowserRouter>
            <div>
              <AppBar title="Contact App" iconElementLeft={<MenuExampleSimple/>}/>
              <div>
                <button onClick={(e) => this.login(e)}>Login</button>
              </div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/form" component={MyForm}/>
                <Route component={NoMatch}/>
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
