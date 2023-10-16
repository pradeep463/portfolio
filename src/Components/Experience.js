import React from "react";
import "../assets/css/style.css";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";

export default function Experience() {
  let dqPlan = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "CORE PHP",
    "LARAVEL",
    "REACT",
    "react native",
    "node js",
  ];
  let ordPl = ["Synfony", "REACT", "react native", "node js"];
  return (
    <div className="page" style={{ backgroundColor: "#1a191d" }}>
      <h1 className="heading-title">Professional Experience</h1>
      <Container style={{ marginTop: 30 }}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            style={{ marginBottom: 20 }}
            data-aos="fade-left"
          >
            <Accordion.Header className="custom-accordion-header">
              <b> Software Developer @ Dataqueue System</b> &nbsp;(2021 - 2022)
            </Accordion.Header>
            <Accordion.Body data-aos="zoom-out">
              Developed front-end and back-end solutions using React, React
              Native, the Laravel framework, Core PHP, and Node.js.
              <br />
              <br />
              {dqPlan.map((i, index) => (
                <div
                  className="chip"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <span className="chip-label">{i.toUpperCase()}</span>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" data-aos="fade-left">
            <Accordion.Header className="custom-accordion-header">
              <b> Senior Software Developer @ Ordrio Technologies pvt ltd.</b>{" "}
              &nbsp; (2022 - Present)
            </Accordion.Header>
            <Accordion.Body data-aos="zoom-out">
              Developed front-end and back-end solutions, maintained and
              developed SAAS solution, and created the backend for a music app,
              among other projects. Additionally, I have experience working on
              3rd-party integrations, including SMS gateways, payment gateways,
              and delivery partners.
              <br />
              <br />
              {ordPl.map((i, index) => (
                <div
                  className="chip"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <span className="chip-label">{i.toUpperCase()}</span>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
