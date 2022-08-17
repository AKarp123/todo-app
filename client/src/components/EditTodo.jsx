import { TextField, Button, Grid } from "@mui/material";
import React from "react";

export default function EditTodo(props) {
    const [todoContent, setTodoContent] = React.useState(props.tc);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editTodo(todoContent);
    };

    const handleChange = (e) => {
        setTodoContent(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="Edit todo:"
                        value={todoContent}
                        onChange={(e) => setTodoContent(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Edit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

// const t = () => {
//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <TextField
//                     label="Edit todo:"
//                     value={todoContent}
//                     onChange={(e) => setTodoContent(e.target.value)}
//                 />
//             </Grid>
//             <Grid item xs={12}>
//                 <Button type="submit" variant="contained" color="primary">
//                     Edit
//                 </Button>
//             </Grid>
//         </Grid>
//     );
// };
