import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {GiVikingHead} from "react-icons/gi";

const Navbar = () => {
  return (
    <ReactBootstrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="transparent"
    >
      <ReactBootstrap.Container fluid>
        <ReactBootstrap.Navbar.Brand>
        <GiVikingHead
                fontSize="50px"
                color="#f06529"
                className="p-2"
              />
          Bipin Pachhai
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="me-auto"></ReactBootstrap.Nav>
          <ReactBootstrap.Nav className="ml-auto">
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/projects">
              Projects
            </Link>
            <Link className="navLink" to="/resume">
              Resume
            </Link>
            <Link className="navLink" to="/blogs">
              Blogs
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  );
};

export default Navbar;
