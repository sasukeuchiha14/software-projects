import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]'>
        <div className='addTodo'>
          <h1>Add a Todo</h1>
          <input type='text' placeholder='Enter your todo here' className=''/>
          <button className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
        <h1 className='font-bold text-2xl'>Your Todo List</h1>
        <div className='todos'>
          <div className='todo flex'>
            <div className='text'></div>
            <div className='buttons'>
              <button className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
              <button className='bg-violet-800 hover:bg-violet-950 px-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
