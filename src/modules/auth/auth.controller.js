import { sign } from "../../utils/jwt.service.js"
import { register } from "./auth.service.js"

export const registerHandler = async (req, res, next) => {
  try {
    const body = req.body
    const user = await register(body)
    const token = sign({ userId: user.id })
    res.send({
      token
    })
  }
  catch (e) {
    next(e) 
  }
}