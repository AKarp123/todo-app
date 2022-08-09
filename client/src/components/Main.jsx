import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

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
export default function Main() {
    const [todoList, setTodos] = React.useState(todos);

    const removeTodo = (id) => {
        setTodos(todoList.filter((todo) => todo.id !== id));
    };
    const toggleComplete = (id) => {
        setTodos(
            todoList.map((todo) => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        );
    };

    return (
        <div>
            {todoList.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todoContent={todo.todoContent}
                    isCompleted={todo.isCompleted}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}
