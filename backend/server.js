const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/recipe-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});


const recipeRouter = require('./routes/recipes');
const userRouter = require('./routes/users');

app.use('/recipes', recipeRouter);
app.use('/users', userRouter);



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
