import React from "react";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <Container>

        <h2 className="section-title">
          Experience
        </h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>
                Hybrid Application Development Intern
              </h3>

              <h5>SDAC Infotech</h5>

              <span>
                Jun 2025 - Aug 2025
              </span>

              <p>
                Built a full-stack Import Export ERP system
                using Java, JSP, Servlets, JDBC, MySQL,
                Bootstrap and MVC architecture.
              </p>

              <p>
                Developed modules for authentication,
                product management, orders,
                profile management and reporting.
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Experience;