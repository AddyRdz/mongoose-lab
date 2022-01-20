// Your code here!
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    founded: Date,
    employees: Number,
    products: [String],
    CEO: {
        name: String,
        age: Number
    }
}, { timestamps: true })

const Company = mongoose.model("Company", companySchema)

module.exports = Company