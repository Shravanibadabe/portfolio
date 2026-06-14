import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education-section">

      <Container>

        <h2 className="section-title">
          Education
        </h2>

        <div className="education-card">

          <FaGraduationCap className="edu-icon" />

          <h3>
            B.E Information Technology
          </h3>

          <h5>
            Pravin Rohidas Patil College
          </h5>

          <p>
            2023 - Present
          </p>

          <div className="cgpa-grid">

            <div>
              <span>Sem 1</span>
              <h4>8.0</h4>
            </div>

            <div>
              <span>Sem 2</span>
              <h4>9.05</h4>
            </div>

            <div>
              <span>Sem 3</span>
              <h4>9.04</h4>
            </div>

            <div>
              <span>Sem 4</span>
              <h4>10.0</h4>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Education;