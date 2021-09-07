import React from "react";
import Particles from "react-particles-js";
import "./Blog.css";
import { blogs } from "../blogslist";

const Blogs = () => {
  const particleOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: "#1F2F3D",
      },
    },
  };
 
    return (
    <div className=" text-white font-weight-bolder mt-0 text-center p-4">
      <Particles className="particles" params={particleOptions} />
      <div className="pt-3 pb-3">
        <div className="container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="col-12 col-md-6 mb-none mb-md-5 "
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="portfolio-project-card p-2 m-2">
                  <img
                    src={blog.blogImgurl}
                    alt="..."
                    className="portfolio-projrct-img w-100 mb-2"
                  />
                  <h1 className="project-title">{blog.title}</h1>
                  <p className="project-para">{blog.description}</p>
                  <a
                    href={blog.url}
                    target="_blank"
                    className="project-link mb-2"
                    rel="noopener noreferrer"
                  >
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
