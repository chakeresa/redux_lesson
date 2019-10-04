export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo,
});

export const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO',
  todoId,
});
