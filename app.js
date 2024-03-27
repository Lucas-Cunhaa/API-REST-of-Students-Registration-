const express = require('express');
const homeRouter = require('./src/routes/homeRoutes')

class App {
  constructor () {
      this.app = express()
      this.middlewares(); 
      this.routes()
  }
  middlewares(){
      this.app.use(express.urlencoded( { extended: true } ))
      this.app.use(express.json())
  } 

  routes () {
      this.app.use('/', homeRouter)
  }
}

module.exports = new App()

