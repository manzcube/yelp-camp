
// General requirements
const express = require('express')
const router = express.Router({ mergeParams: true })
const reviews = require('../controllers/reviews') // Controlers
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware') // Middleware 
const catchAsync = require('../utils/catchAsync') // Utilities 

// Routing
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

// Exporting
module.exports = router