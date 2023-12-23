import express from "express";
import cors from 'cors'
import * as dotenv from 'dotenv'
import routes from "./routes/index.routes.js";
dotenv.config()
const app = express()
const corsOptions = {
    origin: ['http://127.0.0.1:5174', 'https://todo-app-mu-orpin.vercel.app'] // Asegúrate de cambiar esto a la URL de tu front-end
};

// Habilita CORS con las opciones
app.listen(process.env.PORT, () => {
    console.log('desde el puerto ' + process.env.PORT);
})
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)
app.use((req, res, next) => {
    res.status(404).json({ messasge: "Endpoint not found" });
})
