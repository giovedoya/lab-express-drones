const mongoose = require('mongoose');
const { Schema }= mongoose;

const droneSchema = new Schema ({
    name: String,
    propellers: Number,
    maxSpeed: Number
})
const Drones = mongoose.model('Drones', droneSchema);

module.exports = Drones;