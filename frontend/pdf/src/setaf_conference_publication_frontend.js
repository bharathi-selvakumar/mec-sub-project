import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./main.css"
 export const Conference=()=>{
  
  const [conference,setconference]=useState({
            "academic_year":"",
        	"semester":"",
            "department":"",
            "name_of_the_authors":"",
            "title_of_the_conference_paper":"",
            "name_of_the_conference":"",
            "place_of_the_conference":"",
            "conference_type":"",
            "date_of_conference":"",
            "ISBN_of_the_conference_proceeding":"",
            "attachements":"",
            "conference_certificate_and_proceeding_pdf":""	
    })
 
console.log(conference)
  const handlechange=(e)=>{
      setconference((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
    
  const handleclick=async(e)=>{
    e.preventDefault()
     try{
      //alert(conference)
      await axios.post(`http://localhost:1993/insert`,conference)
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
            <div className='head'><h1>Conference Publication And Presentations</h1></div>
              <div  className='content' >
                <table>
                
                <tr>
                  <td>
                  <label >Academic year </label>
                  <select name="academic_year"  onClick={handlechange} value={setconference.academic_year}>
                  <option ></option>
                  <option >2022-23</option>
                  <option >2023-24</option>
                  </select>
                  </td>
                </tr>
               
         
                <tr>  
                <td>
                  <label>Semester </label>
                  <select name="semester" onClick={handlechange} value={setconference.semester}>
                  <option></option>
                  <option >ODD</option>
                  <option >EVEN</option>
                  </select>
                  </td>
                </tr>


                
                <tr>
                <td>
                  <label>Department</label>
                  <input type='text' name='department'  value={setconference.department} placeholder=''  onChange={handlechange}/></td>
                </tr>

                <tr>
                <td>
                  <label>Name of the Author's</label>
                  <input type='text' name='name_of_the_authors'  value={setconference.name_of_the_authors} placeholder=''  onChange={handlechange}/></td>
                </tr>
               
                <tr>
                <td>
                  <label>Title of the Conference</label>
                  <input type='text' name='title_of_the_conference_paper'  value={setconference.title_of_the_conference_paper} placeholder=''  onChange={handlechange}/></td>
                </tr>
               

                <tr>
                <td>
                  <label>Name of the Conference Paper</label>
                  <input type='text' name='name_of_the_conference'  value={setconference.name_of_the_conference} placeholder=''  onChange={handlechange}/></td>
                </tr>
               
                 <tr>
                <td>
                  <label> Place of the Conference</label>
                  <input type='text' name='place_of_the_conference'  value={setconference.place_of_the_conference} placeholder='' onChange={handlechange}  />
                </td>
                </tr>
               
           
                <tr>
                <td>
                  <label>Conference Type</label>
                  <select name="conference_type" onClick={handlechange} value={setconference.conference_type}>
                  <option></option>
                  <option >National</option>
                  <option >International</option>
                  </select></td>
                </tr>
               
         
                <tr>
                <td>
                  <label>Date of Conference</label>
                  <input type='text' name='date_of_conference' value={setconference.date_of_conference} placeholder='' onChange={handlechange}  />
                  </td>
                </tr>
               
                <tr>
                  <label>ISBN of the Conference Proceeding</label>
                  <input type='text' name='ISBN_of_the_conference_proceeding' value={setconference.ISBN_of_the_conference_proceeding} placeholder=' 'onChange={handlechange}  />
                </tr>

                <tr>
                  <label>Attachments</label>
                  <input type='file' name='attachement' value={setconference.attachement} placeholder='Paste the attachment 'onChange={handlechange}  />
                </tr>
               
           
                <tr>
                  <label>Conference Certificate and Certificate_pdf</label>
                  <input type='file' name='conference_certificate_and_proceeding_pdf' value={setconference.conference_certificate_and_proceeding_pdf}  placeholder='Paste Certificate-PDF'onChange={ handlechange}  />
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
export default Conference;