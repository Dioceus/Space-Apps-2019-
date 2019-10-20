const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    nameOfPlace: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    }, 
    imageOfPlace: {
        type: Blob
    },
    isBooked: {
        type: Boolean,
        required: true
    }, 
    description: {
        type: String,
    }
});

module.exports = Destination = mongoose.model("Destination", DestinationSchema);