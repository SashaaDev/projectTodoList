import Todo from "./TodoList.tsx";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.ts";
const Todos = () => {
  const { todos, completedTodosCount } = useContext(TodoContext);

  return (
    <div className="todos">
      {todos.length === 0 &&
        <p className="todos__empty">Лист задач порожній</p>}
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      {completedTodosCount > 0 &&
        <p className="todos__message">
          Ви зробили  {completedTodosCount}
          {completedTodosCount === 1 ? " завдання" : " завдань"}
        </p>}
    </div>
  );
};

export default Todos;
