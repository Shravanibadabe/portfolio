import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "ATS Resume Analyzer",
    tech: "Next.js, Gemini AI, Tailwind CSS, PDF.js",
    desc: "AI-powered ATS Resume Analyzer that compares resumes against job descriptions, calculates ATS scores, identifies missing skills, and generates downloadable PDF reports.",
    github: "https://github.com/Shravanibadabe/ATS-Resume-Analyzer",
    demo: "https://ats-resume-analyzer-rust.vercel.app/",
  },
  {
    title: "AI Interview Mocker",
    tech: "Next.js, Gemini AI, PostgreSQL",
    desc: "AI-powered mock interview platform featuring voice-based interviews, Gemini AI evaluation, confidence detection, detailed feedback, and interview performance analytics.",
    github: "https://github.com/Shravanibadabe/ai-interview",
    demo: "https://ai-interview-black-one.vercel.app/dashboard",
  },
  {
    title: "Smart Loan Approval System",
    tech: "PHP, MySQL, JavaScript",
    desc: "Developed a machine learning-based loan approval prediction system that analyzes applicant data, predicts loan eligibility, classifies risk levels, and provides insights through an interactive dashboard.",
    github: "https://github.com/Shravanibadabe/smart_loan_system",
  },
  {
    title: "Import Export ERP System",
    tech: "JSP, Servlets, JDBC, MySQL",
    desc: "Built a full-stack ERP platform for seller registration, product management, order tracking, profile management, and reported product handling using MVC architecture and MySQL.",
    github:
      "https://github.com/Shravanibadabe/Import_export_erp_system-seller-",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title text-center mb-5">
          Projects
        </h2>

        <Row className="g-4 justify-content-center">
          {projects.map((project, index) => (
            <Col
              key={index}
              lg={6}
              md={6}
              sm={12}
              className="d-flex"
            >
              <Card className="project-card w-100 h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>

                  <Card.Text className="flex-grow-1">
                    {project.desc}
                  </Card.Text>

                  <small className="text-info">
                    {project.tech}
                  </small>

                  <div className="mt-3 d-flex gap-2 flex-wrap">
                    <Button
                      href={project.github}
                      target="_blank"
                      variant="outline-info"
                    >
                      GitHub
                    </Button>

                    {project.demo && (
                      <Button
                        href={project.demo}
                        target="_blank"
                        variant="primary"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
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