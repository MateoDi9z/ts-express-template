import request from "supertest"
import { expect } from "chai"

import createServer from "server"
const app = createServer()

describe("Homepage", () => {
  it("\"./\" returns with 200", (done) => {
    request(app)
      .get("/")
      .expect(200, done)
  })
})