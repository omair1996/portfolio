import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandReactNative } from "react-icons/tb";
import "../../App.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="tech-icons-name">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icons-name">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="tech-icons-name">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-icons-name">Node js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icons-name">React js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeSql />
        <div className="tech-icons-name">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-icons-name">Mongodb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <div className="tech-icons-name">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-name">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="tech-icons-name">Firebase</div>
      </Col>
    </Row>
  );
}

export default Techstack;
