import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
