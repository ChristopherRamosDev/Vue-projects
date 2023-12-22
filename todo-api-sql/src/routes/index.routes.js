
import express from "express"
import todo from "./todo.routes.js"
const routes = express()
routes.use('/api/', todo)
export default routes