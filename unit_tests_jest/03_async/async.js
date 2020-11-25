const axios = require('axios')

module.exports = class Ajax {
  static echo (data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data)
        } else {
          reject(data)
        }
      }, 150)
    })
  }

  static async get () {
    try {
      const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
      return data.data
    }
    catch (err) {
      console.log(err)
    }
  }
}