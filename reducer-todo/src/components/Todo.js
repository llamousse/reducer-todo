import React from 'react';

const Todo = props => {
    return (
        <div 
            className={`todo${props.todo.completed ? " completed" : ""}`}
            onClick={() => props.dispatch({ type: "TOGGLE_TASK", payload: props.todo.id })}
        >
            <p className="todoTask">{props.todo.item}</p>
        </div>
    );
};

export default Todo;