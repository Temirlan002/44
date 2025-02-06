import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from '../../redux/actions/actions'


const MainPage = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTaskAction(taskTitle, taskDesc, false))
    }

    return (
        <div>
            <input type="text" onChange={(e) => setTaskTitle(e.target.value)} />
            <input type="text" onChange={(e) => setTaskDesc(e.target.value)} />
            <button onClick={addTask}>add</button>
        </div>
    )

}

export default MainPage;