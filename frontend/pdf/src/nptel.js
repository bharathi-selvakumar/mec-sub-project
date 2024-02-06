import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const NPTEL=()=>{

    const [symposium,setsymposium]=useState({
        "SESTA_ID":0,
        "Academic_year":"",
        "Semesters":"",
        "Name_of_the_Student":"",
        "Academic_year_of_the_Student":"",
        "Semester":"",
        "Section":"",
        "Course_Name":"",
        "Year":"",
        "Session":"",
        "Score_obtained":0,
        "Certificate_Type":""
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
          await axios.post('http://localhost:1999/newrecord',symposium)
         
    
        }
      
        catch(err){
          console.log(err)
        } 
      }
    
    return(
        <>
        
        <div class="overallcontent" >
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>NPTEL CERTIFICATION</h1></div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
            <label>Academic year :</label>
            <select name="Academic_year" onClick={handlechange} value={setsymposium.Academic_year}>
            <option value="">Select The Academic Year .......</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            </select>

            <label>Semester:</label>
            <select name="Semesters" onClick={handlechange} value={setsymposium.Semesters}>
            <option value="">Select The Semester .......</option>
            <option value="ODD">ODD</option>
            <option value="EVEN">EVEN</option>
            </select>
        </div>
                
<div className="ej">
     <label >Name Of The Student :</label>
     <input  type="text" name="Name_of_the_Student" placeholder="Event Title" className="form-control"   onChange={handlechange} value={setsymposium.Name_of_the_Student}/>
     </div>
                    
   <div className="ej">
   <label >Academic Year Of The Student:</label>
   <input  type="text" name="Academic_year_of_the_Student" placeholder="Acadamic year" className="form-control"   onChange={handlechange} value={setsymposium.Academic_year_of_the_Student}/>

     </div>

   <div className="ej">
   <label >Semester</label>
    <select name='Semester' onClick={handlechange} value={setsymposium.Semester }>
    <option value="">Select The Semester</option>
    <option value="2022-23">2022-23</option>
    <option value="2023-24">2023-24</option>
    </select>
                            
     </div>  

     <div className="ej">
   <label >Section</label>
    <select  name="Section" onClick={handlechange} value={setsymposium.Section }>
    <option value="">Select The Secction</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
                            
     </div>
           

     <div className="ej">
     <label >Course Name :</label>
     <input  type="text" name="Course_Name" placeholder="course name" className="form-control" onChange={handlechange} value={setsymposium.Course_Name}/>
     </div>

     <div className="ej">
     <label >Year :</label>
     <input  type="text" name="Year" placeholder="year" className="form-control" onChange={handlechange} value={setsymposium.Year}/>
     </div>

     <div className="ej">
     <label >Session :</label>
     <input  type="text" name="Session" placeholder="Enter The Session" className="form-control"onChange={handlechange} value={setsymposium.Session}/>
     </div>

     <div className="ej">
     <label >Score Obtained :</label>
     <input  type="text" name="Score_obtained" placeholder="Score Obtained" className="form-control"onChange={handlechange} value={setsymposium.Score_obtained}/>
     </div>
     
     
     <div className="ej">
   <label >Certificate Type</label>
    <select  name="Certificate_Type" onClick={handlechange} value={setsymposium.Certificate_Type}>
    <option value="">select The Type</option>
    <option value="Gold">Gold</option>
    <option value="Silver">Silver</option>
    <option value="Elite">Elite</option>
    <option value="Successfully Completed">Successfully Completed</option>
    </select>                 
     </div>
     {/* <div className="ej">
     <label >Certificate-PDF</label>
     <input  type="file" />
     </div> */}
      <button  className="submit"type='submit' name='submit' onClick={callPropose}>SUBMIT </button>
      <button  className='clear' type='reset' name='clear'>CLEAR</button>
 </div>
 </div>
 
 </div>
        
        </>
    )
}
export default NPTEL