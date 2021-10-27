import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Registration Software.png";
import editor from "../../Assets/Projects/Currency Converter.png";
import chatify from "../../Assets/Projects/calculator.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Calculator"
              description="This is an algebraic calculator where highschool students or unversity students can easily solve their mathematical problems with ease."
              link="https://github.com/DelphineN/Roots-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Registration Software"
              description="Project done that makes it easy for student to register for their courses and also instructors register for the classes in which they teach."
              link="https://github.com/DelphineN/School-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Currency Converter"
              description="Currency converter helps tells you real time exchange rate of all the currency needed. This app considers not just the google rate but also compares with the bank rate."
              link="https://github.com/DelphineN/CurrencyConverter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
