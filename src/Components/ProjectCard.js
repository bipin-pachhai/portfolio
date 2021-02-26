import React from "react";

const ProjectCard = ({details})=>{
    return(
        <div className="card mt-3 justify-content-center h-75 ">
            <div className="card-header display-4">
                {details.title}
            </div>
            <div className="card-body p-1">
            <h3 className="card-title"> DESCRIPTION: </h3>
            <p className="card-text p-1">
            <ul>
              {details.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              </ul>
            </p>
            </div>
            <div className="card-footer">
            <small><b>Technologies:</b> {details.technology}</small>

            </div>
        </div>  
    );
}
export default ProjectCard;