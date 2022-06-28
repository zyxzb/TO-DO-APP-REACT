import React from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = ({tasksToDo, setTasksToDo}) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {tasksToDo.map(todo => (<ToDoTask
                    todo={todo}
                    key={todo.id}
                    setTasksToDo={setTasksToDo}
                    tasksToDo={tasksToDo}/>))}
            </ul>
        </div>
    );
}

export default ToDoList;
