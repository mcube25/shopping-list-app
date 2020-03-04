import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipes.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe [] = [
    new Recipe('just a test',
    'simply a test recipe',
     'https://car-pictures-download.com/wp-content/uploads/2018/04/McLaren-sports-car-picture-2018.jpg',
   [
     new Ingredient('meat',1),
new Ingredient('french',9)
 ]),
    new Recipe('Another just  test',
    'simply a test recipe',
     'https://car-pictures-download.com/wp-content/uploads/2018/04/Ferrari-sports-car-picture-2018.jpg',
   [
     new Ingredient('buick',18),
     new Ingredient('merc',33)

   ])
  ];
  constructor( private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(id: number){
    return this.recipes[id]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
