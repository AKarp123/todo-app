import React from "react";
import { Button, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function NewTodo({user}) {
    const [openForm, setOpenForm] = React.useState(false);
    const [todoContent, setTodoContent] = React.useState("");
    const [isCompleted, setIsCompleted] = React.useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo({ todoContent, isCompleted, });
        setOpenForm(false);
        setTodoContent("");
        setIsCompleted(false);
    };

    const handleChange = (e) => {
        setTodoContent(e.target.value);
    };

    if (!openForm) {
        return (
            <Button variant="contained" onClick={() => setOpenForm(!openForm)}>
                Add new Todo
            </Button>
        );
    }

    const addTodo = async(todoObj) => {
        
        const userRef = collection(db, user.uid);
        
        const newTodo = await addDoc(userRef, {...todoObj, createdAt: serverTimestamp()});
        console.log("New Todo ID: ", newTodo.id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "10px"}}>
                <TextField
                    label="Todo Content"
                    value={todoContent}
                    onChange={handleChange}
                    sx={{ marginRight: "20px" }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onClick={(e) => setIsCompleted(!isCompleted)}
                        />
                    }
                    label="Completed?"
                />
            </div>
            <Button type="submit" variant="contained" color="primary"> Add Todo </Button>
        </form>
    );
}
