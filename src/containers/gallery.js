import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import {Container, Label} from 'reactstrap';

import items from '../img'

class GalleryPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <Container className="text-center">
        <Label className="m-2">Its s Gallery</Label>
        <Gallery
          images={items}
          rowHeight={240}
          enableImageSelection={false}
        />
      </Container>
    );
  }
}

export default GalleryPage;
