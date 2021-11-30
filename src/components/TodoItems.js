import PropTypes from "prop-types";
const TodoItem = ({ todo }) => {
  const updateTodo = () => {
    const oldDone = todo.done;
    todo.done = !todo.done;
    if (!oldDone) {
      fetch("http://localhost:8000/todos/" + todo.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }).then(() => {
        alert("todo updated.");
      });
    } else {
      alert("todo sudah selesai");
    }
  };

  const deleteTodo = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      alert("todo deleted.");
    });
  };

  return (
    <li className={`${todo.done ? "checked" : ""}`}>
      <div onClick={updateTodo}>{todo.title}</div>
      <span className="close" onClick={deleteTodo}>
        x
      </span>
    </li>
  );
};

// solusi jika missing in prop validation
TodoItem.propTypes = {
  todo: PropTypes.object,
};
export default TodoItem;
