const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//Init Middleware
app.use(express.json({ extend: false }));

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/movie', require('./routes/api/movie'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
