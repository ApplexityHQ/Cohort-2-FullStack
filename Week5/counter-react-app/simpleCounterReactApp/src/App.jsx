//hook
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go the gym from class",
    completed: false
  }, {
        title: "Go to gym",
    description: "Go the gym from class",
    completed: true
  },]); // [1,2]

function addTodo(){
  // [1,2]
  // [...todos, 3] -> [1,2,3]
  setTodos([...todos,{
    title: "new todo",
    description: "desc to new todo"
  }])
}

  return (
    <div>
      <button onClick={addTodo}> Add a random Task</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[0].title} description={todos[0].description}></Todo> */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })

      }
    </div>
  )
}


// todo app, {
// title,
// description,
// complete
//}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App
