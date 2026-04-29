import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const IconComponent = props.icon;

  return (
    <Card className="project-card-view">
      <Card.Body style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Icon at top */}
        {IconComponent && (
          <div style={{ fontSize: "3rem", marginBottom: "15px", color: "#c770f0" }}>
            <IconComponent />
          </div>
        )}

        <Card.Title>{props.title}</Card.Title>
        {props.subtitle && (
          <Card.Subtitle style={{ color: "#b8b9be", marginBottom: "10px", fontSize: "0.9rem" }}>
            {props.subtitle}
          </Card.Subtitle>
        )}

        <Card.Text style={{ textAlign: "justify", flex: 1 }}>
          {props.description}
        </Card.Text>

        {/* Technologies */}
        {props.technologies && props.technologies.length > 0 && (
          <div style={{ marginBottom: "15px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {props.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  fontSize: "0.75rem",
                  padding: "4px 8px",
                  backgroundColor: "#23283b",
                  borderRadius: "4px",
                  color: "#c770f0",
                  border: "1px solid #c770f0",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
