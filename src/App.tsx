import React, { useState } from 'react';
import TodoListComponent from './components/TodoList';
import AddTodoComponent from './components/AddTodo';
import { DataProvider} from './DataProvider';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Jeff's To-Do-List!</h1>

//       <AddTodoComponent /> 
//       <TodoListComponent />
//       <DataProvider />
//     </div>
//   );
// }

// export default App;
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(DataProvider);

  const addTodo: AddTodo = todoItem => {
    setTodos([...todos, { text: todoItem, completed: false, alert: false }]);
  };

  const updateTodo: UpdateTodo = selectedTodo => {
    // map through our todos
    // find where an object matches the todo param
    // updated it's completed bool
    // take that updated map array and set to todos: setTodos
    const updated = todos.map((todo: Todo, index: number) => {
      if (selectedTodo === todo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updated);
  };

  return (
    <div className='container'>
      <h1>Jeff's To-Do-List</h1>
   
      <AddTodoComponent  addTodo={addTodo}/>
      
      <TodoListComponent todos={todos} updateTodo={updateTodo} />
    </div>
  );
};

export default App;
