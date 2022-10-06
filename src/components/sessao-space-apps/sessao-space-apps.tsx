import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-space-apps.scss";
import imgSpace from "../../images/img-space.png";
import imgFoguete from "../../images/img-foguete.png";
import imgApoia from "../../images/img-apoia.png";

class SessaoSpaceApp extends Component {
  render(): React.ReactNode {
    return (
      <section id="spaceApps" >
        <Container>
          <Row>
            <Col lg={3} className="logoSpaceApps imgColuna">
              <img src={imgSpace} alt="Space App" />
            </Col>
            <Col lg={6} className="descricaoColuna">
              <p>
                <img src={imgApoia} alt="imgApoia" className="imgApoia" />
                a maior maratona de programação do mundo, organizada pela agência espacial americana.
              </p>
            </Col>
            <Col lg={3} className="imgColuna">
              <img src={imgFoguete} alt="Foguete" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default SessaoSpaceApp;