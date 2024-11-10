import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../assets/css/portfolio.css";
import project1Image from "../assets/images/hero-image.svg";
import project2Image from "../assets/images/hero-image.svg";
import project3Image from "../assets/images/hero-image.svg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: project1Image,
      title: "Real Estate Project",
      description: "This is a real eststate project check it out.",
      link: "https://real-estate--project.vercel.app/",
    },
    {
      id: 2,
      image: project2Image,
      title: "Oasis & Oaks",
      description: "This is a website that will help you study abroad.",
      link: "https://oasisoaks.vercel.app/",
    },
    {
      id: 3,
      image: project3Image,
      title: "UI UX website",
      description: "check it out!.",
      link: "https://uiux-designers.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>
      <Row className="g-4">
        {projects.map((project) => (
          <Col key={project.id} md={4}>
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Portfolio;
