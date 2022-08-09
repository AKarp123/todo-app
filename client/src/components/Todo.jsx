import React from "react";

export default function Todo(props) {

    const removeTodo = () => {
        props.removeTodo(props.id);
    }
    
    return <div>
        <p>{props.todoContent}</p>
        <p>{props.isCompleted ? "Completed" : "Not Completed"}</p>
        <button onClick={removeTodo}>Delete</button>
    </div>;
}
