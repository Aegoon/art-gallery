import React, { Component } from 'react';
//import '../App.css';

import items from '../resources/slider';
import Carousel from 'react-3d-carousel';

class Home extends Component {

  constructor(props) {
    super(props);
    this.images = items.map( (item) => {
      return item.src;

    });
    this.state = {
      width: window.innerWidth / 2,
      activeIndex: 0,
      value: 3
    };
  }

  render() {

    this.images.slice(0,6);
    const duration =  500;
    const layout = 'classic'

    return (
      <div className="App" style={{height: '90vh'}}>
        <div className="content">
          <Carousel width={this.state.width}
                    images={this.images}
                    ease="linear"
                    duration={duration}
                    layout={layout}/>

        </div>
      </div>
    );
  }
}

export default Home;
