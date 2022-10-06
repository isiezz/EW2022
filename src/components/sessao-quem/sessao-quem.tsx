import React, { Component } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-quem.scss";
import imgMic from "../../images/img-microfone.png";
import imgCid from "../../images/img-cid.png";
import imgCamila from "../../images/img-camila.png";
import imgMurilo from "../../images/img-murilo.png";
import imgManualMundo from "../../images/img-manual-mundo.png";
import imgJovemNerd from "../../images/img-jovem-nerd.png";
import imgAtila from "../../images/img-italo.png";

class SessaoQuem extends Component {
  dados = [
    {
      titulo: "Ibere Thenório e Mari Fulfaro",
      texto: "youtubers do canal Manual do Mundo, em 2018",
      imgSrc: imgManualMundo,
    },
    {
      titulo: "Átila Iamarino",
      texto:
        "biólogo e pesquisador brasileiro, formado em microbiologia e doutor em virologia, edição 2019",
      imgSrc: imgAtila,
    },
    {
      titulo: "Murilo Gun",
      texto:
        "palestrantes, professor de criatividade, fundador da Keep Learning School, em 2020, 622 pessoas online na Live",
      imgSrc: imgMurilo,
    },
    {
      titulo: "Camila Farani",
      texto:
        "empresária, investidora anjo brasileira, colunista da Gazeta do Povo, em 2020, 356 pessoas online na Live",
      imgSrc: imgCamila,
    },
    {
      titulo: "Jovem Nerd e Azaghal",
      texto:
        "youtubers do canal Jovem Nerd, Nerdcast, NerdStore, em 2020, mais de 28.000 pessoas online na Live",
      imgSrc: imgJovemNerd,
    },
    {
      titulo: "Cid Cidoso",
      texto: "palestrante, criador de conteúdo, streamer e youtuber, em 2021",
      imgSrc: imgCid,
    },
  ];
  render(): React.ReactNode {
    return (
      <section id="quemPassouAqui">
        <Container>
          <Row>
            <Col lg={4} className="imgMicrofone">
              <img src={imgMic} width={"100%"} />
            </Col>
            <Col lg={8}>
              <Row>
                {this.dados.map((dado, idx) => (
                  <Col lg={4} key={idx} className="cartoes">
                    <Card>
                      <Card.Img variant="top" src={dado.imgSrc} />
                      <Card.Body>
                        <Card.Title className="escritaCards">{dado.titulo}</Card.Title>
                        <Card.Text className="escritaCards">{dado.texto}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default SessaoQuem;
