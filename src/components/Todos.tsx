import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
