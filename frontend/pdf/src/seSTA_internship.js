import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Internship=()=>{

    const[symposium,setsymposium]=useState({
        "Academic_year":"",
        "Semesters":"",
        "Department":"",	
        "Name_of_the_student":"",	
        "Year":"",
        "Semestar":"",
        "Section":"",	
        "Nature_of_Participantion":"",	
        "Title":"",	
        "Date":"",	
        "Duration":"",
        "Name_of_the_Organisation":"",
        "Name_of_the_contect_person":"",
        "Phone_number_of_contact_person": 0,
        "Email_ID_of_the_contact_person":"",
        "Website_of_Organisation":"",
        "Outcome_of_the_activity":""	

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
        await axios.post('http://localhost:2002/insert',symposium)
       
  
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
         <h1 class="recent-Articles" style={{color:'purple'}}>INTERNSHIP</h1>
        
     </div>
     <div className="row justify-content-center"style={{justifyContent:'center'}}>
  
     {/* <label htmlFor="event-type">Select Event Type:</label>
      <select id="event-type" onChange={handleChange} value={eventType}>
        <option value="seminar">Seminar</option>
        <option value="workshop">Workshop</option>
      </select> */}
       
   
     
  
     <div className="ej">
  
  
     {/* <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isSearchable
        placeholder="Select options..."
        closeMenuOnSelect={false} 
      /> */}
  
    
      {/* <CMultiSelect allowCreateOptions options={facultySelect} /> */}
     {/* <select name="cars" id="cars" multiple multiselect-hide-x="true">
  <option value="1">Audi</option>
  <option selected value="2">BMW</option>
  <option selected value="3">Mercedes</option>
  <option value="4">Volvo</option>
  <option value="5">Lexus</option>
  <option value="6">Tesla</option>
  </select> */}
  
     <label >Academic Year</label>
      <select name="Academic_year" value={setsymposium.Academic_year} onClick={handlechange} >
        <option ></option>
        <option >2022-2023</option>
        <option >2023-2024</option>
        <option >2024-2025</option>
  
      </select>
    
        
      
  
  
  
  
  
     {/* <label >Nature of
  </select> the event :</label>
  
                        <select name="event_name" className="form-select" value={seminar.event_name} onChange={infoCollect} style={{width:'80%'}}>
                        <option value="">Select Event Nature .......</option>
                        <option value="data_ecr_workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Conference">Conference</option>
                        <option value="Technical Symposium">Technical Symposium</option>
                        <option value="Guest Lecture">Guest Lecture</option>
                        <option value="FDP">FDP</option>
                        </select> */}
                    </div>
                    <div className="ej">
                        <label >Semesters</label>
                        <select name="Semesters" value={setsymposium.Semesters} onClick={handlechange} >
                        <option ></option>
                        <option >ODD</option>
                        <option >EVEN</option>
  
      </select>
                        </div>
            <div className="ej">
                        <label for="event_title">Department</label>
                        <input type="text" placeholder= "Enter your Department" className="form-control" value={setsymposium.Department} onChange={handlechange} name='Department'/>
                        
  
                    </div>
                    
                    <div className="ej">
                    <label for="event_organizer">Name of the student</label>
                    <input type="text" name="Name_of_the_student" placeholder= "Organizer Name" className="form-control" value={setsymposium.Name_of_the_student} onChange={handlechange}/>
                    </div>
  
                    <div className="ej">
      <label htmlFor="event_year">year</label>
      <input type="text" name="Year" required placeholder="Event time" className="form-control"  value={setsymposium.Year} onChange={handlechange}/><br />
      </div>
      <div className="ej">
      <label htmlFor="event_number">Semester</label>
      <select name="Semestar" value={setsymposium.Semestar} onChange={handlechange}>
        <option ></option>
        <option >1</option>
         <option >2</option> 
         <option >3</option>
         <option >4</option>
         <option >5</option>
         <option >6</option>
         <option >7</option>
         <option >8</option>
      </select><br />

      <label htmlFor="guest_address">Section</label>
      <input type="text" name="Section"  value={setsymposium.Section} onChange={handlechange}required /><br />
    
      </div>
       
      <div className="ej">
      <label htmlFor="guest_name">Name of the participation</label>
      <select name="Nature_of_Participantion" value={setsymposium.Nature_of_Participantion} onClick={handlechange}>
        <option value="0"></option>
        <option value="1">Research project</option>
        <option value="2">Internship</option>
        <option value="2">Field project</option>
        <option value="2">Minor project</option>
        <option value="2">Industrial visit</option>
        <option value="2">In plant Training</option>
  
  
      </select><br />
      </div>
    
  
      
      <div className="ej">
      <label htmlFor="guest_designation">Title</label>
      <input type="text" name="Title"  value={setsymposium.Title} onChange={handlechange}required /><br />
      </div>

      <div className="ej">
      <label htmlFor="event_date">Date</label>
      <input type="date" name="Date"  value={setsymposium.Date} onChange={handlechange}required /><br /> 
  
     
  
      <label htmlFor="guest_phone_number">Duration</label>
      <input type="text" name="Duration" value={setsymposium.Duration} onChange={handlechange}/><br />
  
      <label htmlFor="guest_email">Name of the Organisation</label>
      <input type="text" name="Name_of_the_Organisation" value={setsymposium.Name_of_the_Organisation} onChange={handlechange} /><br />
  
      
      <label htmlFor="student_count">Name of the Contact Person</label>
      <input type="text" name="Name_of_the_contect_person" value={setsymposium.Name_of_the_contect_person} onChange={handlechange} /><br />
  
      <label htmlFor="faculty_count">phone number of Contact Person</label>
      <input type="text" name="Phone_number_of_contact_person" value={setsymposium.Phone_number_of_contact_person} onChange={handlechange} /><br />
  
      <label htmlFor="others_count">EMAILID of Contact Person</label>
      <input type="text" name="Email_ID_of_the_contact_person" value={setsymposium.Email_ID_of_the_contact_person} onChange={handlechange} /><br />
  
      <label htmlFor="event_budget">Website Of Organisation</label>
      <input type="text" name="Website_of_Organisation" value={setsymposium.Website_of_Organisation} onChange={handlechange} /><br />
  
      <label htmlFor="event_budget">Outcome of the Activity</label>
      <input type="text" name="Outcome_of_the_activity" value={setsymposium.Outcome_of_the_activity} onChange={handlechange} /><br />
  
  
      {/* <label >Attachments:</label>
      <input type="number" name="event_budget" /><br />
  
      <label >Certificate-PDF</label>
      <input type="File" name="event_budget" /><br />
   */}
  
  
      
      {/* <label htmlFor="dept_id">Department:</label>
      <select name="dept_id" value={seminar.dept_id} onChange={infoCollect}>
      <option value="">Select Department ......</option>
        <option value="1">CSE</option>
        <option value="2">ECE</option>
        <option value="3">EEE</option>
        <option value="4">IT</option>
        <option value="5">CY</option>
        <option value="6">AIDS</option>
      </select><br /> */}
  
      {/* <label>Event Coordinator</label>
                        <select name="event_coordinator" className="form group" onChange={handleChange} value={selectedOptions}>
                        <option value="">Select Faculty</option>
                            {
                                proposable.map((val,key)=>{
                                    return (<option value={val.faculty_id}>{val.faculty_id}{'-'}{val.faculty_name}{'-'}{val.dept}</option>)
                                })
                            }
                        </select> */}
  
        
      
  
        
      
      
   
     
  
      
    </div>
    <div className='ej'>
    <button  className="submit"type='submit' name='submit' onClick={callPropose}>SUBMIT </button>
      <button  className='clear' type='reset' name='clear'>CLEAR</button>
    </div>    
    
  
    
         
         {/* <label for="coll">Colloborating`/Sponsored Agency:</label>
         <input type="text" name="coll" required/><br/>
         <label for="date">Date of The Event Planned:</label>
         <input type="date" name="date" required/><br/>
         <label for="venue">Venue : </label>
  <select name="venue">
  <option value="Seminar Hall I">Seminar Hall I</option>
  <option value="Seminar Hall II">Seminar Hall II</option>
  <option value="Cloud Computing Lab">Cloud Computing Lab</option>
  <option value="Data Analytics Lab">Data Analytics Lab</option>
  
  </select><br/>
         <h1>Details of The Guest</h1>
         <label for="Name">Name:</label>
         <input type="text" name="Name" required/><br/>
         <label for="designation">Designation:</label>
         <input type="text" name="designation" required/><br/>
         <label for="address">Address:</label>
         <input type="text" name="address" required/><br/>
         <label for="number">Mobile Number:</label>
         <input type="number" name="number" required/><br/>
         <label for="mail">Mail ids</label>
         <input type="text" name="mail" required/><br/>
         <h1>No of Participants (Expected)</h1>
         <label for="mecs">MEC Students:</label>
         <input type="number" name="mecs" required/><br/>
         <label for="mecf">MEC Faculty:</label>
         <input type="text" name="mecf" required/><br/>
         <label for="others">Others:</label>
         <input type="text" name="others" required/><br/>
         <label for="others">Proposed Budget:</label>
         <input type="text" name="budget" required/><br/>
         <h1>Co-ordinator of the Event</h1>
         <label for="Name">Name:</label>
         <input type="text" name="CName" required><br>
         <label for="designation">Academic Year:</label>
         <input type="text" name="year" required><br>
         <label for="sem">Semester :</label>
  <select name="sem">
  <option value="ODD ">Odd Sem</option>
  <option value="EVEN">even Sem</option>
  </select><br>
         <label for="department">Department:</label>
  <select name="dept">
  <option value="CSE">CSE</option>
  <option value="ECE">ECE</option>
  <option value="EEE">EEE</option>
  <option value="IT">IT</option>
  <option value="CY">CY</option>
  <option value="AIDS">AIDS</option>
  </select><br/>
  
        
  
                      <input type="submit" value="Submit"/> */}
         
    
      
  </div>
  </div>
  
  </div>
        
        </>
    )
}
export default Internship