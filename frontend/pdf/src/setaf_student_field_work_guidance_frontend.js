import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./main.css"
 export const Guidance=()=>{
  
  const [guidance,setguidance]=useState({
    "academic_year":"",
    "semester":"",
    "name_of_the_faculty":"",
    "nature_of_guidance":"",
    "duration_form":"",
    "duration_to":"",
    " number_of_students_undertaking_the_field_project":0,
    "student_name":"",
    "attachments":"",
    "certificate_pdf":""		
    })
 
console.log(guidance)
  const handlechange=(e)=>{
      setguidance((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
    
  const handleclick=async(e)=>{
    e.preventDefault()
     try{
      //alert(guidance)
      await axios.post(`http://localhost:1998/insert`,guidance)
    }
  
      catch(err){
      console.log(err)
    } 
  }

  return (
  <>
  
    <div className='overallcontent'>
      <div className='style'>
        <form className='block' >
          <div className='font'>
            <div className='head'><h1>EVENT PROPOSAL</h1></div>
              <div  className='content' >
                <table>
                <tr>
                  <td>
                  <label >Academic year </label>
                  <select name="academic_year"  onClick={handlechange} value={setguidance.academic_year}>
                  <option ></option>
                  <option >2022-23</option>
                  <option >2023-24</option>
                  </select>
                  </td>
                </tr>
               
         
                <tr>  
                <td>
                  <label>Semester </label>
                  <select name="semester" onClick={handlechange} value={setguidance.semester}>
                  <option></option>
                  <option >ODD</option>
                  <option >EVEN</option>
                  </select>
                  </td>
                </tr>
               

                <tr>
                <td>
                  <label>Name of the Faculty</label>
                  <input type='text' name='name_of_the_faculty'  value={setguidance.name_of_the_faculty} placeholder=''  onChange={handlechange}/></td>
                </tr>
               

                <tr>
                <td>
                  <label> Nature of Guidance</label>
                  <select name="nature_of_guidance" onClick={handlechange} value={setguidance.nature_of_guidance}>
                  <option></option>
                  <option >Field Work</option>
                  <option >Interndhip</option>
                  <option>Student Project</option>
                  <option>Research Projects</option>
                  </select></td>
                </tr>
               

                <tr>
                <td>
                  <label>  Duration Form</label>
                  <input type='text' name='duration_form'  value={setguidance.duration_form} placeholder='' onChange={handlechange}  />
                </td>
                </tr>
               
           
                <tr>
                <td>
                  <label>Number of student undertaking the field/project//internship/research project,etc..,</label>
                  <input type='number' name='number_of_students_undertaking_the_field_project' value={setguidance.number_of_students_undertaking_the_field_project} placeholder='' onChange={handlechange}  /></td>
                </tr>
               
         
                <tr>
                <td>
                  <label>Student_Name</label>
                  <input type='text' name='student_name' value={setguidance.student_name} placeholder='' onChange={handlechange}  />
                  </td>
                </tr>
               
                <tr>
                  <label>Attachment</label>
                  <input type='file' name='attachement' value={setguidance.attachement} placeholder='Paste the attachment 'onChange={handlechange}  />
                </tr>
               
           
                <tr>
                  <label>Certificate_PDF</label>
                  <input type='file' name='certificate_pdf' value={setguidance.Certificate_pdf}  placeholder=' Paste Certificate-PDF'onChange={ handlechange}  />
                </tr>
               
              </table>
              </div>
              
         
                <button  className="submit"type='submit' name='submit' onClick={handleclick}>SUBMIT </button>
                <button  className='clear' type='reset' name='clear'>CLEAR</button>
          </div>
         
        </form>
      </div>
    </div>
  
  </>

  )
}
export default Guidance;