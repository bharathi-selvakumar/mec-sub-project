const express = require('express')
const refMysql=require('mysql2')
const bodyParser = require("body-parser")

const cors =require('cors')

const app = express()
const port=1998


const db=refMysql.createConnection({
    host:"localhost",
    user:"root",
    database:"mec_report_management",
    port:"3306",
    password:""
})
db.connect(() => {
        console.log('Connected to MySQL database')
})


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



app.get('/show',async(req,res)=>{
    const query="select * from data_setaf_student_field_work_internship_guidance "
    db.query(query,[req.params.user],(err,result)=>{
        if(err){
            res.status(404).json({error:err.message})
            return
        }
        if(result.length==0){
            res.status(500).json({message:"the value in not found in the table"})
            return
        }
        else{
            res.status(200).json(result)
        }
    })
})

app.post('/insert',async(req,res)=>{
    const { academic_year,
        semester,
        name_of_the_faculty,
        nature_of_guidance,
        duration_form,
        duration_to,
        number_of_students_undertaking_the_field_project,
        student_name,	
        attachments,
        certificate_pdf
    }=req.body
    const sql="insert into data_setaf_student_field_work_internship_guidance values (?,?,?,?,?,?,?,?,?,?);"
    db.query(sql,[ academic_year,
        semester,
        name_of_the_faculty,
        nature_of_guidance,
        duration_form,
        duration_to,
        number_of_students_undertaking_the_field_project,
        student_name,
        attachments,
        certificate_pdf
    ],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})

app.listen(port,()=>{
    console.log(`App is running on the port ${port}`)
})





