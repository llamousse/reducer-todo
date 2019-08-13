export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }]
};
  
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_TASK':
            return {
                ...state, 
                todos: state.todos.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            };

        // case 'ADD_TASK':
        //     const newTask = {
        //         task: action.payload,
        //         completed: false,
        //         id: Date.now()
        //     };
        //     // console.log(newTask)
        //     return {...state, todos: [...state.todos, newTask]};

        // case 'TODO_COMPLETE':
        //     return {
        //         ...state,
        //         completed: true
        //     };
        default:
            return state;
    }
};