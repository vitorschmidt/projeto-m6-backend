import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleAppErrorMiddleware from "./middlewares/handleAppError"
import { appRoutes } from "./routes/index"


const app = express()

app.use(express.json())

appRoutes(app)

app.use(handleAppErrorMiddleware)

export default app