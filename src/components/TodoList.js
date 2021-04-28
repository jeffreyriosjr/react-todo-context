import React, {useContext} from 'react';
import { DataProvider } from '../DataProvider';

const TodoList = () => {
    const [todos] = useContext(DataProvider);
    return <div>
        
        <ul className="list">
            {todos.map(todo => {
                return <TodoList todo={todo} key={todo.id}/>
            })}
        </ul>
    </div>
};

export default TodoList;

