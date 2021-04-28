import React, {useState,FormEvent, useContext, useRef, useEffect} from 'react';
import {} from '../DataProvider';


// export default function AddTodo() {
//     const [todos, setTodos] = useContext(DataContext);
//     const [todoName, setTodoName] = useState('');
//     const todoInput = useRef();

//     const addTodo = e =>{
//         e.preventDefault();
//         setTodos([...todos, {name: todoName, complete: false}])
//         setTodoName('');
//         todoInput.current.focus();
//     }

//     useEffect(() =>{
//         todoInput.current.focus();
//     },[])

//     return (
//         <form autoComplete="off" onSubmit={addTodo}>
//             <input type="text" name="todos" id="todos" ref={todoInput}
//             required placeholder="What needs to be done?" value={todoName} 
//             onChange={e => setTodoName(e.target.value.toLowerCase())} />

//             <button type="submit">Create</button>
//         </form>
//     )
// }
interface AddTodoProps {
  addTodo: AddTodo;
}

const AddTodoComponent: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [todoItem, setTodoItem] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(todoItem);
    setTodoItem('');
  };
  return (
    <div id='add-todo'>
      <div className='row my-3'>
        <div className='col'>
          <form action=''>
            <div className='input-group'>
              <input
                type='text'
                required placeholder='What needs to be done?'
                className='form-control'
                value={todoItem}
                onChange={e => setTodoItem(e.target.value)}
              />
              <div className='input-group-append'>
                <button className='btn btn-secondary' onClick={handleSubmit}>
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodoComponent;