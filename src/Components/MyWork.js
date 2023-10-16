import React from "react";
import "../assets/css/style.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import ReactJIcon from "../assets/images/react-svgrepo-com(1).svg";
import NodeJSIcon from "../assets/images/node-js-svgrepo-com.svg";
import LaravelIcon from "../assets/images/laravel-svgrepo-com.svg";
import SFIcon from "../assets/images/symfony-svgrepo-com.svg";
import PhpIcon from "../assets/images/php2-svgrepo-com.svg";
import Integrations from "../assets/images/web-rtc-svgrepo-com.svg";
import Del from "../assets/images/man-doing-bicycle-delivery-svgrepo-com.svg";
import PayG from "../assets/images/finance-business-money-exchange-payment-svgrepo-com.svg";
import SmsG from "../assets/images/sms-backup-svgrepo-com.svg";
export default function MyWork() {
  return (
    <div className="page" style={{ backgroundColor: "#1a191d" }}>
      <h1 className="heading-title">My Works</h1>
      <Container>
        <Row>
          <Col className="border" sm={12} md={4} data-aos="fade-right">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={ReactJIcon} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">React</span> JS
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6>
                  <a className="wt" href="https://amacoerp.com">
                    Amaco ERP (in team)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="http://www.queuetech.in/mapp/">
                    Queue Tech Panel
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    ECommerce website
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    LFS AERO Admin Panel
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    LFS Web
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    CLICK AERO Admin Panel
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="http://manage.ordrio.com/">
                    ORDRIO - SAAS Panel (in team)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Portfolio
                  </a>
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="zoom-in">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={ReactJIcon} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">React</span> Native
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6>
                  <a className="wt" href="#">
                    Blood Donation App (DonarGuru)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Yoga App
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Delivery Partner App
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Simple Browser
                  </a>
                </h6>

                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="fade-left">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={NodeJSIcon} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">Node</span> js
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6>
                  <a className="wt" href="#">
                    ORDRIO - SAAS (App - website - Panel) (MongoDB)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Avahan - Music App (App - Panel) (MongoDB)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    ITC Rudra (App-Panel) (MongoDB)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Cree8 (Panel - App) (MongoDB)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    LFS Aero (Panel) (MongoDB)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Click Aero (Panel) (MongoDB)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Life IO (Panel - Website) (MongoDB)
                  </a>
                </h6>

                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="fade-right">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={LaravelIcon} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">Laravel</span>
                </h3>
              </div>
              <div className="bl">
                <br />
                <h6>
                  <a className="wt" href="#">
                    Queue Tech (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Amaco ERP (MySQL)
                  </a>
                </h6>

                <br />
              </div>
              <div>
                <div style={{ display: "flex", padding: 20 }}>
                  <img src={SFIcon} alt="My Icon" height={40} />
                  <h3 className="wt" style={{ marginLeft: 10 }}>
                    <span className="und">Symfony</span>
                  </h3>
                </div>
                <div className="bl">
                  <br />
                  <h6>
                    <a className="wt" href="#">
                      Queue Tech (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Grocebay - SAAS (MySQL)
                    </a>
                  </h6>
                  <br />
                </div>
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="zoom-in">
            <div className="container-box">
              <div>
                <div style={{ display: "flex", padding: 20 }}>
                  <img src={PhpIcon} alt="My Icon" height={40} />
                  <h3 className="wt" style={{ marginLeft: 10 }}>
                    <span className="und">Core</span> PHP
                  </h3>
                </div>
                <div className="bl">
                  <br />
                  <h6>
                    <a className="wt" href="#">
                      Self Chef - Recipes (Panel - Website) (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Virtual Data Room (Panel) (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Aviation (Panel - Website) (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Inventory Management System (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Crime Management (Panel - Website) (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Job Portal (Panel - Website) (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      School Management System (MySQL)
                    </a>
                  </h6>
                  <h6>
                    <a className="wt" href="#">
                      Collage Management System (Panel - Website) (MySQL)
                    </a>
                  </h6>
                  <br />
                </div>
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={4} data-aos="fade-left">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={PhpIcon} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">Core</span> PHP
                </h3>
              </div>
              <div className="bl">
                <br />

                <h6>
                  <a className="wt" href="#">
                    Gift of love - ECommerce (Panel - Website) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Petguard (Website - Panel) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Tours and Travels (Panel - Website) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Trade <small>Like OLX</small> (Panel - Website) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Kinden (Panel - Website) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Pigmy (Panel - Website) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Blood Management System (Panel - Website) (MySQL)
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Pest Control (Panel - Website) (MySQL)
                  </a>
                </h6>
                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={6} data-aos="fade-right">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={SmsG} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">SMS</span> Gateway
                </h3>
              </div>
              <div className="bl">
                <br />

                <h6>
                  <a className="wt" href="#">
                    Chota web
                  </a>
                </h6>

                <br />
              </div>
            </div>
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={Del} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">Delivery</span> Partener
                </h3>
              </div>
              <div className="bl">
                <br />

                <h6>
                  <a className="wt" href="#">
                    Careem
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Dunzo
                  </a>
                </h6>

                <br />
              </div>
            </div>
          </Col>
          <Col className="border" sm={12} md={6} data-aos="fade-left">
            <div className="container-box">
              <div style={{ display: "flex", padding: 20 }}>
                <img src={PayG} alt="My Icon" height={40} />
                <h3 className="wt" style={{ marginLeft: 10 }}>
                  <span className="und">Payment</span> Gateway
                </h3>
              </div>
              <div className="bl">
                <br />

                <h6>
                  <a className="wt" href="#">
                    CCV
                  </a>
                </h6>

                <h6>
                  <a className="wt" href="#">
                    Cashfree
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    ccavenue
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Open money
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    PayTm
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    PayU
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Phone Pay
                  </a>
                </h6>
                <h6>
                  <a className="wt" href="#">
                    Zaak Pay
                  </a>
                </h6>

                <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
