import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
{
title:"AI Interview Mocker",
tech:"Next.js, Gemini AI, PostgreSQL",
desc:"AI-powered mock interview platform.",
github:"https://github.com/Shravanibadabe/ai-interview",
demo:"https://ai-interview-black-one.vercel.app/dashboard"
},
{
title:"Smart Loan Approval System",
tech:"PHP, MySQL, JavaScript",
desc:"ML based loan approval prediction system.",
github:"https://github.com/Shravanibadabe/smart_loan_system"
},
{
title:"Import Export ERP System",
tech:"JSP, Servlets, JDBC, MySQL",
desc:"ERP management platform.",
github:"https://github.com/Shravanibadabe/Import_export_erp_system-seller-"
}
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>

        <h2 className="section-title">
          Projects
        </h2>

        <Row>

          {projects.map((project,index)=>(

            <Col md={4} key={index}>

              <Card className="project-card">

                <Card.Body>

                  <Card.Title>
                    {project.title}
                  </Card.Title>

                  <Card.Text>
                    {project.desc}
                  </Card.Text>

                  <small>
                    {project.tech}
                  </small>

                  <br /><br />

                  <Button
href={project.github}
target="_blank"
variant="outline-info"
>
GitHub
</Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Projects;