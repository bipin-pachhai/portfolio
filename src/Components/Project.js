import React, {useState} from "react";
import './Project.css';
import {projectlist} from "../projectlist";
import ProjectCard from "./ProjectCard";
import leftslider from '../images/slideleft.png';
import rightslider from '../images/slideright.png';
//project media import
import chitchat from "../projectmedia/chitchat.gif";
import contactapp1 from "../projectmedia/contactapp1.gif";
import contactapp2 from "../projectmedia/contactapp1.gif";
import developerhub1 from "../projectmedia/developer-hub.gif";
import developerhub2 from "../projectmedia/developer-hub2.gif";
import flashapp from "../projectmedia/flashapp.gif";
import helloworldapp from "../projectmedia/hello-world.gif";
import todo from "../projectmedia/todo.gif";


const Project = ()=>{

    const imagelist = {
        projectid: [
            {
            imageid: [chitchat],
            },
            { imageid:[contactapp1, contactapp2],
             },
             {
               imageid: [developerhub1, developerhub2],
             },
             {
                imageid: [flashapp],
              },

              {
                imageid: [helloworldapp],
              },
              {
                imageid: [todo],
              },

        ],
        } 
    


    const [projectid, setProjectid] = useState(0);
    const [imageid, setImageid]  = useState(0);
    

    return(
        <div className="container-fluid"> 
         
            <div className ="row">
                <div className="col-1">
                  <img className="slider" src= {leftslider} onClick = {()=>{
                      (projectid == 0) ? setProjectid(projectlist.items.length-1): setProjectid(projectid-1)
                  }} />
                </div>
                {/* First Column Project Image*/ }
                <div className ="col-md-5 text-white h-75" >
                <img className="image" src={imagelist.projectid[projectid].imageid[imageid]} alt=""/>
                    
                    <button className='btn btn-inline m-1 mr-3 p-1 btn-primary border-success float-right w-25' onClick = {()=>{
                        (imageid == imagelist.projectid[projectid].imageid.length-1) ? setImageid(0): setImageid(imageid+1)

                    }}>Switch Image</button>
                     
                </div>

                {/* Second Column Project Description*/ }
                <div className= "col-md-5 bg-secondary mt-4 p-1 h-100">
                   <ProjectCard className="mt-3" details = {projectlist.items[projectid]} />       
               </div>
               <div className="col-1">
               <img className="slider" src= {rightslider} onClick = {()=>{
                      (projectid == projectlist.items.length-1) ? setProjectid(0): setProjectid(projectid+1)
                  }}  />


               </div>
            </div>
            
        </div>
    );

}

export default Project;