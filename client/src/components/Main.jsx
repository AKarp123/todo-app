import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";


export default function Main() {
    const todos = [
        {
            todoContent: "Work on this app",
            isCompleted: false,
            id: uuidv4(),

        },
        {
            todoContent: "Reach 4 digit in osu!",
            isCompleted: true,
            id: uuidv4(),
        },
    ];
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todoContent={todo.todoContent}
                    isCompleted={todo.isCompleted}
                />
            ))}
        </div>
    );
}
