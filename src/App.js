import {useState} from 'react'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "" || todos.find(item => item === todo)) return
    setTodos(currentArray => [todo, ...currentArray])
    setTodo("")
  }
  const rmTodo = (event) => {
    event.preventDefault();
    // console.log("##event", event)
    setTodos(currentArray => [...currentArray.filter(element => element !== event.target.innerText)])
  }
  // console.log("todos:", todos)
  return (
    <div>
      <h1>To Do List ({todos.length})</h1>
      <h3>When you done, click the To Do for being done</h3>
      <form onSubmit={onSubmit}>
        <input value={ todo } onChange={ onChange }type="text" placeholder="Write Your Todo">
      </input>
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => <li onClick={ rmTodo } key={index}> { item }</li>)}
      </ul>
      
    </div>
  );
}
export default App;
