// import react components 
import { createContext, useState } from 'react';

// create my context
export const GlobalContext = createContext();

let mockTodos = [
{item: 'read a book', completed: false},
{ item: 'sing a song', completed: true }, 
];

// create a context provider
export const GlobalProvider = ({ children }) => {
    const [todo, setTodo] = useState ({item: '', completed: false});
    const [todos, setTodos] = useState(mockTodos);

    const handleChange = todoItem => {
        console.log(todoItem);
        setTodo({...todo, item: todoItem });
    };

    const addTodo = () => {
        // take the todo item
        //push it into our array

        setTodos([...todos, todo]);
        setTodo({ item: '', completed: false});
    };

    return (
        <GlobalContext.Provider value={{ todos, todo, handleChange, addTodo }}>
            {children}
        </GlobalContext.Provider>
    )
}
// *note : to access context inside of components,
// will need to use react hooks: useContexts(passInContext)