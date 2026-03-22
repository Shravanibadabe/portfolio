import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const projects = [
  {
    title: "Smart Loan Approval System",
    description: "Web-based loan prediction system with analytics dashboard, PDF & CSV export.",
    github: "https://github.com/Shravanibadabe/smart_loan_system",
    live: null,
  },
  {
    title: "Import–Export ERP System",
    description: "ERP system for managing products, orders, and users.",
    github: "https://github.com/Shravanibadabe/Import_export_erp_system-seller-",
    live: null,
  },
  {
    title: "Hotel Management System",
    description: "Room booking, customer management, and billing system.",
    github: "https://github.com/Shravanibadabe/Online_Restaurant_management_system_python",
    live: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projects.map((proj, index) => (
            <Col md={4} sm={6} className="mb-4" key={index}>
              <Card className="project-card h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="text-primary">{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Button
                      variant="outline-primary"
                      href={proj.github}
                      target="_blank"
                      size="sm"
                    >
                      GitHub
                    </Button>
                    {proj.live ? (
                      <Button variant="success" href={proj.live} target="_blank" size="sm">
                        Live
                      </Button>
                    ) : (
                      <Badge bg="warning text-dark">Coming Soon</Badge>
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