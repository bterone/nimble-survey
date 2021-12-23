describe('Hello World', () => {
  const helloString = 'Hello World!'
  const helloArray: Array<string> = ['Hello', 'World!']

  test('asserts helloString as String', () => {
    expect(helloString).toBeString()
  })

  test('asserts helloArray as Array', () => {
    expect(helloArray).toBeArray()
  })
})

export default null
