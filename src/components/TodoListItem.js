import React, {useContext} from 'react';
import {DataContext} from '../DataProvider';

const TodoListItem = ({todo}) => {
    const {removeTodo} = useContext(DataContext)

    return (
        <li className="list-item">
            <span>{todo.title}</span>
            <div>
                <button 
                onClick={() => removeTodo(todo.id)}
                className="btn-delete todo-btn">
                    Delete
                </button>
            </div>
        </li>
    )
}

// interface TodoListItemProps {
//   todo: Todo;
//   updateTodo: UpdateTodo;
// }
// // todo = {text:'', complete:false}
// const TodoListItem: React.FC<TodoListItemProps> = ({ todo, updateTodo }) => {
//   return (
//     <li className='list-group-item'>
//       <label htmlFor=''>
//         <input
//           type='checkbox'
//           id=''
//           checked={todo.completed}
//           onChange={() => updateTodo(todo)}
//         />
//       </label>
      
//       <span className={todo.completed ? 'text-danger complete' : undefined}>
//         {todo.text}
//       </span>
//       <div className='row'>
//       <label htmlFor='all'>
//         <input
//           type='checkbox'
//           name='all'
//           id='all'
//         />
//       </label>
//       <button id='delete'>Delete</button>

//       </div>
//     </li>
//   );
// };

// export default TodoListItem;