import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://eul.netlify.app/static/media/fulllogo.865179eb.svg"
              isBlog={false}
              title="Work Flow"
              description="A sleek and intuitive Workflow Web Application built with React.js, designed to streamline your project management needs. This application allows users to create, assign, and track tasks efficiently. I developed the entry front end of the application. While it's not responsive yet, am working  to ensure it will be optimized for all devices in no time."
              ghLink=" https://github.com/omair1996/workflow.git"
              demoLink="https://umair1996workflow.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
