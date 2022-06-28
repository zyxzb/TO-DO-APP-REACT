import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Form = ({task, setTask, tasksToDo, setTasksToDo}) => {

    const handleInputText = (e) => {

        setTask(e.target.value.toUpperCase());
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setTasksToDo([
            ...tasksToDo, {
                text: task,
                completed: false,
                id: Math.random() * 100
            }
        ]);

        setTask('');
    }

    return (
        <form>
            <input type="text" value={task} onChange={handleInputText}/>
            <button className='todo-button' onClick={handleSubmit}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            {/* <div className="select">
                <select name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div> */}
        </form>
    );
}

export default Form;
