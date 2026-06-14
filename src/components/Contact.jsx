import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        <p
          className="contact-subtitle"
          data-aos="fade-up"
        >
          Let's connect and build something amazing together.
        </p>

        <Row className="g-4 mt-4">

          <Col lg={3} md={6}>
            <a
              href="tel:+918104226072"
              className="contact-card"
            >
              <FaPhoneAlt className="contact-icon" />
              <h5>Phone</h5>
              <p>+91 8104226072</p>
            </a>
          </Col>

          <Col lg={3} md={6}>
            <a
              href="mailto:badabeshravani@gmail.com"
              className="contact-card"
            >
              <FaEnvelope className="contact-icon" />
              <h5>Email</h5>
              <p>Send Mail</p>
            </a>
          </Col>

          <Col lg={3} md={6}>
            <a
              href="https://github.com/Shravanibadabe"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaGithub className="contact-icon" />
              <h5>GitHub</h5>
              <p>View Projects</p>
            </a>
          </Col>

          <Col lg={3} md={6}>
            <a
              href="https://linkedin.com/in/shravani-badabe"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <FaLinkedin className="contact-icon" />
              <h5>LinkedIn</h5>
              <p>Connect</p>
            </a>
          </Col>

          <Col lg={12}>
            <a
              href="https://shravanibadabe.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="contact-card portfolio-card"
            >
              <FaGlobe className="contact-icon" />
              <h5>Portfolio Website</h5>
              <p>Visit My Portfolio</p>
            </a>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Contact;