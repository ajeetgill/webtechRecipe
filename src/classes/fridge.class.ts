import { Ingredient } from './ingredient.class';
import { Recipe } from './recipe.class';

export class Fridge {
  // contents: Array<Ingredient>;
//   // contents: Array[string, ingredient];
//   contents: Array<Ingredient>;

  constructor(public contents: Array<Ingredient> = new Array<Ingredient>()) {}

  addItem(item: Ingredient) {
    let isAdded: boolean = false;
    this.contents.forEach(element => { // the Ingredient is already in the list
      if (element.name === item.name) {
        element.add(item.qty);
        isAdded = true;
        return;
      }
    });

    if (!isAdded) {
      this.contents.push(item);
    }
  }

//   /** Question: The below implementation is better item:ingredient OR the above item:string, qty:number */
//   // add(item: ingredient){
//   //     if(this.contents.has(item.name)){
//   //         this.contents.get(item.name).add(item.quantity);
//   //     }
//   //     this.contents.set(item.name, item);
//   // }

  removeIng(ing: Ingredient, qty: number = ing.qty) { // removes the specified amount, if no amount passed then whole qty.
    this.contents.forEach(element => {
      if (element.name.localeCompare(ing.name) === 0) {
        element.subtract(qty);
        if (element.qty === 0) {
          this.contents.splice(this.contents.indexOf(element), 1);
        }
      }
    });
  }
  checkRecipe(currentRecipe: Recipe) {
    const inTheFridge: Array<Ingredient> = Array<Ingredient>();
    const shoppingList: Array<Ingredient> = Array<Ingredient>();
    let isInside = false;
    currentRecipe.ingredientList.forEach(ingRec => {
      isInside = false;
      this.contents.forEach(ingFridge => {
        if (ingRec.name.localeCompare(ingFridge.name) === 0) {  // Item is present
          if (ingRec.qty > ingFridge.qty) {
            shoppingList.push(new Ingredient(ingRec.name, (ingRec.qty - ingFridge.qty)));
            inTheFridge.push(new Ingredient(ingFridge.name, ingFridge.qty));
          } else {
            // inTheFridge.push(new Ingredient(ingFridge.name, ingFridge.qty));
            inTheFridge.push(ingFridge);
          }
          isInside = true;
        }
      });
      if (isInside === false) {
        shoppingList.push(ingRec);
      }
    });
    console.log('inTheFridge');
    console.log(inTheFridge);
    console.log('shoppingList');
    console.log(shoppingList);
    return [inTheFridge, shoppingList];
  }
}
