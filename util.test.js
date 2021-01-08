const {generateText} = require('./util')

test('should output name and age', () => {
  const text = generateText('Mike', 29);
  expect(text).toBe('Mike (29 years old)');
})

test('should output data-less text', () => {
  const text = generateText("", null)
  expect(text).toBe(' (null years old)')
})