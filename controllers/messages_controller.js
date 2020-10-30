const express = require('express')
const Message = require('../models/messages.js')
const messages = express.Router()







// SEED ROUTE
messages.get('/setup/seed', (req, res) => {
    Fruit.create(
        [{
                title: 'Albert Einstein Quote',
                message: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
                image: null,
            },
            {
                title: 'Cute dog by the ocean',
                message: null,
                image: 'https://www.photoblog.com/learn/wp-content/uploads/2019/08/cute-dog-outdoors-990x556.jpg',
            },
            {
                title: 'Oh Canada',
                message: 'Canadians say “sorry” so much that a law was passed in 2009 declaring that an apology can’t be used as evidence of admission to guilt.',
                image: null,
            }
        ],
        (error, data) => {
            res.redirect('/messages')
        }
    )
})


module.exports = fruits