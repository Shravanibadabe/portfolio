import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center lead">
          Detail-oriented B.E. IT student with strong expertise in frontend and web development.
          Skilled in building responsive, user-friendly web applications using HTML, CSS, JavaScript,
          and modern frameworks. Familiar with full-stack development, Node.js, and MVC architecture,
          along with hands-on experience in AI-based systems. Seeking a Frontend or Web Developer role
          to apply technical and problem-solving skills.
        </p>
      </Container>
    </section>
  );
}

export default About;