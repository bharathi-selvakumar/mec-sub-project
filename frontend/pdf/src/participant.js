import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Participation=()=>{

    const[symposium,setsymposium]=useState({
        "Academic_year":"",
        "Semesters":"",
        "Department":""	,
        "Name_of_the_Student":"",
        "Year":"",
        "Semester":"",
        "Section":"",
        "Nature_of_participation":"",
        "Name_of_the_program":"",
        "Date":"",	
        "Duration":"",
        "Name_of_the_Organization":"",
        "Awards_and_Recognitions":""	

      })
    
    
      console.log(symposium)
      const handlechange=(e)=>{
          setsymposium((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
          }))
      }
        
      const callPropose=async(e)=>{
      
         try{
          await axios.post('http://localhost:2001/insert',symposium)
         
    
        }
      
        catch(err){
          console.log(err)
        } 
      }
    
    
        
    return(
        <>
        <div className="style" style={{justifyContent:'center'}}>
           <div class="head">
             <h1 class="recent-Articles" style={{color:'purple'}}>STUDENT PARTICIPATION</h1>
           </div>

           <div className="row justify-content-center"style={{justifyContent:'center'}}>
           <div className="ej">
              <label>Academic Year</label>
              <select name="Academic_year" onClick={handlechange} value={setsymposium.Academic_year}>
                <option value="">Select Academic Year</option>
                <option >2022-23</option>
                <option >2023-24</option>
              </select>
            </div>

            <div className="ej">
              <label>Semester</label>
              <select name="Semesters" onClick={handlechange} value={setsymposium.Semesters} >
                <option value="">Select Semester</option>
                <option >ODD</option>
                <option >EVEN</option>
              </select>
            </div>

            <div className="ej">
               <label>Department</label>
               <input type="text" placeholder="Enter Your Department" value={setsymposium.Department} name='Department' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Name of the Student</label>
               <input type="text" placeholder="Enter Your Student" onChange={handlechange} name='Name_of_the _Student' value={setsymposium.Name_of_the_Student}/>
            </div>

            <div className="ej">
               <label>Year</label>
               <input type="text" placeholder="Enter Your Year" value={setsymposium.Year} name='Year' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Semester</label>
               <input type="text" placeholder="Enter Your Semester" value={setsymposium.Semester} name='Semester' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Section</label>
               <input type="text" placeholder="Enter Your Section" value={setsymposium.Section} name='Section' onChange={handlechange}/>
            </div>

            <div className="ej">
              <label>Nature of Participation</label>
              <select name="Nature_of_participation" value={setsymposium.Nature_of_participation} onClick={handlechange}>
                <option value="">Select the Participation</option>
                <option value="Seminar">Seminar</option>
                <option value="Workshop">Workshop</option>
                <option value="Paper Presentation">Paper Presentation</option>
                <option value="Project Contest">Project Contest</option>
                <option value="Sports">Sports</option>
                <option value="Outreach Program">Outreach Program</option>
              </select>
            </div>

            <div className="ej">
               <label>Name of the Program</label>
               <input type="text" placeholder="Enter the Program" value={setsymposium.Name_of_the_program} name='Name_of_the_program' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Date</label>
               <input type="date" value={setsymposium.Date} name='Date' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Duration</label>
               <input type="text" placeholder="Enter the Timing" value={setsymposium.Duration} name='Duration' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Name of the Organization</label>
               <input type="text" placeholder="Enter the Organisation Name" value={setsymposium.Name_of_the_Organization} name='Name_of_the_Organization' onChange={handlechange}/>
            </div>

            <div className="ej">
               <label>Awards and Recognitions</label>
               <input type="text" placeholder="Enter the Prize" value={setsymposium.Awards_and_Recognitions} name='Awards_and_Recognitions' onChange={handlechange}/>
            </div>
{/* 
            <div className="ej">
               <label>Certificates-pdf</label>
               <input type="file"/>
            </div> */}
            <div className='ej'>
    <button  className="submit"type='submit' name='submit' onClick={callPropose}>SUBMIT </button>
      <button  className='clear' type='reset' name='clear'>CLEAR</button>
    </div>    
           </div>
         </div>

        </>
    )
}
export default Participation