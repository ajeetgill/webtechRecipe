import { Ingredient } from './ingredient.class';

describe('Ingredient ', function() {
  const fruit = 'orange';
  const qty = 5;
  const orange = new Ingredient(fruit, qty);

  it('has name', function() {
    expect(orange.name).toBe(fruit);
  });

  it('has qty', function() {
    expect(orange.qty).toBe(qty);
  });

  it('increase quantity', function() {
    const amt = 10;
    orange.add(amt);
    expect(orange.qty).toBe(amt + qty);
  });

  it('decrease quantity', function() {
    expect(orange.qty).toBe(15);
    const subAmt = 5; // Needs to be less than old quantity or if equal or greater, expected is 0.
    const temp = orange.qty;
    expect(temp).toBe(15);
    orange.subtract(subAmt);
    expect(orange.qty).toBe(temp - subAmt);
  });
});
