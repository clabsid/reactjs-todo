import { useEffect, useState } from "react";
import TodoItem from "./TodoItems";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((res) => {
        return res.json();
      })
      .then((dataApi) => {
        setTodos(dataApi);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        }
      });
  }, null);
  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
export default TodoList;
