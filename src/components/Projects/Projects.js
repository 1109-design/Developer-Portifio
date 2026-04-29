import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import icons from react-icons
import {
  SiLaravel,
  SiReact,
  SiInertia,
  SiPhp,
  SiMysql,
  SiPython,
  SiGo,
  SiFlutter,
  SiFirebase,
  SiDart,
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "ProCom ERP",
      subtitle: "Hwange Property Company",
      description:
        "Enterprise-grade ERP system powering retail, supply chain, and finance operations.",
      technologies: ["Laravel", "React", "Inertia.js", "MySQL"],
      icon: SiLaravel,
      ghLink: null,
      demoLink: null,
    },
    {
      title: "Minera / Ndarama ERP",
      subtitle: "Custom Enterprise Platform",
      description:
        "Custom-architected ERP eliminating 80% of paperwork across Finance, HR & Procurement.",
      technologies: ["Laravel", "PHP", "MySQL", "React"],
      icon: SiPhp,
      ghLink: null,
      demoLink: null,
    },
    {
      title: "LUMINA",
      subtitle: "Award-Winning Capstone Project",
      description:
        "Lane Utilization Management & Intelligent Navigation Algorithm — dual prize winner.",
      technologies: ["Python", "Algorithm Design", "Optimization", "ML"],
      icon: SiPython,
      ghLink: null,
      demoLink: null,
    },
    {
      title: "Tardis",
      subtitle: "MySQL Database Sync Tool",
      description:
        "Transfer And Retrieve Database In Seconds — a one-click desktop app for MySQL database workflows on Ubuntu Linux.",
      technologies: ["Go", "Wails", "React", "SQLite"],
      icon: SiGo,
      ghLink: null,
      demoLink: null,
    },
    {
      title: "GoVPN",
      subtitle: "OpenVPN Desktop Client",
      description:
        "A lightweight OpenVPN client for Linux with multiple profiles, live stats, and automatic stale route cleanup.",
      technologies: ["Go", "Wails", "Vanilla JS", "OpenVPN"],
      icon: SiGo,
      ghLink: null,
      demoLink: null,
    },
    {
      title: "Flutter Mobile Apps",
      subtitle: "Personal Projects",
      description:
        "Cross-platform mobile apps built with Flutter — a Bible app and a password generator.",
      technologies: ["Flutter", "Dart", "Firebase", "Mobile"],
      icon: SiFlutter,
      ghLink: null,
      demoLink: null,
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Things I've <strong className="purple">Built</strong>
        </h1>
        <p style={{ color: "white" }}>
          From enterprise ERP systems to award-winning algorithms. Click any card to explore the details.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                icon={project.icon}
                isBlog={false}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                technologies={project.technologies}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
