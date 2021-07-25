const express = require('express');
const router = express.Router();
const Movie = require('../../models/Movie');
const auth = require('../../middleware/auth');

//@route POST api/movie
//@desc Save movie
//@access Private
router.post('/', auth, async (req, res) => {
  const { title, poster, id } = req.body;

  try {
    let movie = await Movie.findOne({ id });

    if (movie) {
      return res
        .status(400)
        .json({ erros: [{ msg: 'Movie/Show already added' }] });
    }

    movie = new Movie({
      title,
      poster,
      id
    });

    await movie.save();
    res.json(movie);
    console.log('movie saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
