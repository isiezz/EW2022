import React, { Component } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-banner.scss";
import iconeMouse from "../../images/scroll-gif.gif";
import imagemLogo from "../../images/img-banner.png";

class SessaoBanner extends Component {
  render(): React.ReactNode {
    return (
      <section id="SessaoBanner">
        <Container fluid>
          <Row>
            <Col className="imagemLogo">
              <Image src={imagemLogo}></Image>
            </Col>
            <div className="iconeMouse">
              <Link to={""}><Image src={iconeMouse}></Image></Link>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}
export default SessaoBanner;
