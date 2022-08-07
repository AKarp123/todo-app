import React from "react";
import Todo from "./Todo";


export default function Main() {
    const todos = [
        {
            todoContent: "Work on this app",
            isCompleted: false,

        },
        {
            todoContent: "Reach 4 digit in osu!",
            isCompleted: true,
        },
    ];
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todoContent={todo.todoContent}
                    isCompleted={todo.isCompleted}
                />
            ))}
        </div>
    );
}
