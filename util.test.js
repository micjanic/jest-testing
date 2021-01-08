const {generateText, checkAndGenerate} = require('./util')

test('should output name and age', () => {
  const text = generateText('Mike', 29);
  expect(text).toBe('Mike (29 years old)');
  const text2 = generateText('Anna', 28);
  expect(text2).toBe('Anna (28 years old)');
})

test('should output data-less text', () => {
  const text = generateText("", null)
  expect(text).toBe(' (null years old)')

  const text2 = generateText();
  expect(text2).toBe('undefined (undefined years old)')
})

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Mike', 29);
  console.log(checkAndGenerate('Mike', 29))
  expect(text).toBe('Mike (29 years old)');
})