import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const certificates = [
  {
    name: "Java Programming",
    link: "https://drive.google.com/drive/folders/1g5WT2PM0AMW3Rs3HV7GELisJkqattORk"
  },
  {
    name: "Python Programming",
    link: "https://drive.google.com/drive/folders/1g5WT2PM0AMW3Rs3HV7GELisJkqattORk"
  },
  {
    name: "C Programming",
    link: "https://drive.google.com/drive/folders/1g5WT2PM0AMW3Rs3HV7GELisJkqattORk"
  },
  {
    name: "C++ Programming",
    link: "https://drive.google.com/drive/folders/1g5WT2PM0AMW3Rs3HV7GELisJkqattORk"
  },
  {
    name: "HTML Certification",
    link: "https://drive.google.com/drive/folders/1g5WT2PM0AMW3Rs3HV7GELisJkqattORk"
  }
];

function Certifications() {
  return (
    <section
  id="certifications"
  className="certifications-section"
>
      <Container>

        <h2 className="section-title">
          Certifications
        </h2>

        <Row>

          {certificates.map((cert,index)=>(

            <Col lg={4} md={6} key={index}>

              <div className="certificate-card">

                <h4>{cert.name}</h4>

                <Button
                  variant="info"
                  href={cert.link}
                  target="_blank"
                >
                  View Certificate
                </Button>

              </div>

            </Col>

          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Certifications;