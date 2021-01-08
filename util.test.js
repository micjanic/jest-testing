const {generateText} = require('./util')

test('should output name and age', () => {
  const text = generateText('Mike', 29);
  expect(text).toBe('Mike (29 years old)');
})