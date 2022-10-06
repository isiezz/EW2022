import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./sessao-sobre.scss"
import imgSobre from "../../images/img-quem-somo.png";
import imgMaior from "../../images/maior.png";

class SessaoSobre extends Component {
  render(): React.ReactNode {
    return (
      <section id="evento">
        <Container>
          <Row>
            <Col lg={7}>
              <img src={imgSobre} width={"100%"} />
            </Col>

            <Col lg={5} className="textoSobre">
              <div>
                <h2>O <img className="imgtextoSobre" src={imgMaior} width="30%" /> evento de ciência, tecnologia, inovação, negócios e empreendedorismo do centro-oeste do Paraná</h2>
                <p className="subtextoSobre">Desde sua primeira edição, em 2007, muita inovação, soluções e mentes brilhantes passaram por aqui!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SessaoSobre; 