const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);
