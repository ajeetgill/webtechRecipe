import { Injectable } from '@angular/core';
import { Ingredient } from '../classes/ingredient.class';
import { Fridge } from '../classes/fridge.class';

@Injectable({
  providedIn: 'root'
})
export class FridgeManagerService {

  ingArr: Map<string, Ingredient>;
  tempFridge: Fridge;

  constructor() {
    this.tempFridge = new Fridge();
   }

  addItem(ingName, ingQty) {
    this.tempFridge.addItem(new Ingredient(ingName, ingQty));
  }

  removeItem() {

  }
}
