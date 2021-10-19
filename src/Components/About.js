import React, { Component } from "react";
import "./About.css";
import Particles from "react-particles-js";
import { Tab, Row, Col, Nav } from "react-bootstrap";
//import ContactMe from "./ContactMe";
import Skills from "./Skills";
import AwardCard from "./AwardCard";
import CertificateCard from "./certificateCard";
import { awards, certificates } from "../aboutlist";
//images
import github from "../images/githubdark.png";
import linkedin from "../images/linkedin.png";
import email from "../images/emaildark.png";
import particleConfig from "../config/particle-config";
import snapchat from "../images/snapchatdark.jpg";

class About extends Component {
  render() {
  

    return (
      <div className="container-fluid">
        <Particles className="particles" params={particleConfig} />
        <div className="mt-5">
          <Tab.Container id="left-tabs" defaultActiveKey="skills">
            <Row>
              <Col lg={2} className="m-0">
                <Nav
                  variant="pills"
                  className="flex-lg-column justify-content-center"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="skills">SKILLS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="certifications">
                      CERTIFICATIONS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="awards">ACHIEVEMENTS</Nav.Link>
                  </Nav.Item>
                  {/*
                  <Nav.Item>
                    <Nav.Link eventKey="contactMe">CONTACT ME</Nav.Link>
                  </Nav.Item>
                  */}
                </Nav>
                {// 
                }
            <div className = "mt-5">
            <span className="logo text-white font-weight-bolder">
              Let's Connect:
            </span>
            <div className="d-flex flex-wrap flex-lg-column">
              <div className="logo">
                <a
                  href="https://github.com/bipin-pachhai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={github} /> GitHub
                </a>
              </div>
              <div className="logo">
                <a
                  href="https://www.linkedin.com/in/bipin-pachhai-416339152/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={linkedin} />{" "}
                  LinkedIn
                </a>
              </div>
              <div className="logo">
                <a
                  href="https://www.snapchat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={snapchat} />{" "}
                  Snapchat
                </a>
              </div>
              <div className="logo">
                <a
                  target="_blank"
                  href={`mailto:{bipinpachhai@gmail.com}`}
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={email} /> Gmail
                </a>
              </div>
            </div>
          </div>
               {//end
               } 
              </Col>
              <Col lg={10}>
                <Tab.Content>
                  <Tab.Pane eventKey="skills">
                    <Skills />
                  </Tab.Pane>
                  <Tab.Pane eventKey="awards">
                    <div className="mt-5  m-lg-2 mt-lg-0 container fly-in">
                      <div className="row justify-content-center justify-content-lg-start">
                        {awards.map((award, index) => (
                          <AwardCard
                            key={index}
                            title={award.title}
                            subtitle={award.subtitle}
                            description={award.description}
                            url={award.url}
                          />
                        ))}
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="certifications">
                    <div className="mt-5  m-lg-2 mt-lg-0 container fly-in">
                      <div className="row justify-content-center justify-content-lg-start">
                        {certificates.map((certificate, index) => (
                          <CertificateCard
                            key={index}
                            title={certificate.title}
                            bgurl={certificate.bgurl}
                            credentialId={certificate.credentialId}
                            issuedBy={certificate.issuedBy}
                            description={certificate.description}
                            url={certificate.url}
                          />
                        ))}
                      </div>
                    </div>
                  </Tab.Pane>
                  {/*
                  <Tab.Pane eventKey="contactMe">
                    <ContactMe />
                  </Tab.Pane>
                  */
                  }
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}
export default About;
