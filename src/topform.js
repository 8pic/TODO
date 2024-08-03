import React, { useContext, useState } from "react";
import taskContest from "./taskContest";


const TopForm = ()=>{
    const [task , setTask] = useState("")
    const {taskItems , setTaskItems} = useContext(taskContest)

    const handleSetTask = (e)=>{
        setTask(e.target.value)
    }
    const handleAddTask = (e)=>{
        if(task.length){
            e.preventDefault()
            setTaskItems([...taskItems , {id:Math.random() , title:task , done:false}])
        }
    }

    return(
        <div className="top-container">
        <h1>todo</h1>
        <form className="form" onSubmit={handleAddTask}>
            <input type="text" className="todo-input" onChange={handleSetTask} value={task}></input>
            <button type="submit" className="submit-btn">ثبت</button>
        </form>
        </div>
    )
}

export default TopForm;