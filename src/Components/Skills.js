import React from "react";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiPhp,
  DiPython,
  DiNodejs,
  DiMongodb,
  DiDart
} from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { SiMysql, SiPostgresql, SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <div className="container-lg mt-0 m-lg-0 mt-lg-0">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-between text-light fly-in">
          <div className="mb-3 p-3">
            <span style={{ fontSize: "25px" }} className="mb-1">
              FRONT-END
            </span>
            <br />
            <br />
            <div className="row d-flex flex-wrap justify-content-start">
              <DiHtml5
                fontSize="50px"
                color="#f06529"
                className="col-2 col-md-1"
              />
              <DiCss3
                fontSize="50px"
                color="#2965f1"
                className="col-2 col-md-1"
              />
              <DiJavascript1
                fontSize="50px"
                color="#f0db4f"
                className="col-2 col-md-1"
              />
              <DiBootstrap
                fontSize="50px"
                color="#563d7c"
                className="col-2 col-md-1"
              />
              <DiReact
                fontSize="50px"
                color=" #61DBFB"
                className="col-2 col-md-1"
              />
            
              <RiFlutterFill
                fontSize="50px"
                color=" #61DBFB"
                className="col-2 col-md-1"
              />
            </div>
          </div>
          <div className="mb-3 p-3">
            <span style={{ fontSize: "25px" }} className="mb-1">
              BACK-END
            </span>
            <br />
            <br />
            <div className="row d-flex flex-wrap justify-content-start">
              <DiPhp
                fontSize="60px"
                color=" #8993be"
                className="col-2 col-md-1"
              />
              <DiPython
                fontSize="50px"
                color=" #4B8BBE"
                className="col-2 col-md-1"
              />
              <DiNodejs
                fontSize="60px"
                color=" #3c873a"
                className="col-2 col-md-1"
              />
                     <SiFirebase
                fontSize="60px"
                color=" #336791"
                className="col-2 col-md-1"
              />
            </div>
          </div>
          <div className="mb-3 p-3">
            <span style={{ fontSize: "25px" }} className="mb-1">
              DATABASE
            </span>
            <br />
            <br />
            <div className="row d-flex flex-wrap justify-content-start">
              <SiMysql
                fontSize="60px"
                color=" #F29111"
                className="col-2 col-md-1"
              />
              <SiPostgresql
                fontSize="60px"
                color=" #336791"
                className="col-2 col-md-1"
              />
                <DiMongodb
                fontSize="50px"
                color=" #61DBFB"
                className="col-2 col-md-1"
              />
            </div>
          </div>
          <div className="mb-3 p-3">
            <span style={{ fontSize: "25px" }} className="mb-1">
              OTHERS
            </span>
            <br />
            <br />
            <div className="row d-flex flex-wrap justify-content-start">
            <img
                src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                alt="java"
                className="col-2 col-md-1"
                height="60px"
                width="60px"
                style={{ objectFit: "contain" }}
              />
              <img
                src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                alt="c++"
                className="col-2 col-md-1"
                height="60px"
                width="60px"
                style={{ objectFit: "contain" }}
              />
               <DiDart
                fontSize="50px"
                color="#f06529"
                className="col-2 col-md-1"
              />
          
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
