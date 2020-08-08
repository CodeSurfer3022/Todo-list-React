import React from 'react';
import './index.css';
import Todo from './Todo';
import Todos from './todosData';

function App() {
    const todoComponents = Todos.map(todo => <Todo key={todo.id}
                                                           completed={todo.completed}
                                                           text={todo.text}/>);
    return(
        <div className="note">
            {todoComponents}
        </div>
    )
}

export default App;