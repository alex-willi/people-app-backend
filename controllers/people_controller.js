const express =require('express')
const router = express.Router()
const {People} = require('../models')
console.log(People)
//index
router.get('/', async (req,res)=>{
    try{
        const allPeople = await People.find({})
        res.status(200).json(allPeople)
    }catch(err){
        res.status(400).json({error:err})
    }
    // res.status(200).json({message: "hit people index route"})
})
//show
router.get('/:id', async (req,res)=>{
    try{
        const foundPerson = await People.findById(req.params.id)
        res.status(200).json(foundPerson)
    }catch(err){
    res.status(400).json({error:err})
    }
})
router.post('/', async (req,res)=>{
    try{
        console.log("hitting post route")
        const newPerson = await People.create(req.body)
        res.status(201).json(newPerson)
    }catch(err){
        console.log(err)
        res.status(400).json({error: err})
    }
    // res.status(201).json({message: "hit people post route"})
})
router.put('/:id', async(req,res)=>{
    try{
        const updatePerson = await People.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatePerson)

    }catch(err){
        res.status(400).json({error: err})

    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const destroyPerson= await People.findByIdAndDelete(req.params.id)
        res.status(201).json(destroyPerson)

    }catch(err){

        res.status(400).json({error: err})
    }
})


module.exports = router