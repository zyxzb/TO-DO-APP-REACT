// import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons';

const ToDoTask = ({todo, tasksToDo, setTasksToDo}) => {
    // const[doneTask, setDoneTask] = useState(false);

    const handleDelete = () => {

        setTasksToDo(tasksToDo.filter((el) => el.id !== todo.id));

    };

    const handleDoneTask = () => {
        // setDoneTask(!doneTask);

        setTasksToDo(tasksToDo.map(task => {
            if (task.id === todo.id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        }))
    }

    return (
        <div className='todo-box'>
            <li
                className={todo.completed
                ? 'todo-item done'
                : 'todo-item'}>{todo.text}</li>
            <button onClick={handleDoneTask}><FontAwesomeIcon icon={faCheck}/></button>
            <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/></button>
        </div>
    );
}

export default ToDoTask;
