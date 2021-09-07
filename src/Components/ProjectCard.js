import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ details, index }) => {
  return (
    <div
      className={
        index % 2 === 0
          ? "mb-5 d-flex flex-column justify-content-center text-light align-items-center align-items-lg-end"
          : "mb-5 d-flex flex-column justify-content-center text-light align-items-center align-items-lg-start"
      }
    >
      <div className="d-flex flex-row align-items-center mb-2">
        <h3 style={{ color: "#ed462f" }}>{details.title}</h3>
        <a
          href={details.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ fontSize: "25px" }} />
        </a>
        <a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt style={{ fontSize: "25px" }} />
        </a>
      </div>
      <ul className="text-justify text-lg-start">
        {details.description.map((item, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <div className="container">
              <div className="row d-flex flex-row p-2">
                &#10148;
                <div className="col flex-grow-1">{item}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex flex-wrap">
        <span style={{ fontSize: "20px" }}>Technologies:</span>
        {details.technology.map((technology, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "silver",
              color: "black",
              margin: "5px",
              padding: "0 2px 0 2px",
              borderRadius: "4px",
              fontWeight: "bold",
              boxShadow: "1px",
            }}
          >
            {" "}
            {technology}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
