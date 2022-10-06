import React, { Component } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sessao-footer.scss";
import imgBanner from "../../images/img-rodape.png";
import iconeMail from "../../images/icone-email.png";
import iconeWhats from "../../images/icone-whats.png";
import iconeInsta from "../../images/icone-instagram.png";
import iconeFb from "../../images/icone-facebook.png";
import iconeYT from "../../images/icone-youtube.png";

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

class SessaoFooter extends Component {
  render(): React.ReactNode {
    return (
      <section id="contato">
        <Container>
          <Row>
            <Col lg={5} className="itemFooter">
              <img src={imgBanner} alt="Banner" className="logoFooter" />
            </Col>
            <Col lg={4} className="itemFooter">
              <div className="infoContatoFooter">
                <Nav.Link href="mailto:empreendeweek@gmail.com" target="_blank">
                  <img
                    src={iconeMail}
                    alt="icone-email"
                    className="iconesFooter"
                  />
                  empreendeweek@gmail.com
                </Nav.Link>
                <Nav.Link
                  href="https://api.whatsapp.com/send?phone=5544999787855"
                  target="_blank"
                >
                  <img
                    src={iconeWhats}
                    alt="icone-whats"
                    className="iconesFooter"
                  />
                  44.9.9978.7855
                </Nav.Link>
              </div>
              <div className="redesSociais">
                <Nav.Link
                  href="https://www.instagram.com/empreendeweek/"
                  target="_blank"
                >
                  <img
                    src={iconeInsta}
                    alt="icone-insta"
                    className="iconesFooter"
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/empreendeweek/"
                  target="_blank"
                >
                  <img
                    src={iconeFb}
                    alt="icone-facebook"
                    className="iconesFooter"
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://www.youtube.com/channel/UCN0Ig3_HwkDbNUJMLEvB_kQ"
                  target="_blank"
                >
                  <img
                    src={iconeYT}
                    alt="icone-youtube"
                    className="iconesFooter"
                  />
                </Nav.Link>
              </div>
            </Col>
            <Col lg={3} className="itemFooter">
              <div className="menuFooter">
                <Nav.Link href="#evento">evento</Nav.Link>
                <Nav.Link href="#quemPassouAqui">quem já passou por aqui</Nav.Link>
                <Nav.Link href="#spaceApps">nasa space apps</Nav.Link>
                <Nav.Link href="#SessaoFooter">contato</Nav.Link>
              </div>
            </Col>
          </Row>

          <Row>
            <hr />
            <Col lg={6} className="direitosAutorais">
              <p className="textoDireitos">
                © {anoAtual} | EmpreendeWeek - Todos os direitos reservados.
              </p>
            </Col>
            <Col lg={6} className="tytotech">
              <a
                href="https://tytotech.com.br/"
                title="Desenvolvido por Tytotech"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://tytotech.com.br/web-files/imagens/logos/logo-tytotech.svg"
                  alt="Tytotech"
                  width="85px"
                />
              </a>
              <span className="versao">
                {" "}
                {`${process.env.REACT_APP_VERSION}`}
              </span>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default SessaoFooter;
