import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

    const [task,
        setTask] = useState('');
    const [tasksToDo,
        setTasksToDo] = useState([]);
    // add more funcionality later - filtering based on "complited" status const
    // [status, setStatus] = useState('All');

    return (
        <div className="App">
            <header>
                <h1>TO-DO APP</h1>
                <Form
                    task={task}
                    setTask={setTask}
                    tasksToDo={tasksToDo}
                    setTasksToDo={setTasksToDo}/>
                <ToDoList tasksToDo={tasksToDo} setTasksToDo={setTasksToDo}/>
            </header>
        </div>
    );
}

export default App;
