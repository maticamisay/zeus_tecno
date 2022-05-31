import React from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import "../styles/About.css";
import { MdWeb } from "react-icons/md";
const About = () => {
  return (
    <>
      <Container className="about text-center" id="about">
        <h2 className="pb-3">Nuestros servicios</h2>
        <Row xs={1} md={1} lg={3} className="g-4">
          <Col className="d-flex">
            <Card>
              <div>
                <MdWeb
                  className="card-icon"
                  style={{ color: "#3b2b20", fontSize: "10rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="text-wrap">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <div>
                <MdWeb
                  className="card-icon"
                  style={{ color: "#3b2b20", fontSize: "10rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="text-wrap">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <div>
                <MdWeb
                  className="card-icon"
                  style={{ color: "#3b2b20", fontSize: "10rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="text-wrap">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
