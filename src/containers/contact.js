import React, { Component } from 'react';
import {Container, Row, Label} from 'reactstrap';

class GalleryPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <Container>
        <Row className="justify-content-center" style={{paddingTop: "60px"}}><Label className="m-2"><h4>Contact</h4></Label></Row>
        <Row className="justify-content-center"><Label className="m-2">Address</Label></Row>
        <Row className="justify-content-center"><Label className="m-2">Email: yuhta.ludmila-luch@yandex.com</Label></Row>
        <Row className="justify-content-center"><Label className="m-2">Phone</Label></Row>
        <Row className="justify-content-center"><Label className="m-2">????</Label></Row>

      </Container>
    );
  }
}

export default GalleryPage;
