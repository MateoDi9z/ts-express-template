import "dotenv/config"
import express, {
  Application,
  Request,
  Response,
  NextFunction
} from "express"
import 'colorts/lib/string';

import createServer from "server"

const startServer = () => {
  const app = createServer()
  const port: number = parseInt(<string>process.env.PORT, 10)

  app.listen(port, () => {
    console.log("====================================================")
    console.log(`- ${getDate().green} Server running on port `+`:${port}`.grey)
  })
}

const getDate = (): string => {
  const date = new Date()
  const hours: string = date.getHours() > 10 ? ""+date.getHours() : "0" + date.getHours()
  const mins: string = date.getMinutes() > 10 ? ""+date.getMinutes() : "0" + date.getMinutes()
  const sec: string = date.getSeconds() > 10 ? ""+date.getSeconds() : "0" + date.getSeconds()
  return `${hours}:${mins}:${sec}`
}

startServer()