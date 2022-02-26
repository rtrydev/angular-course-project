import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipes/recipe.model";
import {Ingredient} from "./shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Carrot', 2)]),
    new Recipe('Another Recipe',
      'This one is a test too',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Onion', 5)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
