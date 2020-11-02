const express = require('express')
const Message = require('../models/messages.js')
const messages = express.Router()

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// INDEX
messages.get('/messages', (req, res) => {
    Message.find({}, (error, allMessages) => {
        res.render('messages/index.ejs', {
            messages: allMessages,
            currentUser: req.session.currentUser
        })
    })
})

// NEW
messages.get('/new', (req, res) => {
    res.render(
        'messages/new.ejs', {
            currentUser: req.session.currentUser
        })
})

// EDIT
messages.get('/:id/edit', (req, res) => {
    Message.findById(req.params.id, (error, foundMessage) => {
        res.render('messages/edit.ejs', {
            message: foundMessage,
            currentUser: req.session.currentUser
        })
    })
})

// DELETE
messages.delete('/:id', isAuthenticated, (req, res) => {
    Message.findByIdAndRemove(req.params.id, (err, deletedMessage) => {
        res.redirect('/messages')
    })
})

// SHOW
messages.get('/:id', (req, res) => {
    if (req.session.currentUser) {
        Message.findById(req.params.id, (error, foundMessage) => {
            res.render('messages/show.ejs', {
                message: foundMessage,
                currentUser: req.session.currentUser
            })
        })
    } else {
        res.redirect('/sessions/new')
    }
})

// UPDATE
messages.put('/:id', isAuthenticated, (req, res) => {
    Message.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        },
        (error, updatedModel) => {
            res.redirect('/messages')
        }
    )
})

// CREATE
messages.post('/', (req, res) => {
    Message.create(req.body, (error, createdMessage) => {
        res.redirect('/messages')
    })
})



module.exports = messages;