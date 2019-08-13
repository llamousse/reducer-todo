import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
    return (
        <>
            <div className="todoTable">
                {props.todo && props.todo.map(item => (
                    <Todo key={item.id} todo={item} dispatch={props.dispatch} />
                ))}
            </div>
            <button className="clear">Clear Completed</button>
        </>
    );
};

export default TodoList;

// onClick={() => props.dipatch({ type: "TODO_COMPLETE" })}