import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { Grid } from "@mui/material";
import NewTodo from "./NewTodo";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, limit } from "firebase/firestore";


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
    {
        todoContent: "Reach 4 digit in osu!",
        isCompleted: true,
        id: uuidv4(),
    },
    {
        todoContent: "Reach 4 digit in osu!",
        isCompleted: true,
        id: uuidv4(),
    },
];
export default function Main() {
    const [user, loading, error] = useAuthState(auth);
    const userRef = collection(db, user.uid);
    const q = query(userRef, orderBy("createdAt", "desc"), limit(10));
    const [todoList, load, e] = useCollectionData(q, { idField: "id" });
    

   
    

    const removeTodo = (id) => {
        // setTodos(todoList.filter((todo) => todo.id !== id));
    };

    const addTodo = (todoObj) => {
        // setTodos([...todoList, todoObj]);
    };

    const toggleComplete = (id) => {
        // setTodos(
        //     todoList.map((todo) => {
        //         if (todo.id === id) {
        //             todo.isCompleted = !todo.isCompleted;
        //         }
        //         return todo;
        //     })
        // );
    };

    if (e) {
        return <div>Please login to use app!</div>;
    } else if (loading || todoList === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Grid
                container
                spacing={3}
                sx={{
                    justifyContent: "center",
                    marginTop: "5vh",
                    paddingLeft: "110px",
                    paddingRight: "110px",
                }}
            >
                {todoList.map((todo, index) => (
                    <Grid item xl={3} lg={4} md={6} sm={12} key={todo.id}>
                        <Todo
                            num={index + 1}
                            id={todo.id}
                            todoContent={todo.todoContent}
                            isCompleted={todo.isCompleted}
                            toggleComplete={toggleComplete}
                            removeTodo={removeTodo}
                        />
                    </Grid>
                ))}
            </Grid>
            <div style={{ height: "50px" }}></div>
            <NewTodo addTodo={addTodo} />
        </>
    );
}
