import React from 'react';
import './index.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
    }
    handleChange(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos: updatedTodos});
    }
    render() {
        const todoComponents = this.state.todos.map(todo => <TodoItem
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            handleChange={() => this.handleChange(todo.id)}
        />);
        return (
            <div className="note">
                {todoComponents}
            </div>
        )
    }
}

export default App;