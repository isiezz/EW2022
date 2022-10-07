import React, { Component } from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  Row,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-quem.scss";
import img from "../../images/ImgGeane.jpeg";
import logo from "../../images/logo_coamo.png"

class SessaoQuem extends Component {
  render(): React.ReactNode {
    return (
      <section id="quemPassouAqui">
        <Container>
          <Row></Row>
          <Row className="row">
            <Card style={{ width: "80%" }}>
              <Card.Img variant="top" src={img} width={"100%"} />
              <Card.Body>
                <Card.Title>Geane Magalhães Reis</Card.Title>
                <Card.Text>Tecnica em manutenção elétrica</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <b>Empresa: Fundação Educere</b>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>
                    Certificação: NR33{" "}
                    <Badge className="nbr" bg="success">
                      <b>Válido</b>
                    </Badge>
                  </b>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Integração:{" "}</b>
                  <Badge className="nbr" bg="success">
                    <b>Válido</b>
                  </Badge>
                </ListGroup.Item>
          
              </ListGroup>
              <Card.Body>
                <Button variant="primary">
                  <b>Avançar para reconhecimento facial</b>
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SessaoQuem;
