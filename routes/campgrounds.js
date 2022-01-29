
// General requirements
const express = require('express')
const router = express.Router()
const campgrounds = require('../controllers/campgrounds') // Controllers
const { validateCampground, isLoggedIn, isAuthor } = require('../middleware') // Middleware
const catchAsync = require('../utils/catchAsync') // Utilities

// Routing
router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))  

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isAuthor, catchAsync(campgrounds.deleteCampground))

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))


// Exporting
module.exports = router

