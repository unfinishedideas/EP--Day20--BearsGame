import { Bear } from './../src/bear.js';

describe('Bear', () => {

  test('should check if slowlyDie decrements values', () => {
    let newBear = new Bear("Barry");
    newBear.slowlyDie();
    expect((newBear.attention)&&(newBear.sleep)&&(newBear.hunger)).toEqual(19);
  });
  test('should return the bears name when sayHello is called', () => {
    let newBear = new Bear("Barry");
    expect(newBear.sayHello()).toEqual("Hi! My name is Barry!");
  });
});
