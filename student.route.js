const express=require('express')
const routes=express.Router()
const studentModel=require('../model/student.model')

routes.use(express.json())
routes.use(express.urlencoded({extended:true}))

routes.post('/',async (req,res)=>{
    const student=await studentModel.create(req.body)
    res.status(200).json(student);
})


routes.get('/',async (req,res)=>{
     const student=await studentModel.find({})
     res.status(200).json(student);
});
routes.get('/:id',(req,res)=>{

    res.status(200).send(`<h1>Student id is ${req.params.id}</h1>`)
});


module.exports= routes;