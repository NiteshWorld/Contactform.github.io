const express = require('express');

const router = express.Router();


require('../db/conn');
const User = require('../model/userschema');

router.get('/', (req, res) => {
    res.send('this is Home page from server');
});

// router.post('/contact', (req, res) => {

//     const { name, email, phone, messages } = req.body;

//     if (!name || !email || !phone || !messages) {
//         return res.status(422).json({ error: "ples fill the form properly" });
//     }


//     User.findOne({email:email})
//     .then( (userExist) => {
//         if(userExist){
//             return res.status(422).json({ error : 'Email already exist'});
//         }

//         const user = new User({ name, email, phone, messages });

//         user.save().then( ()=> {
//             res.status(201).json({message : 'Thank you for contact us'})
//         }).catch((err)=> res.status(500).json({error:'failed to contact us'}));
//     }).catch(err => {console.log(err);});




// });


router.post('/contact', async (req, res) => {

    const { name, email, phone, messages } = req.body;

    if (!name || !email || !phone || !messages) {
        return res.status(422).json({ error: "ples fill the form properly" });
    }

    try{

     const userExist = await User.findOne({email:email});
     if(userExist){
        return res.status(422).json({ error : 'Email already exist'});
    }

    const user = new User({ name, email, phone, messages });
    await user.save();
   res.status(201).json({message : 'Thank you for contact us'});

    }catch (err) {
        console.log(err);
    }

});





module.exports = router;