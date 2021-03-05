const task={
    task: [{
        text :'Grocery store',
        completed : true
    },{
        text : 'Clean Yard',
        completed : true
    },{
        text : 'Film course',
        completed : false
    }],
    

    getTaskToDo(){
        return this.task.filter((task) => task.completed === false)
    }

    // getTaskToDo(){
    //     const taskToDo =this.task.filter((task) =>{
    //         return task.completed === false
    //     })
    //     return taskToDo
    //     }
    }

console.log(task.getTaskToDo())