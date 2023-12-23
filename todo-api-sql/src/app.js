import express from "express";
import cors from 'cors'
import * as dotenv from 'dotenv'
import routes from "./routes/index.routes.js";
dotenv.config()
const app = express()

// Habilita CORS con las opciones
app.listen(process.env.PORT, () => {
    console.log('desde el puerto ' + process.env.PORT);
})
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)
app.use((req, res, next) => {
    res.status(404).json({ messasge: "Endpoint not found" });
})
