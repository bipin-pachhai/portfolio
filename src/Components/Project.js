import React, { useState } from "react";
import "./Project.css";
import { projectlist } from "../projectlist";
import ProjectCard from "./ProjectCard";

const Project = () => {
  // const [projectid, setProjectid] = useState(0);
  const [imageid, setImageid] = useState(0);

  return (
    <div className="container mt-5 mb-5 d-flex flex-column justify-content-center">
      <h1 className="heading-decoration mb-5" data-aos="fade-in">
        <span>Personal Projects</span>
      </h1>
      {projectlist.items.map((project, index) => (
        <div className="row mb-5" data-aos="fade-up" key={index}>
          <div
            className={
              index % 2 === 0
                ? "col-12 col-lg-6 text-white d-flex flex-column justify-content-center align-items-center"
                : "col-12 col-lg-6 order-lg-2 text-white d-flex flex-column justify-content-center align-items-center"
            }
          >
          <img
              className="image w-100 "
              height={index === 8 || index === 9 ? "600px" : ""}
              src={project.imageUrl[imageid] || project.imageUrl[0]}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-none p-1">
            <ProjectCard
              className="mt-3"
              details={projectlist.items[index]}
              index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
