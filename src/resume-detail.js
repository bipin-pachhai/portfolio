import React from 'react';
import github from './images/githubdark.png';
import linkedin from './images/linkedin.png';
export const resumeConstant = [
  <div className='resume'>
    <div className='resume-links end-to-end'>
      {' '}
  
      <div className='location right-end'>
        {' '}
        <span className='logoImage'>
          <a
            href='https://github.com/bipin-pachhai'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='logo' className='logoImage' src={github} />
          </a>
        </span>
        <span className='logoImage'>
          <a
            href='https://www.linkedin.com/in/bipin-pachhai-416339152/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='logo' className='logoImage' src={linkedin} />
          </a>
        </span>
      </div>
    </div>
    <div className='highlight'>ABOUT</div>
    <div className='description'>
      {' '}
      I am an aspiring SWE and a sophomore at University of New Orleans. I am interested in building and adding features on web and
       mobile applications. I am currently seeking an internship role
       related to Computer Science and Technology for personal growth and hands-on industrial
      experience.
    </div>
    {/* education */}
    <div className='highlight'>EDUCATION</div>
    <div className='end-to-end'>
      {' '}
      <div className='sub-head left-end'>University of New Orleans</div>
      <div className='location right-end'> New Orleans, LA</div>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>
        Bachelor of Science, Computer Science
      </div>
      <div className='date'> Expected Graduation: May 2023</div>
    </div>
    <div className='sub-head right-end'> GPA: 3.939/4.0</div>
    {/* experience */}
    <div className='highlight'>EXPERIENCE</div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Information Technology Support</div>
      <div className='date right-end'> 01/2020 - 05/2020</div>
    </div>
    <div className='end-to-end'>
      <div className='left-end'>Earl K. Long Library, University of New Orleans</div>
      <div className='location right-end'>New Orleans, LA</div>
    </div>
    <div className='description'>
      {' '}
      <ul>
        <li>
          {' '}
          Fixed the hardware and software problems related to the printers, scanners, computers, and online
          printing services{' '}
        </li>
        <li>
        Installed new computers with OS and new software applications like MS Office packages, Adobe
        packages, etc. under the UNO domain. 
        </li>  
      </ul>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Data Entry</div>
      <div className='date right-end'> 04/2019-07/2019</div>
    </div>
    <div className='end-to-end'>
      <div className='left-end'>CloudFactory</div>
      <div className='location right-end'>Kathmandu, Nepal</div>
    </div>
    <div className='description'>
      {' '}
      <ul>
        <li>
          {' '}
          Worked with a team on project Embark to help tagging the lanes on the video clips
           of US highways to build a better lane detection and image recognition system for the self-driving trucks.{' '}
        </li>
        <li>
        Peer reviewed each other’s work, did quality check, and discussed the issues with the team on the
        workspace. 
        </li>  
      </ul>
    </div>
  </div>,

  // right side

  <div className='resume rightSide'>
    
    {/* projects */}
    <div className='highlight'>PROJECTS</div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Contact Book</div>
      <div className='date right-end'>
        {' '}
        <a
          href={''}
          target='_blank'
          rel='noopener noreferrer'
        >
         visit
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li> An react app that can add and keep track of authenticated users’ contact lists using Google authentication.</li>
        <li>
          Built using React and Firebase.
        </li>
      </ul>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Chitchat App</div>
      <div className='date right-end'>
        {' '}
        <a
          href={'https://fast-island-56533.herokuapp.com/'}
          target='_blank'
          rel='noopener noreferrer'
        >
          visit
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li>
        A full stack web app which has secured SignUp/Login with the authentication using passportJS, 
        and a real time chat room designed using Socket.IO.

        </li>
        <li>
          Ability to store users, sessions and past room chats on MongoDB database cluster.

        </li>
        
        <li>Built using Node.js, Express, MongoDB, and EJS as frontend template.</li>
      </ul>
    </div>
    <div className='end-to-end'>
      <div className='sub-head left-end'>Developer Hub</div>
      <div className='date right-end'>
        {' '}
        <a
          href={''}
          target='_blank'
          rel='noopener noreferrer'
        >
          visit
        </a>
      </div>
    </div>
    <div className='description'>
      <ul>
        <li>
        A MERN stack web application started as a part of class project to bring the like-minded CS students
        together so that they can collaborate on their projects and help each other.
        </li>
        <li>Provides option to create account and log in as a user using JSON web token authentication.</li>
        <li>Added GitHub API for listing popular repositories of all users to improve collaboration by better assisting
            a user to find projects of his/her interests. </li>
      </ul>
    </div>
   
    <div className='highlight'>SKILLS</div>

    <div className ='end-to-end'>
      <div className='sub-head left-end'>Languages:</div>
      <div className= 'description'>
      Java, JavaScript, Python, Assembly
      </div>  
    </div>

    <div className ='end-to-end'>
      <div className='sub-head left-end'>Technologies:</div>
      <div className= 'description'>
      CSS, Bootstrap, React, node.js, Express.js, MongoDB, Firebase, Docker
      </div>  
    </div>
    
    <div className ='end-to-end'>
      <div className='sub-head left-end'>Soft Skills:</div>
      <div className= 'description'>
      Agile Practice and Methodologies
      </div>  
    </div>
      

   

  </div>,
];
