import { useState } from "react";

 function AppNew() {
    const [taskList, setList] = useState([])
    const [task, setTask] = useState("");

    return (
        <div>
            <div>
                <div>
                    {taskList.map( (element, index)=>{
                        return <h1 key={index}>{element} 
                        <button onClick={(index)=>{taskList.splice(index,1)
                        setList([...taskList])}}>Delete</button> 
                        <button onClick={()=>{}}>Complete</button></h1>
                    })}
                </div>
                <div>
                    <input type="text" onChange={(event)=>{
                        setTask(event.target.value)
                    }}/>
                    <button onClick={()=>{
                        setList([...taskList, task])
                    }}>Add task</button>
                </div>
            </div>
        </div>
    );
}