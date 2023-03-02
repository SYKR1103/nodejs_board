const express = require("express");
var router = express.Router();
const User = require('../schemas/user');
const bcrypt = require('bcrypt');

//register
router.post('/', async (req, res) => {

    try {
       
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
       
        const newUser = new User ({

            username : req.body.username,
            email : req.body.email,
            password : hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
        
    } catch (err) {
        res.status(500).json(err);
    }

});


router.get("/", async(req, res) => {

    try {
        const userList = await User.find({})
        res.status(200).json(userList)

    } catch(err) {
        res.status(500).json(err);
    }

});








module.exports = router;
