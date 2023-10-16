import React, { useEffect } from "react";
import "../assets/css/expertise.css";
import { Container, Row, Col } from "react-bootstrap";
import softDevIcon from "../assets/images/soft-dev.svg";
import frontEndIcon from "../assets/images/front-end.svg";
import helloW from "../assets/images/hello-world-html-code-768x384.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Expertise() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration of the animation.
      once: true, // Animation plays only once per element.
    });
  }, []);

  return (
    <div
      className="containers"
      style={{ backgroundColor: "#1a191d" }}
      data-aos="fade-right"
    >
      <h2 className="elementor-heading-title elementor-size-default">
        My Expertise
      </h2>
      <Container>
        <Row style={{ padding: 10 }}>
          <Col className="border" sm={12} md={4} data-aos="fade-right">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={softDevIcon} alt="My Icon" />
                <h3 className="wt">
                  <span className="und">Software</span> Development
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6 className="wt">
                  Experienced in Node.js, React, React Native, PHP, and 3rd
                  Party Integrations like Payment Gateways, data syncing, and
                  delivery partners.
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="zoom-in">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={frontEndIcon} alt="My Icon" />
                <h3 className="wt">
                  <span className="und">Frontend</span> Dev
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6 className="wt">
                  Passionate about UI/UX. Over 2.8 years of development
                  experience in HTML, CSS, JS, React, and React native
                  frameworks.
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="fade-left">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={softDevIcon} alt="My Icon" />
                <h3 className="wt">
                  <span className="und">Backend</span> Dev
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6 className="wt">
                  Backend expertise in Node.js, Core PHP, Laravel,Symfony and
                  database management using MongoDB and MySQL. Well-equipped to
                  design and implement efficient server-side solutions.
                </h6>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img src={helloW} className="helloImg" data-aos="fade-up" /> */}
    </div>
  );
}
