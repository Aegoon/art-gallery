import React, { Component } from 'react';
//import '../App.css';

import items from '../img'
import Carousel from 'react-3d-carousel';

class Home2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth / 2,
      activeIndex: 0,
      value: 3
    };
  }

  render() {

    let images = items.map( (item) => {
      return item.src;

    });
    images.slice(0,6);
    const duration = 1500;
    const layout = 'classic'

    return (
      <div className="App" style={{height: '90vh'}}>
        <div className="content">

          <Carousel width={this.state.width}
                    images={images}
                    ease="linear"
                    duration={duration}
                    layout={layout}/>

        </div>
      </div>
    );
  }
}

export default Home2;
