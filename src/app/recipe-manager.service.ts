import { Injectable } from '@angular/core';
import { Recipe } from '../classes/recipe.class';
import { Ingredient } from '../classes/ingredient.class';
import { Fridge } from '../classes/fridge.class';

@Injectable({
  providedIn: 'root'
})
export class RecipeManagerService {

  public recArr: Map<string, Recipe> = new Map<string, Recipe>();
  tempRec: Recipe;
  tempFridge: Fridge;

  constructor() {
    this.tempFridge = new Fridge();
  }

  saveRecipe(recName: string, recTime: number) {
    this.tempRec.time = recTime;
    this.recArr.set(recName, this.tempRec);
    this.tempRec = null;
  }
  newRecipe() {
    this.tempRec = new Recipe();
  }
  addIng(ingName, ingQty) {
    this.tempRec.addItem(new Ingredient(ingName, ingQty));
  }

  addInstruct(instruction: string) {
    this.tempRec.addInstrcuction(instruction);
  }

  allRecipes(): Array<string> {
    return Array.from(this.recArr.keys());
  }

  getRecipe(of: string): Array<Ingredient> {
    return this.recArr.get(of).ingredientList;
  }

  addItem(ingName, ingQty) {
    this.tempFridge.addItem(new Ingredient(ingName, ingQty));
  }
  delItem(itemName: string, itemQty: number) {
    this.tempFridge.removeIng(new Ingredient(itemName, itemQty), itemQty);  // Asking to remove all of it.
  }

  printConsole() {
    console.log(this.tempRec);
  }

}
/**
 * Recipe Service should:
 * make a recipe and save it in an array.
 */
