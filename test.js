const master = require('./master')

test('one wrong color in wrong position', () => {
  const result = master.evaluate(['blue'], ['red'])
  expect(result).toStrictEqual([0, 0])
})

test('one correct color in correct position', () => {
  const result = master.evaluate(['blue'], ['blue'])
  expect(result).toStrictEqual([1, 0])
})