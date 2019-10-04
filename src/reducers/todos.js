export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.todo,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      let index = state.findIndex((todo) => todo.id === action.todoId);
      state[index].completed = !state[index].completed;
      return state;
    default:
      return state;
  }
};
