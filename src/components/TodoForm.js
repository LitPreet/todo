import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
    }
  return (
   <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' placeholder='what is the task today?' value={value} className='todo-input' onChange={(e) => setValue(e.target.value)}/>
   <button type='submit' className='todo-btn'>Add Task</button>

   </form>
  )
}

export default TodoForm