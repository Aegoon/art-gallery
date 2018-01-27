import React, { Component } from 'react';
import {Container, Label, Row} from 'reactstrap';
import Item from '../components/galleryItem';
import items from '../resources/gallery';

class GalleryPage extends Component {

  constructor(props) {
    super(props);
  }

  getItems() {
    return items.map( image => {
      return (
        <Item image={image}></Item>
      )
    });
  }

  render() {
    return (
      <Container className="text-center">
        <Label className="m-2">Its s Gallery</Label>
        <Row>
          {this.getItems()}
        </Row>
      </Container>
    );
  }
}

export default GalleryPage;
