import Task from "../database/Task";

export const createTask = async (req, res) => {
    try {
        if (!req.body.title || !req.body.description) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            
        })
        await newTask.save();
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
    
    }

export const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}
