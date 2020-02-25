import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe [] = [
  new Recipe('just a test','simply a test recipe', 'https://')
];
  constructor() { }

  ngOnInit(): void {
  }

}
