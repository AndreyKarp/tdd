const { sum, nativeNull } = require('./intro')

describe('sum function: ', () => {

  test('sum should return of two values', () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, 3)).toEqual(4)
  })

  test('sum should return value correctly comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(4)
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    expect(sum(2, 3)).toBeLessThan(10)
    expect(sum(2, 3)).toBeLessThanOrEqual(5)
  })

  test('sum should sum 2 float values correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Native null function: ', () => {

  test('should return false value null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
})



