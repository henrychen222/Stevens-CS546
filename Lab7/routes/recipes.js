const express = require('express');
const router = express.Router();
const data = require('../data');
const recipeData = data.recipes;

router.get("/", async (req, res) => {
  try {
    const recipeList = await recipeData.getAllRecipes();
    res.json(recipeList);
  } catch (e) {
    res.status(500).json({ error: "Could not contact server" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await recipeData.getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }
});

router.post("/", async (req, res) => {
  const recipeInfo = req.body;
  if (!recipeInfo) {
    res.status(400).json({ error: "You must provide info to create a recipe" });
    return;
  }
  if (!recipeInfo.title) {
    res.status(400).json({ error: "You must provide a recipe title" });
    return;
  }
  if (!recipeInfo.ingredients) {
    res.status(400).json({ error: "You must provide ingredients!" });
    return;
  }
  if (!recipeInfo.steps) {
    res.status(400).json({ error: "You must provide steps for your recipe!" });
    return;
  }
  try {
    const { title, ingredients, steps } = recipeInfo;
    const newRecipe = await recipeData.addRecipe(title, ingredients, steps);
    res.json(newRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.put("/:id", (req, res) => {
  let recipeInfo = req.body;
  if (!recipeInfo) {
      res.status(400).json({ error: "You must provide data to update a recipe" });
      return;
  }
  let getRecipe = recipeData.getRecipeById(req.params.id);
  getRecipe.then(() => {
      return recipeData.updateRecipe(req.params.id, recipeInfo)
          .then((updatedRecipe) => {
              res.json(updatedRecipe);
          }).catch((e) => {
              res.status(500).json({ error: e });
          });
  }).catch(() => {
      res.status(404).json({ error: "Recipe not found" });
  });
});

router.patch("/:id", async (req, res) => {
  const recipeInfo = req.body;

  if (!recipeInfo) {
    res.status(400).json({ error: "You must provide info to create a recipe" });
    return;
  }

  try {
    await recipeData.getRecipeById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Recipe not found" });
  }

  try {
    const updatedRecipe = await recipeData.updateRecipe(req.params.id, recipeInfo);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/:id", (req, res) => {
  let user = recipeData.getRecipeById(req.params.id).then(() => {
      return recipeData.removeRecipe(req.params.id)
          .then(() => {
              res.sendStatus(200);
          }).catch(() => {
              res.sendStatus(500);
          });

  }).catch((err) => {
      console.log(err);
      res.status(404).json({ error: "Recipe not found" });
  });
});

module.exports = router