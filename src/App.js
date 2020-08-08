import React from 'react';
import './index.css';
import Todo from './Todo';
import todosData from './todosData';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
    }
    render() {
        const todoComponents = this.state.todos.map(todo => <Todo key={todo.id}
                                                       completed={todo.completed}
                                                       text={todo.text}/>);
        return (
            <div className="note">
                {todoComponents}
            </div>
        )
    }
}

export default App;