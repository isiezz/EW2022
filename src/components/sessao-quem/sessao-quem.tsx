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
import logo from "../../images/logo_coamo.png";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
class WebcamCapture extends React.Component {
  render() {
    const videoConstraints = {
      facingMode: "user",
    };

    return <Webcam videoConstraints={videoConstraints} />;
  }
}
class SessaoQuem extends Component {
  render(): React.ReactNode {
    return (
      <section id="quemPassouAqui">
        <Container>
          <img src={logo} alt="logo" className="logo" />
          <Row className="row">
            <Card className="cartao" style={{ width: "80%" }}>
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
                  <b>Integração: </b>
                  <Badge className="nbr" bg="success">
                    <b>Válido</b>
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary">
                  <b>Avançar para reconhecimento facial</b>
                  <Link to="#camera"></Link>
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
