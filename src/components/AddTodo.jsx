import React ,{useState} from "react";
import {useDispatch} from "react-redux"
import { addToDo } from "../features/todo/todoSlice";

const AddTodo = () => {

    const[input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addToDo(input))
        setInput('')
    }

  return (
    <div className="w-full max-w-md mb-8">
      <form
        onSubmit={addTodoHandler}
        className="bg-white p-6 rounded shadow-md"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          placeholder="Enter a todo ....."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
     </div>
  );
};

export default AddTodo;
