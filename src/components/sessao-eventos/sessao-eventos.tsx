import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-eventos.scss";
import iconePonto from "../../images/icone-ponto.png";

class SessaoEventos extends Component {
  render(): React.ReactNode {
    return (
      <section id="SessaoEventos">
        <Container>
          <Row>
            <Col lg={12} className="textoEventos">
              <p>
                05
                <br />
                edições
              </p>
              <p>
                + de 45 mil
                <br />
                pessoas
                <br />
                sensibilizadas
              </p>
              <p>
                03 projetos
                <br />
                com captação
                <br />
                de recursos
              </p>
              <p>
                05
                <br />
                Hackathons
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default SessaoEventos;
