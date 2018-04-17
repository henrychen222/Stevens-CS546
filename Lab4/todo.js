const mongoCollections = require("./mongoCollections");
const todo = mongoCollections.todo;
const uuidv4 = require('uuid/v4');
const dateFormat = require('dateformat');

module.exports = {

    async createTask(title, description) {
        if (!title) throw "You must provide a title for your task";

        // if (!description || !Array.isArray(description))
        //     throw "You must provide an array of description";

        if (description.length === 0) throw "You must provide at least one description.";
        const taskCollection = await todo();

        let newTask = {
            // new_id: uuidv4(),   //randomly generate an id 
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };

        const created_task_info = await taskCollection.insertOne(newTask);
        if (created_task_info.insertedCount === 0) throw "Could not add task";

        //const new_id = uuidv4();

        const new_id = created_task_info.insertedId;
        // console.log(new_id); //debug

        //insert an new id for the task
        const task = await this.getTask(new_id);
        return task;
    },

    async getAllTasks() {

        const taskCollection = await todo();
        //console.log("debug111111111111111");
        const all_tasks = await taskCollection.find({}).toArray();

        return all_tasks;
    },

    async getTask(id) {
                
        if (!id) throw "You must provide an id to search for";

        const taskCollection = await todo();
        const task = await taskCollection.findOne({ _id: id });
        if (task === null) throw "No task with that id";

        return task;
    },

    //modify or update task in database
    async completeTask(taskId) {
        if (!taskId) throw "You must provide an id to search for";
        
        //used for keeping the unchanged information
        const specific_task = await this.getTask(taskId);
                    
        const taskCollection = await todo();
        const comepletedTask = {
            title: specific_task.title,
            description: specific_task.description,
            //modify two items
            completed: true,
            completedAt: dateFormat(Date.now())    //use dataFormat to format the current time
        };
        
        //update the database
        const updatedInfo = await taskCollection.replaceOne({ _id: taskId }, comepletedTask);
        //console.log(updatedInfo);   //debug
        //console.log("debug11111111111111111111");

        if (updatedInfo.modifiedCount === 0) {
          
          throw "could not update task successfully";
        }
        // console.log("debug222222222222222222222");

        return await this.getTask(taskId);
    },

    async removeTask(id) {

        if (!id) throw "You must provide an id to search for";

        const taskCollection = await todo();
        const deleted_task_info = await taskCollection.removeOne({ _id: id });

        if (deleted_task_info.deletedCount === 0) {
            throw `Could not remove task with id of ${id}`;
        }
        0;
    }

}