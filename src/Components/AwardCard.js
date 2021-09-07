import React from "react";

function AwardCard({ title, subtitle, description, url }) {
  return (
    <div
      className="m-2 p-3 col-12 col-md-5 text-light border border-light"
      style={{ borderRadius: "1em" }}
    >
      <h2 className="mb-1">{title}</h2>
      <h4 className="mb-1">{subtitle}</h4>
      <p>{description}</p>
      <div className="d-flex flex-row justify-content-end">
        <a href={url} target= "_blank">View</a>
      </div>
    </div>
  );
}

export default AwardCard;
