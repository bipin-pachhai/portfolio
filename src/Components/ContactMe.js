import React from "react";
//Images
import github from "../images/githubdark.png";
import linkedin from "../images/linkedin.png";
import email from "../images/emaildark.png";
import snapchat from "../images/snapchatdark.jpg";

function ContactMe() {
  return (
    <div className="container mt-5  m-lg-2 mt-lg-0 fly-in">
      <div className="row">
        <div className="col-lg-4 mb-3">
          <div>
            <span className="logo text-white font-weight-bolder">
              Let's Connect:
            </span>
            <div className="d-flex flex-wrap flex-lg-column">
              <div className="logo">
                <a
                  href="https://github.com/bipin-pachhai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={github} /> GitHub
                </a>
              </div>
              <div className="logo">
                <a
                  href="https://www.linkedin.com/in/bipin-pachhai-416339152/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={linkedin} />{" "}
                  LinkedIn
                </a>
              </div>
              <div className="logo">
                <a
                  href="https://www.snapchat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={snapchat} />{" "}
                  Snapchat
                </a>
              </div>
              <div className="logo">
                <a
                  target="_blank"
                  href={`mailto:{bipinpachhai@gmail.com}`}
                  rel="noopener noreferrer"
                >
                  <img alt="logo" className="logoImage" src={email} /> Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="formsection d-block w-100">
            <span className="formgroup" style={{ fontSize: "20px" }}>
              {" "}
              Contact Bipin Pachhai:{" "}
            </span>
            <form className="formgroup">
              <div className="d-flex flex-row">
                <div className="form-group m-1 w-50">
                  <label> Your Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group m-1 w-50">
                  <label>Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group mt-1">
                <label>Subject:</label>
                <input
                  className="form-control mt-1"
                  type="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group mt-1">
                <label>Message:</label>
                <textarea
                  className="form-control mt-1"
                  rows="4"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                className="btn btn-secondary border-dark text-light mt-2"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
