const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: String,
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message