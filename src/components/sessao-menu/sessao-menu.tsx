import React, { Component } from "react";
import { NavHashLink as Link } from 'react-router-hash-link';
import { Navbar, Container, NavDropdown, Nav, Offcanvas, CloseButton } from "react-bootstrap";
import logo from "../../images/logo-ew.png";
import "./sessao-menu.scss"

class SessaoMenu extends Component {
  render(): React.ReactNode {
    return (
      <section id="SessaoMenu">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/"><img src={logo} alt="" width={100} /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas id="header">
            <Offcanvas.Header closeButton />
              <Offcanvas.Body className="headerBody">
                <Nav.Link href="#evento">O evento</Nav.Link>
                <Nav.Link href="#quemPassouAqui">Quem já passou por aqui</Nav.Link>
                <Nav.Link href="#spaceApps">Nasa space apps</Nav.Link>
                <Nav.Link href="#contato" className="NavLast">Contato</Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="Navgc"></div>
      </section >
    );
  }
}

export default SessaoMenu; 