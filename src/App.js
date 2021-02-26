import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


// Components
import Home from "./Components/Home";
import ResumePage from "./Components/ResumePage";
import Project from "./Components/Project";
import Blogs from "./Components/Blog";
import About from "./Components/About";
import Navbar from "./Components/Navbar";


const App = ()=>{
    return(
    <Router>
          
      <Navbar/>     
     <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/resume" exact component={ResumePage} />
           <Route exact path="/projects" exact component={Project} />
           <Route exact path="/blogs" exact component={Blogs} />
           <Route exact path="/about" exact component={About} />
          
     </Switch>  
  </Router>
    )
}
export default App;