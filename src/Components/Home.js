import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';
import Typical   from "react-typical";
import profile from '../images/profile.jpg';



const Home = ({ property }) => {  
  const secondline = `function exploreWorld(){`;
  const thirdline =  `if(dead === true)`;
  const forthline =   `return;`;
  const fifthline =   `exploreWorld();`;
  const sixthline =    `}`;
  const particleOptions = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 700,
        },
      },
      color: {
        value: '#1F2F3D',
      },
    },
  };


  return (
      
        <div className = "container-fluid">
          <Particles  className='particles' params={particleOptions}/>
          <div className ="row">
          <div className = "col-md">
          <div class = "home">
          <div className='header'>
          <span>
           <Typical
             steps={[`console.log("Hello World!!");`, 500,`exploreWorld();` , 500]}
            loop={Infinity}
             wrapper="b"
           />
              </span>
              <p>
          {secondline}<br/>
          &nbsp;&nbsp;{thirdline}<br/>
          &nbsp;&nbsp;&nbsp;{forthline}<br/>
          &nbsp;&nbsp;{fifthline}<br/>
          {sixthline}<br/><br/>
            </p>
            </div>
            </div>
            
        </div>


           <div className = "col-md text-white"> 
           
           
           <div className='home-container'>
                  <div className = "image-container">
                  <img src={profile} alt='profile' />
                 </div>
                  <div className='intro'>
                  <div className = 'typecontainer'>
                  <p class="typing">
                   Hello World! I am an aspiring SWE and a sophomore at University of New Orleans.
                   I am interested in building and adding features on web and mobile applications.
                   I have experience in fullstack Web Development, Object-Oriented Programming and
                   problem-solving. I am looking for an internship role for growing my skills further
                    and gaining industry experience.
                  </p>
                  <div class="hiders">
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                   <p>&nbsp;</p>
                   <p>&nbsp;</p>
                   <p>&nbsp;</p>
                </div>  
                </div>
                </div>
                </div>         
           </div>  
          </div>
        </div>
  );
  
};
export default Home;