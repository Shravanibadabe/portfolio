import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Stats() {
  return (
    <section className="stats-section">

      <Container>

        <Row>

          <Col md={3}>
            <div className="stat-card">
              <h2>3+</h2>
              <p>Projects</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="stat-card">
              <h2>1</h2>
              <p>Internship</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="stat-card">
              <h2>15+</h2>
              <p>Technologies</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="stat-card">
              <h2>9+</h2>
              <p>CGPA</p>
            </div>
          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default Stats;