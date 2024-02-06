import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./main.css"
 export const Paper_presentation=()=>{
  
  const [paper,setpaper]=useState({
    "academic_year":"",
    "semester":"",
    "name_of_the_faculty":"",
    "name_of_the_student":"",
    "paper_presentation_and_project_submission_and_other_contest":"",
    "date":"",
    "no_of_beneficiaries":"",
    "attachments":"",
    "certificate_pdf":""		
    })
 
console.log(paper)
  const handlechange=(e)=>{
      setpaper((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
    
  const handleclick=async(e)=>{
    e.preventDefault()
     try{
    //   alert(paper_presentation)
      await axios.post(`http://localhost:1995/insert`,paper)
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
            <div className='head'><h1>Student Motivation For Paper Presentation</h1></div>
              <div  className='content' >
                <table>
                <tr>
                  <td>
                  <label >Academic year </label>
                  <select name="academic_year"  onClick={handlechange} value={setpaper.academic_year}>
                  <option ></option>
                  <option >2022-23</option>
                  <option >2023-24</option>
                  </select>
                  </td>
                </tr>
               
         
                <tr>  
                <td>
                  <label>Semester </label>
                  <select name="semester" onClick={handlechange} value={setpaper.semester}>
                  <option></option>
                  <option >ODD</option>
                  <option >EVEN</option>
                  </select>
                  </td>
                </tr>
               

                <tr>
                <td>
                  <label>Name of the Faculty</label>
                  <input type='text' name='name_of_the_faculty'  value={setpaper.name_of_the_faculty} placeholder=''  onChange={handlechange}/></td>
                </tr>

                <tr>
                <td>
                  <label>Name of the student</label>
                  <input type='text' name='name_of_the_student'  value={setpaper.name_of_the_student} placeholder=''  onChange={handlechange}/></td>
                </tr>
               

                <tr>
                <td>
                  <label> Paper Presentation and Project Submission and Other Contest</label>
                  <input type='text' name='paper_presentation_and_project_submission_and_other_contest' value={setpaper.paper_presentation_and_project_submission_and_other_contest} placeholder='' onChange={handlechange}  /></td>
                </tr>
               

                <tr>
                <td>
                  <label>  Date</label>
                  <input type='text' name='date'  value={setpaper.date} placeholder='' onChange={handlechange}  />
                </td>
                </tr>
               
           
                <tr>
                <td>
                  <label>No of Beneficiaries</label>
                  <input type='number' name='no_of_beneficiaries' value={setpaper.no_of_beneficiaries} placeholder='no_of_beneficiaries' onChange={handlechange}  /></td>
                </tr>
               
               
                <tr>
                  <label>Attachment</label>
                  <input type='file' name='attachement' value={setpaper.attachement} placeholder='Paste the Attachment 'onChange={handlechange}  />
                </tr>
               
           
                <tr>
                  <label>Certificate_PDF</label>
                  <input type='file' name='certificate_pdf' value={setpaper.certificate_pdf}  placeholder=' Paste Certificate-PDF'onChange={ handlechange}  />
                </tr>
               
              </table>
              </div>
              
         
                <button  className="submit" type='submit' name='submit' onClick={handleclick}>SUBMIT </button>
                <button  className='clear' type='reset' name='clear'>CLEAR</button>
          </div>
         
        </form>
      </div>
    </div>
  
  </>

  )
}
export default Paper_presentation;