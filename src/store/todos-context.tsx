import React, { useState } from "react";
import TodoData from "../models/TodoData";

type todosContextObj = {
  todos: TodoData[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<todosContextObj>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoData[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new TodoData(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: todosContextObj = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
