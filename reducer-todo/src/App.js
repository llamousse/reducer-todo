import React, { useReducer } from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

import './App.css';
// import './components/Todo.css';

import { initialState, todoReducer } from './reducers/todoReducer.js';


const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <h1>Reducer To-Do List</h1>
      <TodoList todo={state.todos} dispatch={dispatch} />
      {/* <TodoForm dispatch={dispatch}/> */}
    </div>
  );
}

export default App;
