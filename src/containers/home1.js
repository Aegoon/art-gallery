import React, { Component } from 'react';
//import '../App.css';

import items from '../img'
import Carousel from 'react-3d-carousel';

class Home1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      value: 3
    };
  }

  render() {

    const images = items.map( (item) => {
      return item.src;

    });
    const duration = 400;
    const layout = 'prism'

    return (

      <div className="App" style={{height: '90vh'}}>

        <Carousel width="600"
        images={images}
        ease="linear"
        duration={duration}
        layout={layout}/>

      </div>
    );
  }
}

export default Home1;
