const User = require('../models/User');

const router = require('express').Router();

router.get('/',(req, res)=>{
    User.find().then(users => {
        res.status(200).json(users)
    }).catch(err => res.status(400).json(err))
})

module.exports = router