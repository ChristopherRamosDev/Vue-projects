import TaskModel from "../model/task.model.js";

const TaskController = {
    async addTask(req, res) {
        const result = await TaskModel.addTask(req.body)
        res.send(result)
    },
    async getTasks(req, res) {
        const result = await TaskModel.getTasks()
        res.send(result)
    },
    async getTask(req, res) {
        const result = await TaskModel.getTask(req.params)
        res.send(result)
    },
    async deleteTask(req, res) {
        const result = await TaskModel.deleteTask(req.params)
        res.send(result)
    },
    async updateTask(req, res) {
        const result = await TaskModel.updateTask(req.params.id, req.body.task)
        res.send(result)
    },
}

export default TaskController