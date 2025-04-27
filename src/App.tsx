
import './index.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {

  const [todos, setTodos] =  useState<string[]>([])

  function handleAddTodo(todo: string) {

    const newTodos = [...todos, todo] 

    console.log(newTodos)
    setTodos(newTodos)
  }

  function handleDeleteTodo(todo: string) {
    const newTodos = todos.filter((t) => t !== todo)
    setTodos(newTodos)
  }

  function handleEditTodo(oldTodo: string, newTodo: string) {
    const newTodos = todos.map((t) => (t === oldTodo ? newTodo : t))
    setTodos(newTodos)
  }
  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo}/> 
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default App
