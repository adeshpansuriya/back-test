const router = require("express").Router();
const Ingredients = require("../controllers/ingredients.controller.js");

// Create a new ingredients
router.post("/ingredients", Ingredients.createIngredients);

// get all Ingredients
router.get("/ingredients", Ingredients.findAllIngredients);

// get a single Ingredients with id
router.get("/ingredients/:id", Ingredients.findOneIngredients);

// Delete a Ingredients with id
router.delete("/ingredients/:id", Ingredients.deleteIngredients);

module.exports = router
