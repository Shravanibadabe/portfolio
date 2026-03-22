import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 75 },
  { name: "Node.js", level: 60 },
  { name: "MySQL", level: 80 },
  { name: "Java", level: 75 },
];

function Skills() {
  return (
    <section id="skills" className="section py-5">
      <Container>
        <h2 className="text-center mb-4">Technical Skills</h2>
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-3">
            <h5>{skill.name}</h5>
            <ProgressBar now={skill.level} label={`${skill.level}%`} animated striped />
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Skills;