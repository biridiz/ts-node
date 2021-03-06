import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import HelloWorld from './hello'
import { Repository } from './repository'


class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(`mongodb://user:123@database:27017/app`)
      .then (() => {
        console.log("Connected to database!")
      })
      .catch (err => {
        console.log("Error connected to database", err)
      });
  }

  private routes (): void {
    this.express.get('/', (req, res) => {
      res.send(new HelloWorld(new Repository))
    })
  }
}

export default App