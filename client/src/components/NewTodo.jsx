import React from "react";
import { Button, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export default function NewTodo(props) {
    const [openForm, setOpenForm] = React.useState(false);
    const [todoContent, setTodoContent] = React.useState("");
    const [isCompleted, setIsCompleted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.addTodo({ todoContent, isCompleted, id: uuidv4() });
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
                    label="Completed"
                />
            </div>
            <Button type="submit" variant="contained" color="primary"> Add Todo </Button>
        </form>
    );
}
