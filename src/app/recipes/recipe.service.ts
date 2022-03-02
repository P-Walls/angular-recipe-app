import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test',
    'This is a test description.', 
    'https://static01.nyt.com/images/2022/01/26/dining/21Singapore7/merlin_200287542_40236e4a-7938-4da8-87d3-a1bf6bb9f47f-threeByTwoMediumAt2X.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('fries', 20)
    ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}