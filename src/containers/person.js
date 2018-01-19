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
        <Label className="m-2">Person?</Label>
      </Container>
    );
  }
}

export default GalleryPage;
