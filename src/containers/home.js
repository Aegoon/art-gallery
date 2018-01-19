import React, { Component } from 'react';
import '../App.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// import Carousel from 'react-3d-carousel';

import items from '../img'

class Home extends Component {

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

    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="main-page-i" src={item.src} alt={item.caption} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    const images = items.map( (item) => {
      return item.src;

    });
    const duration = 400;
    const layout = 'prism'

    return (

      <div className="App">

      {/*<Carousel width="600"*/}
    {/*images={images}*/}
    {/*ease="linear"*/}
    {/*duration={duration}*/}
    {/*layout={layout}/>*/}


    <Carousel
    activeIndex={activeIndex}
    next={this.next}
    previous={this.previous}
    interval="5000"
    >
    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
    {slides}
    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    </Carousel>
  </div>
  );
  }
  }

  export default Home;
