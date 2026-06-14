import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRobot,
  FaDatabase
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="about-section"
      data-aos="fade-up"
    >
      <Container>

        <h2 className="section-title">
          About Me
        </h2>

        <p className="about-text">
          I am <strong>Shravani Rajaram Badabe</strong>, Full Stack Developer and Information Technology student passionate about building scalable web applications, AI-powered platforms, and modern digital experiences.

          <br /><br />

          My expertise includes React.js, Next.js, Java, JSP, Servlets, MySQL, PostgreSQL, TypeScript, and modern frontend technologies.

          <br /><br />
          I have developed real-world projects including AI Interview Mocker, Import Export ERP Systems, Smart Loan Approval Systems, and Hotel Management Applications.
          <br /><br />
          I enjoy solving real-world problems through software engineering, database design, artificial intelligence, and full stack web development.
          <br /><br />

          I have hands-on experience developing AI-driven
          applications including voice recognition,
          facial confidence analysis, authentication systems,
          dashboard analytics, and database-driven solutions.
        </p>

        <Row className="mt-5">

          <Col lg={3} md={6}>
            <div
              className="about-card"
              data-aos="zoom-in"
            >
              <FaGraduationCap className="about-icon" />
              <h4>Education</h4>
              <p>BE Information Technology</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <FaLaptopCode className="about-icon" />
              <h4>Developer</h4>
              <p>Full Stack Development</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaRobot className="about-icon" />
              <h4>AI Enthusiast</h4>
              <p>AI Powered Applications</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div
              className="about-card"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaDatabase className="about-icon" />
              <h4>Database</h4>
              <p>MySQL & PostgreSQL</p>
            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default About;