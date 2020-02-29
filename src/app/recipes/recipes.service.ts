import { Recipe } from './recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe [] = [
    new Recipe('just a test','simply a test recipe', 'https://car-pictures-download.com/wp-content/uploads/2018/04/McLaren-sports-car-picture-2018.jpg'),
    new Recipe('Another just  test','simply a test recipe', 'https://car-pictures-download.com/wp-content/uploads/2018/04/Ferrari-sports-car-picture-2018.jpg')
  ];
  getRecipes(){
    return this.recipes.slice();
  }
}
