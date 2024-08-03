import { createContext } from "react";

const taskContest = createContext(
    {
        taskItems : [],
        setTaskItems : ()=>{}
    }
)

export default taskContest