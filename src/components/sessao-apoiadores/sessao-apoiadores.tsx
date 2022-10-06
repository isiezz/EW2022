import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-apoiadores.scss";
import logoEducere from "../../images/logo-educere.png";
import logoUtfpr from "../../images/logo-utfpr.png";
import logoSebrae from "../../images/logo-sebrae.png";
import logoSindimetal from "../../images/logo-sindimetal.png";
import logoPrefeitura from "../../images/logo-prefeitura.png";

class SessaoApoiadores extends Component {
  render(): React.ReactNode {
    return (
      <section id="SessaoApoiadores">
          <Container fluid="lg">
            <Row className="justify-content-md-center">
              <Col lg={12} className="textRealizacao">
                realização:
              </Col>
              <Col xs={6} md={"auto"}>
                <img src={logoSebrae} width={"60%"} />
              </Col>
              <Col xs={6} md={"auto"}>
                <img src={logoEducere} width={"60%"} />
              </Col>
              <Col xs={6} md={"auto"}>
                <img src={logoPrefeitura} width={"60%"} />
              </Col>
              <Col xs={6} md={"auto"}>
                <img src={logoUtfpr} width={"60%"} />
              </Col>
              <Col xs={6} md={"auto"}>
                <img src={logoSindimetal} width={"60%"} />
              </Col>


            </Row>
          </Container>
      </section>
    );
  }
}
export default SessaoApoiadores;