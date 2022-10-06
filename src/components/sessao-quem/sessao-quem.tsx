import React, { Component } from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  Row,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-quem.scss";
import img from "../../images/img-murilo.png";

class SessaoQuem extends Component {
  render(): React.ReactNode {
    return (
      <section id="quemPassouAqui">
        <Container>
          <Row>
            <Col lg={12}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={img} width={"100%"}
                />
                <Card.Body>
                  <Card.Title>Geane Magalhães Reis</Card.Title>
                  <Card.Text>
                    Tecnica em manutenção elétrica
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item><h5>Empresa: Fundação Educere</h5></ListGroup.Item>
                  <ListGroup.Item><h5>Certificação: <Badge className="nbr" bg="success">NBR33</Badge>
      </h5></ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SessaoQuem;
