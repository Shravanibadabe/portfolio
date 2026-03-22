import React from "react";
import { Container, Button } from "react-bootstrap";

function Header() {
  return (
    <header className="header text-center text-white">
      <Container>
        <h1 className="animate__animated animate__fadeInDown">Shravani Rajaram Badabe</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          Frontend & Web Developer
        </p>
        <p>Bhayander, Mumbai | 📞 8104226072 | ✉️ badabeshravani@gmail.com</p>
        <Button
          href="https://github.com/Shravanibadabe"
          target="_blank"
          variant="primary"
          className="mt-3"
        >
          GitHub
        </Button>
      </Container>
    </header>
  );
}

export default Header;