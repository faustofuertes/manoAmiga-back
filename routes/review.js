const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// api/reviews
router.post('/', reviewController.crearReview);
router.get('/:postId', reviewController.obtenerReviewsDeUnPost);

module.exports = router;