const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/Person')

const app =  express();
const PORT = process.env.PORT || 3000;
const mongodbUrl = process.env.MONGODB_URL;
console.log(mongodbUrl);


// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})



// CRUD Endpoints

// Create a person
app.post('/api', (req,res)=> {

    const {name, age} = req.body;
    console.log(req.body);
    if(!name){
        return res.status(400).json({
            message: 'Please provide your name',
        })
    }
    const person = new Person({
        name,
        age
    })
    person.save()
    .then( (result) => {
        res.json(result);
    })
    .catch( (err) => {
        res.status(500).json({
            message: 'Something went wrong',
        })
    })
})

//Read everyone
app.get('/api', async(req,res)=>{
    try{
        const persons = await Person.find();
        res.json(persons);
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',
        })
    }
})

// Read a person
app.get('/api/:user_id', async(req,res)=>{
    try{
        const user_id = req.params.user_id;
        const person = await Person.findById(user_id);
        if(!person){
            return res.status(404).json({
                message: `Person with id ${user_id} not found`,
            })
        }
        res.json(person);
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',
        })
    }
})

// Update a person
app.patch('/api/:user_id', (req,res)=>{
    const user_id = req.params.user_id;
    const updatedPerson = req.body;

    const result = Person.findByIdAndUpdate(user_id, updatedPerson, {new:true})
    .then( (result) => {
        if(!result){
            return res.status(404).json({
                message: `Person with id ${user_id} not found`,
            })
        }
        res.json(result);
    })
    .catch( (err) => {
        res.status(500).json({
            message: 'Something went wrong',
        })
    })
})

// Delete a person
app.delete('/api/:user_id', (req,res)=>{
    const user_id = req.params.user_id;

    const deletedPerson = Person.findByIdAndDelete(user_id)
    .then((result) => {
        if(!result){
            return res.status(404).json({
                message: `Person with id ${user_id} not found`,
            })
        }
        res.send(`Person with name ${result.name} and id ${result._id} has been deleted`)
    })
    .catch( (err) => {
        res.status(500).json({
            message: 'Something went wrong',
        })
    })
})



// Connect to db
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log('Connected to db');

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    } )
})
.catch( (err) => {
    console.error(`Error connecting to the database. ${err}`);
    process.exit(1);
})