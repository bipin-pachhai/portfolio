import React from "react";
// import { Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./Components/Home";
import ResumePage from "./Components/ResumePage";
import Project from "./Components/Project";
import Blogs from "./Components/Blog";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/projects" component={Project} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
};
export default App;
