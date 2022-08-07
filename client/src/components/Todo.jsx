import React from "react";

export default function Todo({ todoContent, isCompleted}) {
    
    return <div>
        <p>{todoContent}</p>
        <p>{isCompleted ? "Completed" : "Not Completed"}</p>
    </div>;
}
