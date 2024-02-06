const express = require('express')
const refMysql=require('mysql2')
const bodyParser = require("body-parser")

const cors =require('cors')

const app = express()
const port=1994

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
    const query="select * from data_setaf_journal_publication "
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
    const {academic_year,
        semester,
        department,	
        name_of_the_authors,	
        title_of_the_paper,	
        name_of_journal,
        year_of_publication,
        month_of_publication,
        ISSN_number,
        volume_no,
        issue_no,
        page_no,
        journal_listed_in,
        link_to_website_of_the_journal,
        attachements,
        journal_first_pae_PDF	


    }=req.body
    const sql="insert into data_setaf_journal_publication values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sql,[academic_year,
        semester,
        department,	
        name_of_the_authors,	
        title_of_the_paper,	
        name_of_journal,year_of_publication,
        month_of_publication,
        ISSN_number,
        volume_no,
        issue_no,
        page_no,
        journal_listed_in,
        link_to_website_of_the_journal,
        attachements,
        journal_first_pae_PDF	

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





