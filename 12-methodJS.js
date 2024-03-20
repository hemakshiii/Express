
//Post method using javascript eg

const express =require('express')
const app=express()
const {people}= require("./data")

//static assests
app.use(express.static('./method-public'))

//parse form  data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

//GET METHOD
app.get('/api/people',(req,res)=>{
res.status(200).json({sucess:true, data:people})
})

//POST METHOD
app.post('/api/people',(req,res)=>{
    const {name}=req.body
    if(!name){
      return res
      .status(400)
      .json({success:false, msg: 'please provide a name'}) 
    }
    res.status(201).json({success:true, person:name})
})

//POST
app.post('/api/postman/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res
        .status(400)
        .json({success:false, msg: 'please provide a name'}) 
      }
      res.status(201).json({success:true, data:[...people,name]})

})

//PUT
app.put('/api/people/:id', (req,res)=> {
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
app.delete('/api/people/:id',(req,res)=>{
    const person =people.find((person)=>person.id === Number(req.params.id))

    if(!person){
        return res
        .status(400)
        .json({success:false, msg: 'please provide a name'}) 
      }
    const newPeople= people.filter((person)=> person.id !== Number(req.params.id))
    return  res.status(200).json({success:true, data:newPeople })
})

app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name){
        res.status(200).send(`Welcome to our page ${name}`)
    }
    res.status(401).send('Please enter credentials')
})

app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})