import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Badge, Col } from "react-bootstrap";
import "../../src/App.css";

class SingleBook extends Component {
  state = {
    active: false,
  };
  handleClick = () => {
    this.setState({ active: this.state.active ? false : true });
  };

  render() {
    const { book } = this.props;

    return (
      <Col key={book.asin}>
        <Card
          style={{ width: "12rem" }}
          className={`mb-3 text-center image-card ${
            this.state.active ? "active" : "inactive"
          }`}
          onClick={this.handleClick}
        >
          <Card.Img src={book.img} className="book-image" />
          <Card.Body>
            <Card.Title className="fs-6">{book.title}</Card.Title>
            <Badge bg="success">{book.price}€</Badge>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
