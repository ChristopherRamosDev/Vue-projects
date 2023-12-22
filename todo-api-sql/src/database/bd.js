import "dotenv/config";
import { createPool } from 'mysql2/promise'
const pool = createPool({
    host: process.env.BD_SERVER,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    port: 3306,
    database: process.env.BD_NAME
})
const BD = {
    getConexion() {
        return pool.getConnection()
    },
}
export default BD