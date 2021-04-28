import React, {useContext} from 'react';
import TodoListItem from './TodoListItem';

// export default function TodoList() {
//     const [todos, setTodos] = useContext(DataContext);

//     const switchComplete = id =>{
//         const newTodos = [...todos]
//         newTodos.forEach((todo, index) =>{
//             if(index === id){
//                 todo.complete = !todo.complete
//             }
//         })
//         setTodos(newTodos)
//     };


//     return (
//         <ul>
//             {
//                 todos.map((todo, index) => (
//                     <TodoListItem todo={todo} key={index} id={index}
//                     checkComplete={switchComplete} />
//                 ))
//             }
//         </ul>
//     )
// }

interface TodoListProps {
  todos: Todo[];
  updateTodo: UpdateTodo;
}

const TodoListComponent: React.FC<TodoListProps> = ({ todos, updateTodo }) => {
  return (
    <div id='todo-list'>
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
            {todos.map((todo, index) => {
              return (
                <TodoListItem todo={todo} updateTodo={updateTodo} key={index} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoListComponent;