const bcrypt = require('bcrypt')
const User = require('../models/User.model')

const getUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(201).json(users)
    } catch(error){
        res.status(500).send()
    }
}

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();

        // Send success response
        res.status(201).json({ message: 'User successfully registered' });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const login = async(req, res) => {
    try{
        const { name, email, password } = req.body;
        const user = await User.findOne({email: email})

        if(user === null){
            res.status(500).json({message: 'User not found'})
        } 

        const passwordMatch = bcrypt.compare(password, user.password)
        if(passwordMatch){
            res.status(200).json({message: 'User successfully logged in'})
        } else {
            res.json({message: 'Wrong credentials. Try again'})
        }
    } catch (error){
        res.status(500).json({error: error})
    }
}

module.exports = {
    getUsers,
    signUp, 
    login
}