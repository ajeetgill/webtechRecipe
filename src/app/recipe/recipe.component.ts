import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from '../recipe-manager.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  btnName = 'Create Recipe';
  recInProg = false;  // true when recipe is being created.

  recName: string;
  recTime: number;
  ingName: string;
  ingQty: number;
  instruct: string;
  constructor(private recipeManager: RecipeManagerService = new RecipeManagerService()) { }

  createRec() {
    this.recInProg = !this.recInProg;

    this.recInProg
    ? (this.btnName = 'Save Recipe')
    : (this.btnName = 'Create Recipe');
    if (!this.recInProg) {
      this.recipeManager.saveRecipe(this.recName, this.recTime);  // saves the recipe.
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

  printConsole() {
    console.log('==============Recipe Created============');
    console.log('Recipe Name: ' + this.recName);
    console.log('Recipe Time: '  + this.recTime);
    console.log('Ingredient Name: ' + this.ingName);
    console.log('Ingredient Qty: ' + this.ingQty);
    console.log('Instruction: ' + this.instruct);
    console.log('========================================');
  }

  ngOnInit() {
  }

}
