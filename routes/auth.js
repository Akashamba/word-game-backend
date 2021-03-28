const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {registerValidation, loginValidation} = require("../validation/userValidation");

router.post('/register', async (req, res) => {
    // Validating incoming data
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // If no error, check if user already exists in database
    const userExists = await User.findOne({username: req.body.username});
    if(userExists) return res.status(400).send('"username" already exists')

    // If new user, hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // and create new user
    const user = new User({
        "full-name": req.body["full-name"],
        username: req.body.username,
        password: hashedPassword
    });
    try {
        const savedUser = user.save();
        res.send({_id: user._id, username: user.username});
    }catch(err) {
        res.status(400).send(err)
        console.log(err);
    }
});


router.post('/login', async (req, res) => {
    // Validating incoming data
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // If no error, check if user exists in database
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('Invalid username or password');

    // If user exists, check if password is correct
    const validPass = bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid username or password')

    // If password is correct, generate and send token
    const token = jwt.sign({_id: user._id} ,process.env.TOKEN_SECRET);
    res.header(token).send({token: token, username: user.username});
});


module.exports = router;