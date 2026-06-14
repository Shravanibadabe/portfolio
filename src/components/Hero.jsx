import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>

        <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col lg={6}>
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="hero-tag">
                 Full Stack Developer
              </span>

              <h4>Hello, It's Me </h4>

              <h1>
  Shravani <br />
  <span>Badabe</span> | Full Stack Developer
</h1>

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "Java Backend Developer",
                  2000,
                  "AI Application Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="h2"
              />

              <p>
                Passionate Full Stack Developer specializing in
                React, Next.js, Java, MySQL, PostgreSQL and
                AI-powered applications.
                Building scalable, modern and user-friendly web
                experiences.
              </p>

              <div className="hero-buttons">

                <a
                  href="/Shravani Badabe.pdf"
                  download
                  className="btn btn-info"
                >
                  <FaDownload />
                  Download Resume
                </a>

                <a
                  href="#projects"
                  className="btn btn-outline-info"
                >
                  <FaArrowRight />
                  View Projects
                </a>

              </div>

              <div className="social-icons">

                <a href="tel:+918104226072">
                  <FaPhoneAlt />
                </a>

                <a href="mailto:badabeshravani@gmail.com">
                  <FaEnvelope />
                </a>

                <a
                  href="https://github.com/Shravanibadabe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/shravani-badabe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

              </div>
            </motion.div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6}>
            <motion.div
              className="hero-right text-center"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="profile-wrapper">

                <div className="glow-circle"></div>

                <img
                  src={profile}
                  alt="Shravani Badabe Full Stack Developer Portfolio"
                  className="profile-image"
                />

              </div>
            </motion.div>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Hero;