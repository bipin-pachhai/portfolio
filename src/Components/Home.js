import React from "react";
import "./Home.css";
import Particles from "react-particles-js";
import particleConfig from "../config/particle-config";
import Typical from "react-typical";
import profile from "../images/home.jpg";
import Typewriter from "typewriter-effect";

const Home = ({ property }) => {
  const secondline = `function explore(){`;
  const thirdline = `if(dead === true)`;
  const forthline = `return;`;
  const fifthline = `explore();`;
  const sixthline = `}`;

  return (
    <div className="container-fluid homepage">
      <Particles className="particles" params={particleConfig} />
      <div className="row">
        <div className="col-md">
          <div className="home">
            <div className="header">
              <span>
                <Typical
                  steps={[
                    `console.log("Hello World!!");`,
                    500,
                    `explore();`,
                    500,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </span>
              <p>
                {secondline}
                <br />
                &nbsp;&nbsp;{thirdline}
                <br />
                &nbsp;&nbsp;&nbsp;{forthline}
                <br />
                &nbsp;&nbsp;{fifthline}
                <br />
                {sixthline}
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="col-md text-white">
          <div className="home-container">
            <div className="image-container">
              <img src={profile} alt="profile" />
            </div>
            <div className="intro">
              <div className="typecontainer">
                <Typewriter
                  options={{
                    strings: [
                      " Hello World! I am an aspiring Software Engineer and a rising Junior studying at University of New Orleans. I am interested in developing responsive web and mobile applications. I have experience in fullstack Web Development, Object-Oriented Programming and problem-solving.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 10,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Home;
