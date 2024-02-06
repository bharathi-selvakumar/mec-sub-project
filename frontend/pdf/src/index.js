import React from 'react';
import ReactDOM from 'react-dom/client';
//import Participation from './participant';
//import Internship from './internship';
//import TechTalk from './sesta_techtalk_front';
//import NPTEL from './nptel';
//import Online from './Online_certificate';
import Guidance from './setaf_student_guidance_frontend';
import { Conference } from './setaf_conference_publication_frontend';
//import Paper_presentation from './setaf_student_motivation_for_paper_presentation';
//import Collabrative from './collabrative';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    
    {/* <Collabrative/> */}
    {/* <Online/> */}
    {/* <Participation/> */}
    {/* <Internship/> */}
    {/* <TechTalk/> */}
    {/* <Guidance/> */}
    {/* <Paper_presentation/> */}
    <Conference/>
    
  
  </>
);
