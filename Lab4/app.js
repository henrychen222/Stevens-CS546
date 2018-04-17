const todoItems = require("./todo");
const connection = require("./mongoConnection");

async function main() {
    //1.create Ponder Dinosaurs Task
    const ponder_task = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log("-----------Ponder Dinosaurs Task created----------------------------------" + "\n");
    console.log(ponder_task);
    console.log("\n")

    //2.create Pokemon task
    const pokemon_task = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    console.log("-----------Pokemon Task created-------------------------------------------" + "\n");
    console.log(pokemon_task);
    console.log("\n");

    //3.query all the two tasks
    const getAllTasks = await todoItems.getAllTasks();
    console.log("-----------All Tasks are here----------------------------------------------" + "\n");
    console.log(getAllTasks);
    console.log("\n");

    //4.After all the tasks are logged, remove the first task   
    const removeTask = await todoItems.removeTask(ponder_task._id);  //problem
    console.log("-----------Ponder Dinosaurs Task has already been removed------------------" + "\n");
    console.log("\n");

    //5.Query all the remaining tasks and log them
    const get_all_remaining_task = await todoItems.getAllTasks();
    console.log("-----------All the remaining tasks are here------------------" + "\n");
    console.log(get_all_remaining_task);
    console.log("\n");

    //6.Complete the remaining task/Modify the task
    const task = await todoItems.getTask(pokemon_task._id);   //problem solved
    
    //7.Log the task that has been completed with its new value.
    const finishedTask = await todoItems.completeTask(task._id);  //problem solved 
    console.log("-----------Completed/Updated tasks are here------------------" + "\n");
    console.log(finishedTask);
    
    //quit the running terminal 
    const db = await connection();
    await db.serverConfig.close();
    
    console.log("\n");
    console.log("Well Done, Good Job baby!");

}


main();