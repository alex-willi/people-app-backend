const mongoose = require('mongoose')

const peopleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image: String,
    title: String
}, {timestamps: true})

const People = mongoose.model("people", peopleSchema)

module.exports = People