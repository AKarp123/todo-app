import React from "react";
import Todo from "./Todo";
import { Grid } from "@mui/material";
import NewTodo from "./NewTodo";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, limit } from "firebase/firestore";


const converter = { //new way to get id field from firebase
    fromFirestore: function (snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            ...data,
        };
    }
}
export default function Main() {
    const [user, loading, error] = useAuthState(auth);
    const userRef = collection(db, user.uid);
    const q = query(userRef, orderBy("createdAt", "desc"), limit(10)).withConverter(converter);
    const [todoList, load, e] = useCollectionData(q);
    

   
    

    

    if (e || error) {
        return <div>Please login to use app!</div>;
    } else if (loading || todoList === undefined || load) {
        return <div>Loading...</div>;
    }
    else if(todoList.length === 0) {
        return (
            <>
                <div> Add your first todo!</div>
                <div style={{ height: "50px" }}></div>
                <NewTodo user={user} />
            </>
        )
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
                            key={todo.id}
                            todoContent={todo.todoContent}
                            isCompleted={todo.isCompleted}
                            createdAt={todo.createdAt}
                        />
                    </Grid>
                ))}
            </Grid>
            <div style={{ height: "50px" }}></div>
            <NewTodo user={user}/>
        </>
    );
}
