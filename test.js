const master = require('./master')

//[red, green, blue, yellow]

test('one wrong color in wrong position', () => {
  const result = master.evaluate(['blue'], ['red'])
  expect(result).toStrictEqual([0, 0])
})

test('one correct color in correct position', () => {
  const result = master.evaluate(['blue'], ['blue'])
  expect(result).toStrictEqual([1, 0])
})

test('Two colors, one correct but in the wrong position', () => {
  const result = master.evaluate(['red', 'yellow'], ['blue', 'red'])
  expect(result).toStrictEqual([0, 1])
})

test('Three colors, one in correct position', () => {
  const result = master.evaluate(['red', 'yellow', 'blue'], ['green', 'green', 'blue'])
  expect(result).toStrictEqual([1, 0])
})

test('Four colors, one in correct position, one correct but in wrong positon', () => {
  const result = master.evaluate(['red', 'yellow', 'blue', 'green'], ['red', 'blue', 'a', 'a'])
  expect(result).toStrictEqual([1, 1])
})

test('Four colors, all wrong colors and positions', () => {
  const result = master.evaluate(['red', 'yellow', 'blue', 'green'], ['a', 'a', 'a', 'a'])
  expect(result).toStrictEqual([0, 0])
})

test('Four colors, all correct positions and color', () => {
  const result = master.evaluate(['red', 'yellow', 'blue', 'green'], ['red', 'yellow', 'blue', 'green'])
  expect(result).toStrictEqual([4, 0])
})
