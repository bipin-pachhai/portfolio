import React from "react";

function CertificateCard({
  title,
  credentialId,
  issuedBy,
  description,
  bgurl,
  url,
}) {
  return (
    <div
      className="m-2 p-3 col-12 col-md-5 text-light d-flex flex-column justify-content-center"
      style={{
        backgroundImage: `url(
          ${bgurl}
        )`,
        backgroundSize: "cover",
        borderRadius: "1em",
      }}
    >
      <div
        className="p-2 border border-light"
        style={{ backgroundColor: `rgba(0,0,0, 0.5)` }}
      >
        <h2 className="mb-2">{title}</h2>
        <h6 className="mb-2" style={{ color: "#ccc" }}>
          {credentialId}
        </h6>
        <h4 className="mb-2">
          {" "}
          <em>Issued By:</em> {issuedBy}
        </h4>
        <p style={{ color: "#ccc" }}>{description}</p>
        <div className="d-flex flex-row justify-content-end">
          <a href={url} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
