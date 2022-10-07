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
import "./sessao-camera.scss";
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
class SessaoCamera extends Component {
  render(): React.ReactNode {
    return (
      <section id="SessaoCamera">
        <Container>
        <Webcam audio={false}/>
        </Container>
      </section>
    );
  }
}

export default SessaoCamera;
