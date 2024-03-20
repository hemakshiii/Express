const express = require('express')
const router = express.Router()
let {people}=require('../data')

//GET METHOD
router.get('/',(req,res)=>{
    res.status(200).json({sucess:true, data:people})
    })
    
//POST METHOD
router.post('/',(req,res)=>{
        const {name}=req.body
        if(!name){
          return res
          .status(400)
          .json({success:false, msg: 'please provide a name'}) 
        }
        res.status(201).json({success:true, person:name})
    })
    
//POST
router.post('/postman',(req,res)=>{
        const {name}=req.body
        if(!name){
            return res
            .status(400)
            .json({success:false, msg: 'please provide a name'}) 
          }
          res.status(201).json({success:true, data:[...people,name]})
    
    })
    
//PUT
router.put('/:id', (req,res)=> {
        const{name} = req.body;
        const {id}=req.params;
        
        const person =people.find((person)=>person.id === Number(id))
    
        if(!person){
            return res
            .status(400)
            .json({success:false, msg: 'please provide a name'}) 
          }
    
        const newPeople = people.map((person)=>{
            if(person.id===Number(id)){
                person.name =name 
        }
        return person;
    })
    res.status(200).json({success: true,data:newPeople});
        
    })
    
//DELETE
router.delete('/:id',(req,res)=>{
        const person =people.find((person)=>person.id === Number(req.params.id))
    
        if(!person){
            return res
            .status(400)
            .json({success:false, msg: 'please provide a name'}) 
          }
        const newPeople= people.filter((person)=> person.id !== Number(req.params.id))
        return  res.status(200).json({success:true, data:newPeople })
    })
    
module.exports =router