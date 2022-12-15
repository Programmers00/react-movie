import {useState} from 'react'

function App() {
  // useState Todo
  const [todo, setTodo] = useState("")
  // useState TodoList
  const [todos, setTodos] = useState([])
  /** detect Input To Do */
  const onChange = (event) => setTodo(event.target.value)
  /** add To Do to To Do List*/
  const onSubmit = (event) => {
    // preventDefault() for prevent default action 
    event.preventDefault();
    // when todo empty or same, no action 
    if (todo === "" || todos.find(item => item === todo)) return
    // ...currentArray is disasemble the Array
    setTodos(currentArray => [todo, ...currentArray])
    setTodo("")
  }
  /** remove To Do */
  const rmTodo = (event) => {
    event.preventDefault();
    setTodos(currentArray => [...currentArray.filter(element => element !== event.target.innerText)])
  }

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
