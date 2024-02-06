
import React ,{ useState} from 'react';
//import './app.css';

function Collabrative() {
     const [collabrative,setcollabrative]=useState({
         "academic_year":"",
    	   "semester":"",
           "name_of_the_faculty_coordinator":"",	
           "nature_of_the_activity":"",	
           "name_of_MoU_signed_industry_or_institution":"",
           "title_of_the_activity":"",
           "duration_from":"",
           "duration_to":"",
           "name_of_resource_person":"",
           "contact_details_of_resource_person":"",
           "designation_of_resource_person":"",
           "organization_details_of_resource_person":"",
           "No_of_beneficiaries":"",
           "Attachments":"",
           "Enclose_Proof_PDF":""	

        })
     
    console.log(collabrative)
      const handlechange=(e)=>{
          setcollabrative((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
          }))
      }
        
      const handleclick=async(e)=>{
         try{
          await axios.post('http://localhost:1998/insert',collabrative)
        }
      
          catch(err){
          console.log("There is a problem in axios connection")
        } 
      }



  return (
    <>
    <div className='overallcontent'>
    <div className="style" style={{justifyContent:'center'}}>
    <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>COLLABRATIVE ACTIVITIES</h1></div>
    <div className="row justify-content-center"style={{justifyContent:'center'}}>
    <div className="ej">
       <label>Academic Year</label>
       <select value={setcollabrative.academic_year} name='academic_year' onClick={handlechange}>
           <option value="">Select the Academic Year</option>
           <option value="0">2022-23</option>
           <option value="1">2023-24</option>
       </select>

       <label>Semester</label>
       <select name='semester' value={setcollabrative.semester} onClick={handlechange}>
           <option value="">Select the Semester</option>
           <option value="0">Odd Sem</option>
           <option value="1">Even Sem</option>
       </select>

       <label>Name of the Faculty Coordinator</label>
       <input type="text" placeholder="Enter the Name" value={setcollabrative.name_of_the_faculty_coordinator} name='name_of_the_faculty_coordinator' onChange={handlechange}/>

       <label>Nature of the Activity</label>
       <select>
           <option value="">Select the Activity</option>
           <option value="0">Workshop</option>
           <option value="1">Seminar</option>
           <option value="2">Internship</option>
           <option value="3">In plant Training</option>
           <option value="4">Industrial Visit</option>
           <option value="5">Student Exchange</option>
           <option value="6">Faculty Exchange</option>
       </select>


       
       <label>Name of MOU Signed Industry/Institution</label>
       <input type="text" placeholder="" value={setcollabrative.nature_of_the_activity} name='nature_of_the_activity' onChange={handlechange} />

      

       <label>Title of the Activity</label>
       <input type="text" placeholder=""name=''/>

       <label>Duration From</label>
       <input type="date" placeholder="Duration From"/>

       <label>Duration To</label>
       <input type="time" placeholder="Duration To"/>

       <label>Name of the Resource Person </label>
       <input type="text" placeholder="Name of the Resource Person"/>

       <label>Contact Details of Resource Person</label>
       <input type="text" placeholder="Contact Details"/>

       <label>Designation of Resource Person</label>
       <input type="text" placeholder="Designation of Resource Person"/>

       <label>Orgnization Details of Resource Person</label>
       <input type="text" placeholder="Orgnization Details of Resource Person"/>

       <label>No of Benificiaries</label>
       <input type="text" placeholder="No of Benificiaries"/>

      

       <label>Attachments</label>
       <label>Enclose Proof- PDF</label>
       <input type="file"/>
    </div>
    {/* <h1 style={{color:'red'}}></h1> */}
    <div className='row mt-5 justify-content-around'>
     <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
     <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
    </div> 
   
    </div>
    </div>
    </div>
   </>
  )
}

export default Collabrative