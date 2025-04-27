export default function TodoCard(props: {
  todo: string;
  handleEditTodo: (oldTodo: string, newTodo: string) => void;
  handleDeleteTodo: (todo: string) => void;
}) {
  const { todo  , handleDeleteTodo , handleEditTodo } = props;
  return (
    <>
      <li className="todoItem">
        {todo}
        <div className="actionsContainer">
          <i onClick={() =>  handleEditTodo(todo ,todo) } className="fa-solid fa-pen-to-square"></i>
          <i className="fa-regular fa-trash-can" onClick={() => handleDeleteTodo(todo)}></i>
        </div>
      </li>
    </>
  );
}
