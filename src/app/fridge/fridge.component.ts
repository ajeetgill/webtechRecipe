import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from '../recipe-manager.service';
// import { FridgeManagerService } from '../fridge-manager.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  constructor(public fridgeManager: RecipeManagerService = new RecipeManagerService()) { }

  ingName: string;
  ingQty: number;

  addItem() {
    this.fridgeManager.addItem(this.ingName, this.ingQty);
    this.ingName = '';
    this.ingQty = null;
  }
  delItem(itemName: string, itemQty: number) {
    this.fridgeManager.delItem(itemName, itemQty);
  }
  // printItem(item: string) {
  //   console.log(item);
  // }
  ngOnInit() {
  }

}
