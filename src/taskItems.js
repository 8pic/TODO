import React, { useContext } from "react";
import taskContest from "./taskContest";

const TaskItems = ()=>{
    const {taskItems , setTaskItems} = useContext(taskContest);
    const setDoneTrue = (id)=>{
        let index = taskItems.findIndex(t => t.id === id)
        let newTaskItems = [...taskItems]
        newTaskItems[index].done = !newTaskItems[index].done 
        setTaskItems(newTaskItems)
    }
    const DeleteTask = (id)=>{
        let newTaskItems = [...taskItems].filter(taskItem => taskItem.id !== id)
        setTaskItems(newTaskItems)
    }


    if(taskItems.length){
        return(<ul className="task-items">
            {
                taskItems.map((taskitem)=>(
                <li className={`task-item  ${taskitem.done ? "done" : ''}`}>
                {taskitem.title}
                <span className="icon-container">
                <i className={`fas ${taskitem.done ? "fa-check icon-check" : "fa-times icon-times"}`}  onClick={()=>setDoneTrue(taskitem.id)}></i>
                <i className="fas fa-trash icon-trash"  onClick={()=>DeleteTask(taskitem.id)}></i>
                 </span>
            </li>
                ))
            }
        </ul>)
    }else{
        return(<h4>nothing todo</h4>)
    }
}
export default TaskItems ;