import { Bear } from './../src/bear.js';

describe('Bear', () => {
  jest.useFakeTimers();
  let barry;

  beforeEach(function() {
    barry = new Bear("Barry");
    barry.slowlyDie();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should return the bears name when sayHello is called', () => {
    expect(barry.sayHello()).toEqual("Hi! My name is Barry!");
  });

  test('should have a name and hunger, sleep and attention of 20 when it is created', () => {
    expect(barry.name).toEqual("Barry");
    expect(barry.hunger).toEqual(20);
    expect(barry.attention).toEqual(20);
    expect(barry.sleep).toEqual(20);
  });

  test('should have a food level of 17 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(barry.hunger).toEqual(17);
  });

  // Test to see if Bear Dies
  test('should get very hungry if the food level drops below zero', function() {
    barry.hunger = 0;
    expect(barry.bearStarves()).toEqual(true);
  });

  test('should get bored if the attention drops below zero', function() {
    barry.attention = 0;
    expect(barry.bearBored()).toEqual(true);
  });

  test('should get very sleepy if the sleep level drops below zero', function() {
    barry.sleep = 0;
    expect(barry.bearStroke()).toEqual(true);
  });




});
