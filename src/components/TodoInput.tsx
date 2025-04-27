import { useState } from "react";

export default function TodoInput(props: {handleAddTodo: (todo: string) => void}) {


  const { handleAddTodo } = props;
  const [toDoValue, setToDoValue] = useState<string>("");


  return (
   <header>
    <input value={toDoValue} onChange={(e) => setToDoValue(e.target.value)} placeholder="Enter todo ..." />
    <button onClick={() =>  {handleAddTodo(toDoValue)
      setToDoValue("");
    }} >Add</button>
   </header>
  )
}
