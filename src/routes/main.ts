import {
  Router,
  Request,
  Response
} from "express"

const router = Router()

// @route GET /
// @desc Homepage
// @access PUBLIC
router.get("/", (req: Request, res: Response) => {
  res.send("Hello world!")
})

export default router