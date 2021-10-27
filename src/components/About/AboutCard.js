import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, nice to have you here. My name is <span className="purple">Delphine Nwawuzie </span>
            from <span className="purple"> Ottawa, Canada.</span> I am a full stack web developer with love in UI/UX design.            
            <br />
            <br />My other interests lies in knowing all about cybersecurity, digital forensics and mobile security.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and learning how to build Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography and Fashion
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The Web as i envisaged it, we have not seen it yet. The future is still so much bigger than the past!"{" "}
          </p>
          <footer className="blockquote-footer">Tim Berners-Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
