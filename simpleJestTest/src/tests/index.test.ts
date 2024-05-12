import {describe, expect, test, it} from '@jest/globals';
import {sum, multiply} from '../index';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    const finalAnswer = sum(1, 2);
    expect(finalAnswer).toBe(3);
  });

  it('adds 3+5 to equal 8', () => {
    const finalAnswer = sum(3, 5);
    expect(finalAnswer).toBe(5);
  })
});

describe("multi module", () => {
    it("", ()=>{
        const finalAnswer = multiply(3, 5);
        expect(finalAnswer).toBe(15);
    })
})