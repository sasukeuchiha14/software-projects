import Navbar from './components/Navbar';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  var todo_count = 0;

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if(todo === '') return;
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
    setTodo('');
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckBox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id
    });
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos([...newTodos]);
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => {
      return item.id === id
    });
    setTodo(t[0].todo);
    handleDelete(e, id);
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos([...newTodos]);
  }

  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]'>
        <div className='addTodo my-5'>
          <h1 className='font-bold text-2xl'>Add a Todo</h1>
          <input onChange={handleChange} value={todo} type='text' placeholder='Enter your todo here' className='w-1/2' required autoFocus/>
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
        </div>
        <h1 className='font-bold text-2xl'>Your Todo List</h1>
        <div className='todos'>
          {todos.length === 0 && <div className='m-5'>No Todos to Display</div>}
          {todos.map(item => {
            return (
              <div key={todo_count++} className='todo flex w-1/4 justify-between my-5'>
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handleCheckBox} type='checkbox' value={item.isCompleted} className='mx-2'/>
                  <div className={item.isCompleted? "line-through": ""}>{item.todo}</div>
                </div>
                <div className='buttons'>
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
