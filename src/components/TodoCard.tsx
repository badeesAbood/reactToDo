import { useState } from "react";

export default function TodoCard(props: {
  todo: string;
  handleEditTodo: (oldTodo: string, newTodo: string) => void;
  handleDeleteTodo: (todo: string) => void;
}) {
  const { todo  , handleDeleteTodo , handleEditTodo } = props;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <>
      <li className="todoItem">
        {isEditing ? (
          <input
          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            type="text"
            value={todo}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEditing(false);
              }
            }}
            onChange={(e) => handleEditTodo(todo, e.target.value)}
          />
        ) : (
          <>{todo}</>
        )}
        <div className="actionsContainer">
          <i onClick={() =>  setIsEditing(!isEditing) } className="fa-solid fa-pen-to-square"></i>
          <i className="fa-regular fa-trash-can" onClick={() => handleDeleteTodo(todo)}></i>
        </div>
      </li>
    </>
  );
}
