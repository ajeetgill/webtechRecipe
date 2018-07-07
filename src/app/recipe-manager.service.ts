import { Injectable } from '@angular/core';
import { Recipe } from '../classes/recipe.class';
import { Ingredient } from '../classes/ingredient.class';

@Injectable({
  providedIn: 'root'
})
export class RecipeManagerService {

  public recArr: Map<string, Recipe> = new Map<string, Recipe>();
  tempRec: Recipe;

  constructor() { }

  saveRecipe(recName: string, recTime: number) {
    console.log('Recipe Saved');
    this.tempRec.time = recTime;
    this.recArr.set(recName, this.tempRec);
    this.tempRec = null;
    console.log(this.recArr);
  }
  newRecipe() {
    console.log('newRecipe created.');
    this.tempRec = new Recipe();
    // this.printConsole();
    console.log(this.recArr);
  }
  addIng(ingName, ingQty) {
    console.log('ingredient added.');
    this.tempRec.addItem(new Ingredient(ingName, ingQty));
    this.printConsole();
  }

  addInstruct(instruction: string) {
    this.tempRec.addInstrcuction(instruction);
    this.printConsole();
  }

  printConsole() {
    console.log(this.tempRec);
  }

}
/**
 * Recipe Service should:
 * make a recipe and save it in an array.
 */
