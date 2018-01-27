import React, {Component} from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class GalleryItem extends Component {
  constructor(props){
    super(props);
  }

  sizeBuilder(image) {
    return "Размер: " + image.width + "x" + image.height;
  }

  priceBuilder(image) {
    return "Стоимость: " + image.price;
  }

  render() {
    let image = this.props.image;
    return (
      <Col xs="4">
        <Card>
          <CardImg top width="100%" src={image.src} alt="Card image cap" />
          <CardBody>
            <CardTitle>{image.tags? image.tags.en.title : ""}</CardTitle>
            <CardSubtitle>{image.tags? this.sizeBuilder(image.tags.en) : ""}</CardSubtitle>
            <CardText>{image.tags? this.priceBuilder(image.tags.en) : ""}</CardText>
            <CardText>{image.tags? image.tags.en.description : ""}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default GalleryItem;