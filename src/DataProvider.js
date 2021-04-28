import React, {useState, useEffect, createContext} from 'react';
import uuid from 'react';

export const DataContext = createContext();

 const DataContextProvider = (props) => {
    const[todos, setTodos] = useState([
        {todo: 'Read Book', id:1 },
        {todo: 'Wash Car', id:2 },
        {todo: 'Play Music', id:3 }
    ]);

    const addTodo = (title) => {
        setTodos([...todos,{ title,id:uuid() }]);
    };

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const clearList = () => {
        setTodos([]);
    }
    
    return (
        <DataContext.Provider value={[todos, setTodos, addTodo, removeTodo, clearList]}>
            {props.children}
            
        </DataContext.Provider>
    )
}

  
// export const DataProvider: Todo[] = [
//     { text: 'Read a book', completed: true, alert:false },
//     { text: 'Walk the dog', completed: false, alert:false },
//   ];