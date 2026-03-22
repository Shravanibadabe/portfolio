import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const certificates = [
  { name: "Java", link: "https://drive.google.com/file/d/1H4P72wXefEyIdBCMRvIvUr86aGZ_j_Fw/view?usp=drive_link" },
  { name: "C", link: "https://drive.google.com/file/d/1eyAnzDwiWAxKh6049VGPu3IxPa2KO_Cg/view?usp=sharing"},
  { name: "C++", link: "https://drive.google.com/file/d/1lZXu5cQ-lCEK_pi8hMMAFFTIe_ArRlXn/view?usp=sharing" },
  { name: "Python", link: "https://drive.google.com/file/d/1-RTaqOgV8C_3Hjst709JBp3P-w_4f0Or/view?usp=drive_link" },
  { name: "HTML", link: "https://drive.google.com/file/d/1jFKQ72XPJ2pKGutUrHDxRKUVyVhlN3T2/view?usp=sharing" },
];

function Certifications() {
  return (
    <section id="certifications" className="section py-5">
      <Container>
        <h2 className="text-center mb-4">Certifications</h2>
        <Row className="justify-content-center">
          {certificates.map((cert, idx) => (
            <Col key={idx} xs={6} sm={4} md={2} className="mb-3 text-center">
              <Button
                href={cert.link}
                target="_blank"
                variant="success"
                className="w-100"
              >
                {cert.name}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;