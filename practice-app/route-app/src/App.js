import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import One from './one.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Route path='/' component={One}></Route>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
