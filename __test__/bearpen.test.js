import { Bearpen } from './../src/bearpen.js';
import { Bear } from './../src/bear.js';

describe('Bear', () => {
  jest.useFakeTimers();
  let bearpen;
  let testBear;

  beforeEach(function() {
    bearpen = new Bearpen();
    testBear = new Bear("Barry");
    bearpen.addBear(testBear);
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should show a bear in the pen when added', () => {
    bearpen.addBear(testBear);
    expect(bearpen.bearArray[0]).toEqual(testBear);
  });
  test('should show a bear in the pen when added', () => {
    expect(bearpen.findBear(1)).toEqual(testBear);
  });
});
