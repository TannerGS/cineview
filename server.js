const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//Init Middleware
app.use(express.json({ extend: false }));

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
