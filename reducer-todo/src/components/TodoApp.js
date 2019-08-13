// import React, { useState, useReducer } from 'react';
// import TodoList from './TodoList.js';
// import TodoForm from './TodoForm.js';

// import { initialState, todoReducer } from '../reducers/todoReducer.js';
// // actions -
// // TODO_ADD **
// // TODO_COMPLETE **

// const Todo = () => {
//     const [newTodoItem, setNewTodoItem] = useState();
//     // useReducer - takes in a reducer, and an initialState obj
//     // returns - a state obj, and the dispatch fn
//     const [state, dispatch] = useReducer(todoReducer, initialState);
//     console.log(state);

//     const toggleItem = id => {
//         // console.log(id);
//         this.setState({
//           todos: this.state.todos.map(item => {
//             if (item.id === id) {
//               return {
//                 ...item,
//                 completed: !item.completed
//               }
//             } else {
//               return item;
//             }
//           })
//         });
//       };
    
//     //   addItem = itemName => {
//     //     const newItem = {
//     //       task: itemName,
//     //       id: Date.now(),
//     //       completed: false
//     //     }
//     //     this.setState({
//     //       todos: [...this.state.todos, newItem]
//     //     });
//     //   };
    
//     //   clearCompleted = () => {
//     //     this.setState({
//     //       todos: this.state.todos.filter(item => !item.completed)
//     //     });
//     //   };

//     return (
//         <div className="todoApp">
//             <h2 className="todoTitle">Todo List</h2>
//             {/* <TodoForm addItem={this.addItem} /> */}
//             {/* <TodoList  */}
//             {/* // todos={this.state.todos} */}
//             {/* // toggleItem={this.toggleItem} */}
//             {/* // clearCompleted={this.clearCompleted} */}
//             {/* // /> */}
//             {!state.completed ? (
                
//             ) : (
//                 <h1>Haha hello</h1>
//             )}

//       </div>
//     );
// };

// export default Todo;
