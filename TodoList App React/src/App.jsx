import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";



function App() {
  // todo is our input text
 const [todo, setTodo] = useState("")
//  todos is array which hold our all todo
 const [todos, setTodos] = useState([])

 const [showfinished, setshowfinished] = useState(true)

 //useEff for loading our all todos
 useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){
     let todos = JSON.parse(localStorage.getItem("todos"))
     setTodos(todos)
  }

  
  
  
 },[]);
 

 const saveToLS = (params) => {
  localStorage.setItem("todos", JSON.stringify(todos))
 };

 const toggleFinished = (e) => {
      setshowfinished(!showfinished) // haa to naa & naa to haa
  };

  const handleEdit = (e, id)=>{
   let t = todos.filter(item=>item.id === id)
    setTodo(t[0].todo)


    //for deleting then after edit
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
      
      setTodos(newTodos)//calling

      saveToLS(); //while editing for storing in local storage
  };
    


  

  const handleDelete = (e, id)=>{
     let newTodos = todos.filter(item=>{
      return item.id!==id
    })
      // newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)//calling

      saveToLS();
  }

  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLS();
  }

  const handleChange= (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
   let id = e.target.name;
  //  console.log(`id is ${id}`)
   let index = todos.findIndex(item=>{
     return item.id === id;
   })

   let newTodos =[ ...todos]; //spread operator
     newTodos[index].isCompleted = !newTodos[index].isCompleted;
     setTodos(newTodos)//calling

     saveToLS();
  }

  return (
    <>
      <Navbar/>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl bg-violet-100 p-3 min-h-[80vh] md:w-[35%]">
      <h1 className='font-bold text-center text-2xl'>iTask - Manage your todos at one place</h1>
      <div className="addTodo my-5 flex flex-col gap-4">
        <h2 className='text-lg font-bold'>Add a Todo</h2>

        <div className="flex">
        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
        <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-700 p-4 py-2 text-sm font-bold text-white'>Save</button>
      </div>
      </div>

      <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showfinished} /> 
      
      <label className='mx-2' htmlFor="show">Show Finished</label> 
       

       <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold'>Yours Todo</h2>

        <div className="todos">

          {todos.length ===0 && <div className='m-5'>No Todos To Display</div>  }

          {todos.map(item=>{
            
           return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between my-3">

            <div className='flex gap-5'>
              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
            </div>
           
            
            <div className="button flex h-full">
              <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
            </div>
          </div>})}
        </div>
        
      </div>
    </>

  )
}

export default App
