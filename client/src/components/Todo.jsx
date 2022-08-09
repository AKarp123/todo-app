import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

export default function Todo(props) {
    const styles = () => {
        if (props.isCompleted) {
            return {
                textDecoration: "line-through",
            };
        }
        return "";
    };

    const removeTodo = () => {
        props.removeTodo(props.id);
    };
    const toggleComplete = () => {
        props.toggleComplete(props.id);
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {props.num}
                </Typography>

                <Typography variant="body2" sx={styles}>
                    {props.todoContent}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" onClick={toggleComplete}>
                    Mark as done
                </Button>
                <Button size="small" onClick={removeTodo}>
                    Delete Todo
                </Button>
            </CardActions>
        </Card>
    );
}
