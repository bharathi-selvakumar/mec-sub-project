import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Online=()=>{

    const[symposium,setSymposium]=useState({
      "SESTA_ID":"",
      "Academic_year":"",
      "Semesters":"",
      "Department":"",
      "Name_of_the_Student":"",
      "Year":"",
      "Semester":"",
      "Section":"",
      "Online_Certification":"",
      "Name_of_the_Course":"",
      "Date":"",
      "Duration":"",
      "Details_of_the_Organization":""	,
      "Awards_Recognitions":"",
      "Outcome_of_the_Activity":""	
      })
    
      console.log(symposium)
    
      console.log(symposium)
      const handlechange=(e)=>{
          setSymposium((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
          }))
      }
        
      const callPropose=async(e)=>{
      
         try{
          await axios.post('http://localhost:2000/insert',symposium)
         
    
        }
      
        catch(err){
          console.log(err)
        } 
      }
    return(
        <>
        <div class="overallcontent" >
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head">
        <h1 class="recent-Articles" style={{color:'purple'}}><center>ONLINE CERTIFICATION</center></h1>
        
     </div>
     <div className="row justify-content-center"style={{justifyContent:'center'}}>

      <div className="ej">    
      <label>Academic Year:</label>
      <select value={setSymposium.Academic_year} name="Academic_year"  onClick={handlechange}>
                        <option >Select Academic Year</option>
                        <option >2022-23</option>
                        <option >2023-24</option>
                            
                        </select>

      <label>Semester :</label>
      <select name='Semesters' onClick={handlechange} value={setSymposium.Semesters}>
      <option >Select the semester.....</option>
        <option >Odd Sem</option>
        <option >Even Sem</option>
      </select><br />
      <label>Department :</label>
      <input type="text" name="Department"  onChange={handlechange} value={setSymposium.Department}/><br />

      <label>Name of the Student</label>
      <input type="text" name="Name_of_the_Student" onChange={handlechange} value={setSymposium.Name_of_the_Student} /><br />

      <label>Year :</label>
      <select name='Year' onClick={handlechange} value={setSymposium.Year}>
      <option >Select the Year...</option>
        <option >I</option>
        <option >II</option>
        <option >III</option>
        <option >IV</option>
      </select><br />

      <label>Semester :</label>
      <select onClick={handlechange} value={setSymposium.Semester} name='Semester'>
      <option >Select the Semester</option>
        <option >1</option>
        <option >2</option>
        <option >3</option>
        <option >4</option>
        <option>5</option>
        <option >6</option>
        <option >7</option>
        <option >8</option>
      </select><br />

      <label>Section :</label>
      <select onClick={handlechange} value={setSymposium.Section} name='Section'>
      <option >Select the Section...</option>
        <option >A</option>
        <option >B</option>
        <option >C</option>
        </select><br/>

        <label>Online Certification :</label>
      <select onClick={handlechange} value={setSymposium.Online_Certification} name='Online_Certification'>
      <option >Certificate Type...</option>
        <option >Technical</option>
        <option >General Topic</option>
        
      </select><br />



      <label htmlFor="guest_email">Name of the Course</label>
      <input type="text" name="Name_of_the_Course"  onChange={handlechange} value={setSymposium.Name_of_the_Course} /><br />
      <div className="form group">
      <label htmlFor="event_date">Date:</label>
      <input type="date" name="Date"   onChange={handlechange}  value={setSymposium.Date}required /><br /></div>


      <label htmlFor="guest_email">Duration</label>
      <input type="text" name="Duration" onChange={handlechange} value={setSymposium.Duration}/><br />
      <label htmlFor="guest_email">Details of the Organization</label>
      <input type="text" name="Details_of_the_Organization"   onChange={handlechange} value={setSymposium.Details_of_the_Organization}/><br />
      <label htmlFor="guest_email">Awards and Recognitions</label>
      <input type="text" name="Awards_Recognitions"  onChange={handlechange} value={setSymposium.Awards_Recognitions} /><br />
      <label htmlFor="guest_email">Outcome of the Activity</label>
      <input type="text" name="Outcome_of_the_Activity"  onChange={handlechange} value={setSymposium.Outcome_of_the_Activity}/><br />
      <label htmlFor="guest_email">Attachments</label>
      <input type="file" name="guest_email"  onChange={handlechange}/><br />
      <label htmlFor="guest_email">Student Techtalk Report First Page-PDF</label>
      <input type="file" name="guest_email"  onChange={handlechange}/><br /> 
    </div>
    
    <h1 style={{color:'red',}}></h1>
         
    <div className='ej'>
    <button  className="submit"type='submit' name='submit' onClick={callPropose}>SUBMIT </button>
      <button  className='clear' type='reset' name='clear'>CLEAR</button>
    </div>        
 </div>
 </div>
 </div>
        
  </>
    )
}
export default Online