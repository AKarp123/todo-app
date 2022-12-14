import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Tooltip,
} from "@mui/material";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";
import EditTodo from "./EditTodo";

export default function Todo(props) {
    const [user] = useAuthState(auth);
    const [formVisibility, setFormVisibility] = React.useState(false);

    const styles = {
        textDecoration: props.isCompleted ? "line-through" : "none",
    };

    const toggleComplete = async () => {
        const userRef = doc(db, user.uid, props.id);
        await updateDoc(userRef, { isCompleted: !props.isCompleted });
        console.log("doc updated");
    };

    const editTodo = async (todoContent) => {
        const userRef = doc(db, user.uid, props.id);
        await updateDoc(userRef, { todoContent: todoContent });
        console.log("doc updated");
        setFormVisibility(false);
    };

    const removeTodo = async () => {
        const userRef = doc(db, user.uid, props.id);
        await deleteDoc(userRef);
        console.log("deleted doc");
    };

    const handleClick = (e) => {
        if (e.detail === 2) {
            setFormVisibility(true);
        }
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
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {props.createdAt === null
                        ? "..."
                        : moment(
                              new Date(props.createdAt.seconds * 1000)
                          ).fromNow()}
                </Typography>
                <Tooltip title="Double click to edit">
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{
                            ...styles,
                            paddingTop: "35px",
                            paddingBottom: "35px",
                            display: "inline-block",
                        }}
                        onClick={handleClick}
                    >
                        {formVisibility ? (
                            <EditTodo
                                editTodo={editTodo}
                                tc={props.todoContent}
                            />
                        ) : (
                            props.todoContent
                        )}
                    </Typography>
                </Tooltip>
            </CardContent>
            <CardActions disableSpacing>
                <Button size="small" onClick={toggleComplete}>
                    {props.isCompleted ? "Mark undone" : "Mark as done"}
                </Button>
                <Button size="small" onClick={removeTodo}>
                    Delete Todo
                </Button>
            </CardActions>
        </Card>
    );
}
