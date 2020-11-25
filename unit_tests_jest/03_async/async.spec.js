const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')

describe('Ajax echo: ', () => {

  test('should be value async', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })

  test('should catch error with async', async () => {
    try {
      await Ajax.echo('some data')
    }
    catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })
})

describe('Ajax get:', () => {
  let resp,
    todos
  beforeEach(() => {
    todos = [
      { id: 1, title: 'Todos', completed: false },
    ]
    resp = {
      data: {
        todos,
      },
    }
  })
  test('should return data from backend', () => {
    axios.get.mockReturnValue(resp)
    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})