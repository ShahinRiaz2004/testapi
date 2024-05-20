const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

app.use('/api/posts', postsRoute);
app.get('/', (req, res) => {
    res.send("Server is start...");
});

app.listen(4003, () => {
    console.log("Server is running on port 4000");
});