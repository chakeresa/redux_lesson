export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      let index = state.findIndex((todo) => todo.id === action.todoId);
      let newState = [...state];
      newState[index].completed = !newState[index].completed;
      return newState;
    default:
      return state;
  }
};
