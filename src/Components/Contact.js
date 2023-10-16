import React, { useEffect } from "react";
import "../assets/css/style.css";
import Insta from "../assets/images/instagram-1-svgrepo-com.svg";
import LinkedIn from "../assets/images/linkedin-svgrepo-com.svg";
import GitHub from "../assets/images/github-square-svgrepo-com.svg";
import Gmail from "../assets/images/gmail-svgrepo-com.svg";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration of the animation.
      once: true, // Animation plays only once per element.
    });
  }, []);

  return (
    <div className="page" style={{ backgroundColor: "#1a191d" }} data-aos="fade-up">
      <h1 className="heading-title" data-aos="fade-up">
        Contact Me
      </h1>
      <h4 className="sub-title" data-aos="fade-up">
        Have an exciting project you need help with? Send me an email or contact
        me via instant message!
      </h4>

      <Row className="contacts" style={{ marginTop: 20 }}>
        <Col md={6} data-aos="fade-right">
          <div className="d-flex align-items-center">
            <img src={Gmail} alt="Gmail" width="45" />
            <a
              style={{ marginLeft: 10 }}
              href="mailto:pradeephegde463@gmail.com"
            >
              pradeephegde463@gmail.com
            </a>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="d-flex align-items-center">
            <img src={LinkedIn} alt="LinkedIn" width="45" />
            <a style={{ marginLeft: 10 }} href="https://github.com/pradeep463">
              LinkedIn
            </a>
          </div>
        </Col>
        <Col md={6} data-aos="fade-right">
          <div className="d-flex align-items-center">
            <img src={Insta} alt="insta" width="40" />
            <a style={{ marginLeft: 15 }} href="https://instagram.com/p__deep_">
              Instagram
            </a>
          </div>
        </Col>
        <Col md={6} data-aos="fade-left">
          <div className="d-flex align-items-center">
            <img src={GitHub} alt="GitHub" width="40" />
            <a style={{ marginLeft: 15 }} href="https://github.com/pradeep463">
              GitHub
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
