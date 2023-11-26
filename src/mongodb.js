const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignupDatabase")
    .then(function(){
        console.log("MongoDB connected.")
    })
    .catch(function(){
        console.log("Failed to connect.")
    });

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("LoginCollection", loginSchema);

module.exports = collection;
