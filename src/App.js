import React, { useState } from 'react';
import "./style.css"
import TopForm from './topform';
import TaskItems from './taskItems';
import taskContest from './taskContest'

const App = ()=>{
    const [taskItems , setTaskItems] = useState([])


    return(
        <div className='container'>
            <div className='todo-container'>
            <taskContest.Provider value={{
                taskItems : taskItems ,
                setTaskItems : setTaskItems
            }}>
             <TopForm/>
             <TaskItems/>
        </taskContest.Provider>
            </div>
        </div>
    )
}
export default App ;