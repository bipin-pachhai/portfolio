import React from 'react';
import './ResumePage.css';
import { resumeConstant } from '../resume-detail';


const ResumePage = ()=>{
    return(
   <div className = "container-fluid">
       <div className = "row">
           <div className = "col-md resume-container">
            {/* Left-side*/}
            {resumeConstant[0]} 
           </div>

            <div className = "col-md resume-container">
             {/* Right-side*/}
             {resumeConstant[1]} 

            </div>
 

       </div>

   </div>
   );
   


}

export default ResumePage;