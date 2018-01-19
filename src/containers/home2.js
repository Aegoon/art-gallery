import React, { Component } from 'react';
import Slider from 'react-slick';
import items from '../img';
import {Row, Col} from 'reactstrap';

class Home2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let images = items.map( (item) => {
      return (<div><img style={{height: "70vh", margin: "auto"}} src={item.src} /></div>)

    });
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      className: "custom-slider"
    };
    return (
      <div className="App" style={{height: '90vh'}}>
        <Slider {...settings}>
          {images}
        </Slider>
      </div>
    );
  }
}

export default Home2;
