import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
 FaHtml5,
 FaCss3Alt,
 FaJs,
 FaReact,
 FaNodeJs,
 FaJava,
 FaGitAlt,
 FaGithub,
 FaDatabase
} from "react-icons/fa";

import {
 SiNextdotjs,
 SiMysql,
 SiPostgresql,
 SiTypescript
} from "react-icons/si";

const skills = [
 {icon:<FaHtml5/>,name:"HTML5"},
 {icon:<FaCss3Alt/>,name:"CSS3"},
 {icon:<FaJs/>,name:"JavaScript"},
 {icon:<SiTypescript/>,name:"TypeScript"},
 {icon:<FaReact/>,name:"React"},
 {icon:<SiNextdotjs/>,name:"Next.js"},
 {icon:<FaJava/>,name:"Java"},
 {icon:<FaNodeJs/>,name:"Node.js"},
 {icon:<SiMysql/>,name:"MySQL"},
 {icon:<SiPostgresql/>,name:"PostgreSQL"},
 {icon:<FaDatabase/>,name:"Database"},
 {icon:<FaGitAlt/>,name:"Git"},
 {icon:<FaGithub/>,name:"GitHub"},
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>

        <h2 className="section-title">
          Technical Skills
        </h2>

        <Row>

          {skills.map((skill,index)=>(

            <Col lg={3} md={4} sm={6} key={index}>

              <div className="skill-card">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h5>{skill.name}</h5>

              </div>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Skills;