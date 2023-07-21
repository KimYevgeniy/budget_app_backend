const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    category: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('expense', expenseSchema)