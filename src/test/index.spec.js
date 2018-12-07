import { add } from '../index';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2,3)).toEqual(5);
  });
});