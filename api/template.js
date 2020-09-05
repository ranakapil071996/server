const Template = require('../models/Template');
const router = require('express').Router();

router.get('/', (req, res) => {
    Template.find().then(templates => {
        res.status(200).json(templates);
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params)
    Template.findById(req.params.id).then(template=>{
        res.json(template)
    }).catch(err => res.status(400).json(err))
})

router.post('/', (req, res) => {
    //I am not doing any kind of validations for now.
    const newTemplate = new Template({ ...req.body});
    console.log(newTemplate)
    newTemplate.save((err, result) => {
        if(err){
            res.status(400).json(false)
        }else{
            res.status(200).json(true)
        }
    })
})

router.delete('/:id', (req, res) => {
    console.log(req.params)
    Template.findByIdAndDelete(req.params.id).then(template=>{
        res.json(true)
    }).catch(err => res.status(400).json(err))
})



module.exports = router