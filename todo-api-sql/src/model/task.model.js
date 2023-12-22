import BD from "../database/bd.js";

const TaskModel = {
    async addTask(data) {
        const { name, priority } = data
        let response = { status: false }
        try {
            const conn = await BD.getConexion()
            let sql = "INSERT INTO tasks set name=?,priority=?,status=?"
            const row = await conn.query(sql, [name, priority, 1])
            if (row[0].affectedRows) {
                response.status = true
            }
            conn.release()
        } catch (error) {
            res.status(500).json({ messasge: "Error" });
        }
        return response
    },
    async getTasks() {
        try {
            const conn = await BD.getConexion()
            let sql = "SELECT * FROM tasks"
            const [rows] = await conn.query(sql)
            conn.release()
            return rows

        } catch (error) {
            res.status(500).json({ messasge: "Error" });
        }
        return response
    },
    async getTask(data) {
        try {
            const { id } = data
            const conn = await BD.getConexion()
            let sql = "SELECT * FROM tasks WHERE id=?"
            const [rows] = await conn.query(sql, [id])
            conn.release()
            return rows

        } catch (error) {
            res.status(500).json({ messasge: "Error" });
        }
        return response
    },
    async deleteTask(data) {
        const { id } = data
        let response = { status: false }
        try {
            const conn = await BD.getConexion()
            let sql = "DELETE FROM  tasks where id=?"
            const row = await conn.query(sql, [id])
            if (row[0].affectedRows) {
                response.status = true
            }
            conn.release()
        } catch (error) {
            res.status(500).json({ messasge: "Error" });
        }
        return response
    },
    async updateTask(id, data) {
        const { name, priority } = data
        let response = { status: false }
        try {
            const conn = await BD.getConexion()
            let sql = "UPDATE tasks set name=?,priority=? where id=?"
            const row = await conn.query(sql, [name, priority, id])
            if (row[0].affectedRows) {
                response.status = true
            }
            console.log(name, priority, id);
            conn.release()
        } catch (error) {
            res.status(500).json({ messasge: "Error" });
        }
        return response
    }
}

export default TaskModel