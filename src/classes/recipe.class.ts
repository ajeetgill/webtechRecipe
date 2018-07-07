import { Ingredient } from './ingredient.class';
export class Recipe {
  time: number;
  ingredientList: Array<Ingredient>;
  instructionList: Array<String>;

  // constructor(Ingredients: Array<Ingredient>, instructions: Array<String>, time:  number){
  constructor() {
    this.time = null;
    this.ingredientList = new Array<Ingredient>();
    this.instructionList = new Array<String>();
  }

  addItem(item: Ingredient) {
    let isAdded: boolean = false;
    this.ingredientList.forEach(element => {
      if (element.name === item.name) {
        // the Ingredient is already in the list
        element.add(item.qty);
        isAdded = true;
        return;
      }
    });

    if (!isAdded) {
      this.ingredientList.push(item);
    }
  }

  addInstrcuction(instrc: String) {
    this.instructionList.push(instrc);
  }
}
