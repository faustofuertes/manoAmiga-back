const e = require('express');
const Review = require('../models/Review')

// crear una review
exports.crearReview = async (req, res) => {
    try {

        const review = new Review(req.body);
        await review.save();

        res.send(review);
    } catch (error) {
        console.log(error);
        res.status(505).send('Error creando la publicacion (BACK).');
    }
}

//traer todas las review de un post
exports.obtenerReviewsDeUnPost = async (req, res) => {
    try {

        const { postId } = req.params;

        if (!postId) {
            res.status(400).json({ error: 'Falta el id del post.' })
        }

        const reviews = await Review.find({ postId });
        res.json(reviews);

    } catch (error) {
        console.log(error);
        res.status(505).send('Error al traer publicaciones (BACK)');
    }
}