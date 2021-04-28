import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

const Home = () => {
    const { todos, todo, handleChange, addTodo } = useContext(GlobalContext);

  
    return (
        <div className="container">
      <div className="app-wrapper">
        <div className='main'>
      <h1>Jeff's To-Do-List!</h1>
    </div>
    </div>
    <form  className="form">
            <input
            onChange={e => handleChange(e.target.value)}
            type="text"
            value={todo.item} 
            className="todo-input mt-5"
            placeholder='Whats The Plan Alex?'
            required
            />
            <div className="buttons" onClick={addTodo}>
            <button type='submit'className="btn add-todo-btn">
            Add Stuff
             </button>
            </div>
        </form>
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {todos.map((todo, index) => {
            return (
              <li className="list-group-item" key={index}>
                {todo.item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
    )
};

export default Home;