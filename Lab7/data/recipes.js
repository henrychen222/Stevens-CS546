const mongoCollections = require('../config/mongoCollections');
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {
    async getAllRecipes() {
        const recipeCollection = await recipes();
        return await recipeCollection.find({}).toArray();
    },
    async getRecipeById(id) {
        const recipeCollection = await recipes();
        const recipe = await recipeCollection.findOne({ _id: id });
        if (!recipe) throw "No recipe found";
        return recipe;
    },

    async addRecipe(title, ingredients, steps) {
        if (typeof title !== "string") throw "No title provided";
        
        //make ingredients to be an array if it's not an array
        if (!Array.isArray(ingredients)) {
            ingredients = [];
        }
        if (!Array.isArray(steps)) {
            steps = [];
        }
        const recipeCollection = await recipes();
        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps
        };
        const new_inserted_recipe = await recipeCollection.insertOne(newRecipe);
        const newId = new_inserted_recipe.insertedId;
        return await this.getRecipeById(newId);

    },
    async removeRecipe(id) {
        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        }

    },
    async updateRecipe(id, updatedRecipe) {
        const recipeCollection = await recipes();

        const updatedRecipeData = {};

        if (updatedRecipe.title) {
            updatedRecipeData.title = updatedRecipe.title;
        }

        if (updatedRecipe.ingredients) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        if (updatedRecipe.steps) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        let updateCommand = {
            $set: updatedRecipeData
        };
        const query = {
            _id: id
        };
        await recipeCollection.updateOne(query, updateCommand);

        return await this.getRecipeById(id);

    },

    async patchUpdateRecipe(id, title, ingredients, steps) {
        if (!id)
            throw "You must provide a recipe id to query";
      
        if (!title && !ingredients && !steps)
            throw "No change detected i.e no parameter submitted";
        
        if (title)
        updatedRecipeData.title = title;    
 
        if (ingredients)
        updatedRecipeData.ingredients = ingredients;
 
        if (steps)
        updatedRecipeData.steps = steps;
 
        const checkRecipe = await this.getRecipeById(recipeID);
        const recipeCollection = await recipes();
 
        const updateInfo = await recipeCollection.updateOne({ _id: id }, { $set: updatedRecipeData });
 
        if (updateInfo.modifiedCount === 0)
            throw "Could not update recipe with ID - ${id}";
 
        return await this.getRecipeById(id)
    }
}



//Method 2
// let exportedMethods = {
//     getAllRecipes() {
//         return recipes().then((recipeCollection) => {
//              return recipeCollection.find({}).toArray().then((newList) =>{
//                  let recipeArr = [];
//                  for(let i = 0; i< newList.length; i++){
//                         let recipeList = {
//                         _id: newList[i]._id,
//                         title: newList[i].title
//                      }
//                     recipeArr.push(recipeList);
//                 }       
//                 return recipeArr; 
//              });               
//          })         
//     },
//     getRecipeById(id) {
//         return recipes().then((recipeCollection) => {
//             return recipeCollection.findOne({ _id: id }).then((recipe) => {
//                 if (!recipe) throw "Recipe not found";

//                 return recipe;
//             });
//         });
//     },
//     addRecipe(title, ingredients, steps ) {
//         if (!Array.isArray(ingredients)) {
//             ingredients = [];
//         }

//         if (!Array.isArray(steps)) {
//             steps = [];
//         }

//         return recipes().then((recipeCollection) => {
//             let newRecipe = {
//                 _id: uuid.v4(),
//                 title: title,
//                 ingredients: ingredients,
//                 steps: steps
//             };

//             return recipeCollection.insertOne(newRecipe).then((newInsertInformation) => {
//                 return newInsertInformation.insertedId;
//             }).then((newId) => {
//                 return this.getRecipeById(newId);
//             });
//         });
//     },
//     removeRecipe(id) {
//         return recipes().then((recipeCollection) => {
//             return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
//                 if (deletionInfo.deletedCount === 0) {
//                     throw (`Could not delete recipe with id of ${id}`)
//                 }
//             });
//         });
//     },
//     updateRecipe(id, updatedRecipe) {
//         return this.getRecipeById(id).then((currentRecipe) => {
//             let recipeUpdateInfo = {};

//             if(updatedRecipe.title){
//                 recipeUpdateInfo.title = updatedRecipe.title;
//             }

//             if(updatedRecipe.ingredients){
//                 recipeUpdateInfo.ingredients = updatedRecipe.ingredients;
//             }

//             if(updatedRecipe.steps){
//                 recipeUpdateInfo.steps = updatedRecipe.steps;
//             }

//             let updateCommand = {
//                 $set: recipeUpdateInfo
//             };

//             return recipes().then((recipeCollection) => {
//                 return recipeCollection.updateOne({ _id: id }, updateCommand).then(() => {
//                     return this.getRecipeById(id);
//                 });
//             });
//         });
//     }
// }

module.exports = exportedMethods;