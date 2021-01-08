const { expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('tests if array is cloned properly', ()=>{
  const array = [1,2,3];
  expect(array).toEqual(array)
  expect(cloneArray(array)).not.toBe(array)
})