import React from 'react';

function TodoItem(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    return(
        <div className="todo">
            <input type="checkbox" checked={props.completed} onChange={props.handleChange}/>
            <p style={props.completed ? completedStyle: null}>{props.text}</p>
        </div>
    );
}

export default TodoItem;
