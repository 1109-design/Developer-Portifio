import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tinashe Chaitezvi </span>
            from <span className="purple"> Harare, Zimbabwe.</span>
         
            I am currently employed as a software developer at
            LADS Africa.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Freelancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Going out with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Unless the Lord builds the house,
             those who build it labor in vain.
             Unless the Lord watches over the city,
             the watchman stays awake in vain."{" "}
          </p>
          <footer className="blockquote-footer">Psalm 127 vs 1</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
