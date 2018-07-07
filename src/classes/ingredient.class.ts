export class Ingredient {
  // initializes an ingredient with provided name and quantity
  constructor(public name: string, public qty: number) {}

  // adds to the quantity of ingredient
  // need a negative amount added check.
  add(amount: number) {
    const temp: number = amount;
    this.qty = +temp + +this.qty;
  }

  // subtracts from the quantity of ingredient
  // sets qty 0 if amount removed is larger than available.
  subtract(amount: number) {
    amount >= this.qty ? (this.qty = 0) : (this.qty -= amount);
  }
}
