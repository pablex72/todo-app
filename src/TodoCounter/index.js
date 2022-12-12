import React from 'react';
import { TodoContext } from '../App/TodoContext';
import './TodoCounter.css';

function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    //const {total, completed} = props;
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

//export default TodoCounter;
export { TodoCounter }