const express = require('express')
const refMysql=require('mysql2')
const bodyParser = require("body-parser")

const cors =require('cors')

const app = express()
const port=2000

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
    const query="select * from data_sesta_nptel_certification "
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
    const {SESTA_ID,
        Academic_year,
        Semesters,
        Department,
        Name_of_the_Student,
        Year,
        Semester,
        Section,
        Online_Certification,
        Name_of_the_Course,
        Date,
        Duration,
        Details_of_the_Organization	,
        Awards_Recognitions,
        Outcome_of_the_Activity	
    
    }=req.body
    const sql="insert into data_sesta_online_certification values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sql,[SESTA_ID,
        Academic_year,
        Semesters,
        Department,
        Name_of_the_Student,
        Year,
        Semester,
        Section,
        Online_Certification,
        Name_of_the_Course,
        Date,
        Duration,
        Details_of_the_Organization	,
        Awards_Recognitions,
        Outcome_of_the_Activity	
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





