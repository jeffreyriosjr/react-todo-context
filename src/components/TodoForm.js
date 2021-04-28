// import React, { useContext, useState } from 'react';
// import {DataContext} from '../DataProvider';

// const TodoForm = () => {
//     const  addTodo  = useContext(DataContext)
//     const [title, setTitle, clearList] = useState('')

    

//     const handleChange = e => {
//         setTitle(e.target.value);
//         console.log(title);
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         addTodo(title);
//     };

//     return(
//         <form onSubmit={handleSubmit} className="form">
//             <input
//             onChange={handleChange} 
//             value={title}
//             type="text" 
//             className="todo-input mt-5"
//             placeholder='Whats The Plan Alex?'
//             required
//             />
//             <div className="buttons">
//                 <button type='submit'className="btn add-todo-btn">
//                     Add Stuff
//                     </button>
//                 <button 
//                 onClick={clearList}className="btn clear-btn">
//                 Clear
//                 </button>
//             </div>
//         </form>
//     )
// };

// export default TodoForm;