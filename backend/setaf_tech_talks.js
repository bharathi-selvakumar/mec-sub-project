const express = require('express')
const refMysql=require('mysql2')
const bodyParser = require("body-parser")

const cors =require('cors')

const app = express()
const port=1991

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
    const query="select * from data_setaf_tech_talks "
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
    const {name_of_the_faculty,
        MuDiL_number,
        lecture_delivered_to_branch,
        semester,
        section,
        data_of_lecture_delivered,
        period,
        topic_of_discussion,
        no_of_beneficiaries,
        detail_of_discussion_made,
        outcome_of_the_discussion,
        outcome_of_he_activity,
        PO_and_PSO,
        attachments,
        attendance_sheet_PDF,
        handout_of_lecture_PDF	


    }=req.body
    const sql="insert into data_setaf_tech_talks values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sql,[name_of_the_faculty,
        MuDiL_number,
        lecture_delivered_to_branch,
        semester,
        section,
        data_of_lecture_delivered,
        period,
        topic_of_discussion,
        no_of_beneficiaries,
        detail_of_discussion_made,
        outcome_of_the_discussion,
        outcome_of_he_activity,
        PO_and_PSO,
        attachments,
        attendance_sheet_PDF,
        handout_of_lecture_PDF	

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





