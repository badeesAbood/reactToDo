import "./index.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  function handleAddTodo(todo: string) {
    if (todo === "") {
      alert("Please enter a todo");
      return;
    }
    const newTodos = [...todos, todo];

    handleSaveTodos(newTodos);
    setTodos(newTodos);
  }

  // this two function should be handled by index but either way is fine for me
  function handleDeleteTodo(todo: string) {
    const newTodos = todos.filter((t) => t !== todo);
    handleSaveTodos(newTodos);
    setTodos(newTodos);
  }
  function handleEditTodo(oldTodo: string, newTodo: string) {
    const newTodos = todos.map((t) => (t === oldTodo ? newTodo : t));
    handleSaveTodos(newTodos);
    setTodos(newTodos);
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  function handleSaveTodos(newTodos : string[]) {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
