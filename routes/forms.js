const express = require('express')
const router = express.Router()
const Forms = require('../models/forms')


router.get('/', async (req,res)=>{
    try{
        const forms = await Forms.find()
        res.status(200).json(forms)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.get('/:id',getAParticularForm,(req,res)=>{
    res.status(200).json(res.form.title)
})

router.post('/', async (req,res)=>{
    const Form = new Forms({
        title:req.body.title
    })
    try{
        const newForm = await Form.save()
        res.status(201).json(newForm)
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
})

router.post('/newform',async(req,res)=>{
    const Form = new Forms(req.body)
    try{
        const newForm = await Form.save()
        res.status(201).json(newForm)
    }
    catch(err){
        res.status(400).send({message:err.message})
    }
})


router.delete('/:id',getAParticularForm, async(req,res)=>{
    try{
        await Forms.deleteOne({_id:res.form._id})
        res.status(200).json({message:"Form Successfully Removed!"})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})


async function getAParticularForm(req,res,next){
    let form
    try{
        form = await Forms.findById(req.params.id)
        if(form === null){
            return res.status(400).json({message:"Form Not Found"})
        }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.form = form
    next()
}


module.exports = router