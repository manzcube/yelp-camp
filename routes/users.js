const express = require('express')
const passport = require('passport')
const router = express.Router()
const users = require('../controllers/users') // Controlers
const catchAsync = require('../utils/catchAsync') // Utilities


// Routing
router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

// Exporting
module.exports = router