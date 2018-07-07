import { Ingredient } from './ingredient.class';
import { Recipe } from './recipe.class';

describe('Recipe', function() {
  const fruit = 'orange';
  const qty = 5;
  const orange: Ingredient = new Ingredient(fruit, qty);
  const rec: Recipe = new Recipe();

  /** Checks
   * 1. Initial length zero
   * 2. After adding, length increased
   * 3. Adding one more item and checking length
   */
  it('can addItem', function() {
    expect(rec.ingredientList.length).toBe(0);
    rec.addItem(orange);
    expect(rec.ingredientList.length).toBe(1);
  });

  /** Checks
   * 0. Old length check.
   * 1. Add the already present item.
   * 2. The length remains same.
   * 3. Qty of previously added item increases.
   */
  it('can add same item correctly', function() {
    expect(rec.ingredientList.length).toBe(1);
    rec.addItem(orange);
    expect(rec.ingredientList.length).toBe(1);
    expect(rec.ingredientList[0].name).toBe(fruit);
    expect(rec.ingredientList[0].qty).toBe(qty * 2);
  });

  /** Checks
   * 1. Removes specified amount from particular item.
   * 2. Compare new qty with old qty. Also length check.
   */
  it('removes some amount of already present item', function() {
    const oldQty = rec.ingredientList[0].qty;
    rec.ingredientList[0].subtract(2);
    expect(rec.ingredientList.length).toBe(1);
    expect(rec.ingredientList[0].qty).toBe(oldQty - 2);
  });
// >Comment:1 here
});
/** Comment:1 {
 * Checks
 * 1. Removes completely already present item.
 * 2. Compare old length with new one
 */ // There is no method which is responsible for removing ingredient if its qty is 0.
// it('removing amount equals present qty', function() {
    // let oldlength:number = tempFridge.contents.length;
    // tempFridge.removeIng('blah', 5);
    // expect(tempFridge.contents.length).toBe(oldlength-1);
// });

// } Comment:1
