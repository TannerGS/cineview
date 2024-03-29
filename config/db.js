const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true 
    });

    console.log('MongoDB is connected...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
