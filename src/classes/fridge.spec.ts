import { Fridge } from './fridge.class';
import { Ingredient } from './ingredient.class';
import { Recipe } from './recipe.class';

describe('Fridge', function() {
  const fruit: string = 'orange';
  const qty: number = 9;
  const orange: Ingredient = new Ingredient(fruit, qty);
  const tempFridge: Fridge = new Fridge();

  /** Checks
   * 1. Initial length zero
   * 2. After adding, length increased
   * 3. Adding one more item and checking length
   */
  it('has empty contents initialized', function() {
    expect(tempFridge.contents).toBeTruthy();
    expect(tempFridge.contents.length).toBe(0);
    // tempFridge.addIng(orange);
    // // tempFridge.add(new ingredient('blah',4));
    // tempFridge.addIng(mango);
    // expect(tempFridge.contents.length).toBe(2);
  });

  /** Checks
   * 1. Can add Ingredients to contents.
   * 2. Check length and properties of content added.
   */
  it('can add ingredient', function() {
    tempFridge.addItem(orange);
    expect(tempFridge.contents.length).toBe(1);
    expect(tempFridge.contents[0].name).toBe(fruit);
    expect(tempFridge.contents[0].qty).toBe(qty);
  });
  /** Checks
   * 0. Old length check.
   * 1. Add the already present item.
   * 2. The length remains same.
   * 3. Qty of previously added item increases.
   //  */
  it('properly Adds Item', function() {
    expect(tempFridge.contents.length).toBe(1);
    tempFridge.addItem(orange);
    expect(tempFridge.contents.length).toBe(1);
    expect(tempFridge.contents[0].name).toBe(fruit);
    expect(tempFridge.contents[0].qty).toBe(qty * 2);
    tempFridge.addItem(new Ingredient(fruit, 3));
    expect(tempFridge.contents.length).toBe(1);
    expect(tempFridge.contents[0].name).toBe(fruit);
    expect(tempFridge.contents[0].qty).toBe(qty * 2 + 3);
  });

  /** Checks
   * 1. Removes specified amount from particular item.
   * 2. Compare new qty with old qty.
   */
  it('removes some amount of already present item', function() {
    const tempIng: Ingredient = new Ingredient('blah', 8);
    tempFridge.addItem(tempIng);
    const oldQty: number = tempFridge.contents[1].qty;

    tempFridge.removeIng(tempIng, 5);
    expect(tempFridge.contents[1].qty).toBe(oldQty - 5);
  });

  /**
   * Better kind of ideal function.
   * Using maps or anything where I don't have to keep passing an Ingredient object.
   * Just pass the name of ingredient you want to remove.
   * If its removed than you get a true, if its not present than false.
   */
  /**Checks
   * 1. Removes completely already present item.
   * 2. Compare old length with new one
   */
  it('removing amount equals present qty', function() {
    const tempIng: Ingredient = new Ingredient('blah', 8);
    const oldlength: number = tempFridge.contents.length;
    tempFridge.removeIng(tempIng, tempIng.qty);
    expect(tempFridge.contents.length).toBe(oldlength - 1);

    // Checking correct item was removed.
    expect(tempFridge.contents.length).toBe(1);
    expect(tempFridge.contents[0].name).toBe(fruit);
    expect(tempFridge.contents[0].qty).toBe(qty * 2 + 3);
  });

  it('checking Recipe', function() {
    const tempRec: Recipe = new Recipe();
    const ing1: Ingredient = new Ingredient('apple', 12);
    const ing2: Ingredient = new Ingredient('banana', 5);
    const ing3: Ingredient = new Ingredient('carrot', 8);
    const ing4: Ingredient = new Ingredient('tomato', 11);
    const ing5: Ingredient = new Ingredient('potato', 20);
    const ing6: Ingredient = new Ingredient('chilli', 15);
    const ing7: Ingredient = new Ingredient('fish', 10);

    tempRec.addItem(ing1);
    tempRec.addItem(ing3);
    tempRec.addItem(ing4);
    tempRec.addItem(ing7);

    tempFridge.addItem(ing2);
    tempFridge.addItem(ing5);
    tempFridge.addItem(ing6);

    tempFridge.addItem(new Ingredient(ing3.name, ing3.qty + 4));
    tempFridge.addItem(new Ingredient(ing7.name, ing7.qty - 4));
    tempFridge.addItem(new Ingredient(ing4.name, ing4.qty - 4));
/**
 * Testing scenarios:
 * 1. Item from recipe is not in fridge.
 * 2. Item from recipe is partially in fridge.
 */
    console.log('Fridge');
    console.log(tempFridge.contents);
    console.log('Recipe');
    console.log(tempRec.ingredientList);

    tempFridge.checkRecipe(tempRec);
  });
});
