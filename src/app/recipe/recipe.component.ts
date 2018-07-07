import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from '../recipe-manager.service';
import { Ingredient } from '../../classes/ingredient.class';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  btnName = 'Create Recipe';
  recInProg = false;  // true when recipe is being created.
  selectedRecipe: string;
  selectedRecipeArr: Array<Ingredient>;

  recName: string;
  recTime: number;
  ingName: string;
  ingQty: number;
  instruct: string;
  recList: Array<string>; // stores the names of recipes from recipeManager.
  constructor(private recipeManager: RecipeManagerService = new RecipeManagerService()) { }

  createRec() {
    this.recInProg = !this.recInProg;

    this.recInProg
    ? (this.btnName = 'Save Recipe')
    : (this.btnName = 'Create Recipe');
    if (!this.recInProg) {
      this.recipeManager.saveRecipe(this.recName, this.recTime);  // saves the recipe.
      this.recList = this.recipeManager.allRecipes();
    } else {
      this.recipeManager.newRecipe(); // makes a new recipe.
    }
    this.recName = '';
    this.ingName = '';
    this.instruct = '';
    this.recTime = null;
    this.ingQty = null;
  }

  addItem() {
    this.recipeManager.addIng(this.ingName, this.ingQty);
    this.ingName = '';
    this.ingQty = null;
  }

  addInstruction() {
    this.recipeManager.addInstruct(this.instruct);
    this.instruct = '';
  }

  printRec(val) {
    this.selectedRecipe = val;
    this.selectedRecipeArr = this.recipeManager.getRecipe(val);
  }

  printConsole() {
    console.log('==============Recipe Created============');
    console.log('Recipe Name: ' + this.recName);
    console.log('Recipe Time: '  + this.recTime);
    console.log('Ingredient Name: ' + this.ingName);
    console.log('Ingredient Qty: ' + this.ingQty);
    console.log('Instruction: ' + this.instruct);
    console.log('========================================');
  }

  ngOnInit() {}

}
