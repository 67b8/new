const express=require('express')

const studentRouter=require('./routes/student.route')
const app=express()

const mongoose=require('mongoose')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',studentRouter)

mongoose.connect('mongodb://127.0.0.1:27017/Students').then(()=>console.log("connection successful"));

// app.use('/student',studentRouter)

// app.get('/',(req,res)=>{
//     res.status(200).send('<h1>Home Page</h1>')
// })

app.listen(3000,()=>console.log("server start "))