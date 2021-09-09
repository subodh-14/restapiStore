const express = require("express");
const auth = require("./auth.js");
const router = express.Router();
const User = require("./models/mongooseSchema.js");



router.post('/',auth, async (req,res)=>{
    const addProduct = new User({
        name:req.body.name,
        price:req.body.price
    });
    const product = await addProduct.save();
    res.send(product);
    console.log("product added");
});


router.put('/:id', auth ,async (req, res) => {
    const { id } = req.params;
    const Updateddata = await User.findByIdAndUpdate(id, { ...req.body },{new:true});
    res.send(Updateddata);
});

router.delete('/:id', auth ,async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send(`product with id ${id} deleted`);
});




module.exports = router;