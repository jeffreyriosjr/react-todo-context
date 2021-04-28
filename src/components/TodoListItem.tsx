import React, {useState} from 'react';

// export default function TodoListItem({todo, id, checkComplete}) {
//     const [onEdit, setOnEdit] = useState(false)
//     const [editValue, setEditValue] = useState(todo.name)

//     const handleOnEdit = () => {
//         setOnEdit(true)

//     }
//     const handleSave = id =>{
//         setOnEdit(true) 
//     }

//     if(onEdit){
//         return (
//             <li>
//                 <input type="text" id='editValue' value={editValue} name='editValue'/>
//                 <button onClick={() => handleSave(id)}>Save</button>
//             </li>
//         )

//     }else{
//         return (
//             <li>
//                 <label htmlFor={id} className={todo.complete ? "active" : ""}>
//                     <input type="checkbox" id={id} checked={todo.complete}
//                     onChange={() => checkComplete(id)} />
//                     {todo.name}
//                 </label>
//                 <button disabled={todo.complete}onClick={handleOnEdit}>Edit</button>
//             </li>
//         )

//     }
// }

interface TodoListItemProps {
  todo: Todo;
  updateTodo: UpdateTodo;
}
// todo = {text:'', complete:false}
const TodoListItem: React.FC<TodoListItemProps> = ({ todo, updateTodo }) => {
  return (
    <li className='list-group-item'>
      <label htmlFor=''>
        <input
          type='checkbox'
          id=''
          checked={todo.completed}
          onChange={() => updateTodo(todo)}
        />
      </label>
      
      <span className={todo.completed ? 'text-danger complete' : undefined}>
        {todo.text}
      </span>
      <div className='row'>
      <label htmlFor='all'>
        <input
          type='checkbox'
          name='all'
          id='all'
        />
      </label>
      <button id='delete'>Delete</button>

      </div>
    </li>
  );
};

export default TodoListItem;