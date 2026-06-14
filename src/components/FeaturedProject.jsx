import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  FaRobot,
  FaMicrophone,
  FaCamera,
  FaDatabase,
  FaCoins,
  FaChartLine
} from "react-icons/fa";

function FeaturedProject() {
  return (
    <section className="featured-project" id="featured">
      <Container>

        <h2 className="section-title">
           Featured Project
        </h2>

        <div className="featured-card">

          <div className="featured-content">

            <span className="featured-badge">
              AI Powered Platform
            </span>

            <h2>
              AI Interview Mocker
            </h2>

            <p>
              An AI-powered mock interview platform that simulates
              real interview scenarios using Artificial Intelligence,
              Voice Recognition, Facial Expression Analysis and
              Automated Feedback Generation.
            </p>

            <div className="feature-grid">

              <div className="feature-item">
                <FaRobot />
                <span>Gemini AI Questions</span>
              </div>

              <div className="feature-item">
                <FaMicrophone />
                <span>Voice Recognition</span>
              </div>

              <div className="feature-item">
                <FaCamera />
                <span>Face Confidence Analysis</span>
              </div>

              <div className="feature-item">
                <FaChartLine />
                <span>AI Feedback & Scoring</span>
              </div>

              <div className="feature-item">
                <FaCoins />
                <span>Coin Based System</span>
              </div>

              <div className="feature-item">
                <FaDatabase />
                <span>PostgreSQL Storage</span>
              </div>

            </div>

            <div className="tech-stack">

              <span>Next.js 15</span>
              <span>TypeScript</span>
              <span>Gemini AI</span>
              <span>Clerk</span>
              <span>Neon DB</span>
              <span>PostgreSQL</span>
              <span>Drizzle ORM</span>
              <span>Face API</span>
              <span>Web Speech API</span>

            </div>

            <div className="project-buttons mt-4">

              <Button
                variant="info"
                href="https://ai-interview-black-one.vercel.app/dashboard"
                target="_blank"
              >
                Live Demo
              </Button>

              <Button
                variant="outline-light"
                href="https://github.com/Shravanibadabe/ai-interview"
                target="_blank"
                className="ms-3"
              >
                GitHub
              </Button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default FeaturedProject;