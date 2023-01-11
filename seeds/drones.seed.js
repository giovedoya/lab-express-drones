const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const Movie = require('../models/Drone.model');
const MONGO_URL = 'mongodb://127.0.0.1:27017/lab-express-drone'; 

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to the database ${response.connection.name}`))
  .then (() => {
      Movie.create(drones)
  })
  .then(createdDrones => console.log(`Inserted ${createdDrones.length} drones in the database`))
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err))

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];