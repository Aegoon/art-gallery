import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';

import Home from './containers/home';
import Gallery from './containers/gallery';
import Person from './containers/person';
import Contact from './containers/contact';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/gallery" component={Gallery}/>
              <Route path="/person" component={Person}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
