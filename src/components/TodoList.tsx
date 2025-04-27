import TodoCard from "./TodoCard";

export default function TodoList(props: {
  todos: string[];
  handleEditTodo: (oldTodo: string, newTodo: string) => void;
  handleDeleteTodo: (todo: string) => void;
}) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;

  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard
            key={index}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        );
      })}
    </ul>
  );
}
