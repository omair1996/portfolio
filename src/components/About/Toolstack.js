import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiBlender,
  SiNetlify,
  SiWindowsxp,
} from "react-icons/si";
import "../../App.css";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsxp />
        <div className="tech-icons-name">window</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-name">vs code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-name">postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <div className="tech-icons-name">blender</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div className="tech-icons-name">netlify</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
