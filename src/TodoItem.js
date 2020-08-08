import React from 'react';

function TodoItem(props) {
    return(
        <div className="todo">
            <input type="checkbox" checked={props.completed} onChange={props.handleChange}/>
            <p>{props.text}</p>
        </div>
    );
}

export default TodoItem;
