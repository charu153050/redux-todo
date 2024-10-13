import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {removeToDo} from "../features/todo/todoSlice"

function Todos() {
     const todos = useSelector(state => state.todos)
     const dispatch = useDispatch()
  return (
    <div className="w-full max-w-md">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todos</h1>
        <ul className="list-disc pl-5">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center text-gray-700 mb-2">
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeToDo(todo.id))}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
  )
}

export default Todos