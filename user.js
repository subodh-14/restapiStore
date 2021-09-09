const express = require("express");
const User = require("./models/mongooseSchema.js");
const router = express.Router();
const auth = require('./auth.js')

router.get("/" ,async (req,res)=>{
    const data = await User.find();
    res.send(data);
});

router.get("/:id", async (req,res)=>{
    const specificData = await User.findById(req.params.id);
    res.send(specificData);
})


module.exports = router;