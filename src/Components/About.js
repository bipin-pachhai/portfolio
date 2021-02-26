import React, { Component } from 'react';
import './About.css';
import Particles from 'react-particles-js';

//Images
import github from '../images/githubdark.png';
import linkedin from '../images/linkedin.png';
import email from '../images/emaildark.png';
import snapchat from '../images/snapchatdark.jpg';

class About extends Component {
  render() {
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
          value: '##00FF00',
        },
      },
    };
  
    
    return( <div className ="container-fluid">
      <Particles  className='particles' params={particleOptions}/>
             
             <div className = "row">
               <div className = 'col-sm-4'>
                 {/* Let's connect section */}
                    <div className='contactsection'>
                    <span className = "logo text-white font-weight-bolder">
                      Let's Connect:
                    </span>
                    <div className='logo'>
                      <a
                        href='https://github.com/bipin-pachhai'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img alt='logo' className='logoImage' src={github} />
                        {' '}GitHub
                      </a>
                    </div>
                    <div className='logo'>
                      <a
                        href='https://www.linkedin.com/in/bipin-pachhai-416339152/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img alt='logo' className='logoImage' src={linkedin} />
                        {' '}LinkedIn
                      </a>
                    </div>
                    <div className='logo'>
                      <a
                        href='https://www.snapchat.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <img alt='logo' className='logoImage' src={snapchat} />
                        {' '}Snapchat
                      </a>
                    </div>
                    <div className='logo'>
                      <a target="_blank"
                              href={`mailto:{bipinpachhai@gmail.com}`}> <img alt='logo' className='logoImage' src={email} />
                    {' '} Gmail
                      </a>
                    </div> 
                </div>
               </div>

               <div className = 'col-sm-8'>
                {/* Let's connect section */}
                <div className='formsection bg-white'>
                  <span className= "formgroup justify-content-center"> Contact Bipin Pachhai: </span> 
                  <form className = "formgroup">
                      <div className= "form-group mb-3">
                      <label> Your Name:</label>
                      <input className="form-control"  type="text" id="name" placeholder="Name"/>
                      </div>
                      <div className="form-group mt-3">
                      <label>Email:</label>
                      <input  className="form-control" type="email" id="email" placeholder="Email"/>
                      </div>
                      <div className="form-group mt-4">
                      <label>Subject:</label>
                      <input className="form-control"  type="subject" id="subject" placeholder="Subject"/>
                      </div>
                      <div className="form-group">
                      <label>Message:</label>
                      <textarea className="form-control" rows="4" id="message" placeholder="Message"> </textarea>
                      </div>
                      <button className= "btn btn-primary mt-1" type="submit"> Send </button>
                      </form>
                </div>
                </div>
             </div>
             </div> 
    );
  }
}
export default About;
