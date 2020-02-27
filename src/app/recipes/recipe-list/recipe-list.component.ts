import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe [] = [
  new Recipe('just a test','simply a test recipe', 'https://car-pictures-download.com/wp-content/uploads/2018/04/McLaren-sports-car-picture-2018.jpg'),
  new Recipe('Another just  test','simply a test recipe', 'https://car-pictures-download.com/wp-content/uploads/2018/04/Ferrari-sports-car-picture-2018.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }
onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
}
}
