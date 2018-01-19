import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';

import Home from './containers/home';
import Home1 from './containers/home1';
import Gallery from './containers/gallery';
import Person from './containers/person';
import Contact from './containers/contact';

import items from './img'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      value: 3
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {

    return (

      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/home1" component={Home1}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route exact path="/person" component={Person}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect from="*" to="/home"/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
