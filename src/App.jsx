import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  

  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     <AddTodo/>
     <Todos/>
     </div>
    </>
  )
}

export default App
