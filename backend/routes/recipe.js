const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Get all recipes
router.get('/', (req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Create a new recipe
router.post('/add', (req, res) => {
  const { title, description, ingredients, instructions, createdBy } = req.body;

  const newRecipe = new Recipe({
    title,
    description,
    ingredients,
    instructions,
    createdBy,
  });

  newRecipe
    .save()
    .then(() => res.json('Recipe added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
