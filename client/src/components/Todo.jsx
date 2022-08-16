import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";

export default function Todo(props) {
    const [user] = useAuthState(auth);
    const styles = {
        textDecoration: props.isCompleted ? "line-through" : "none",
    };

    const toggleComplete = async () => {
        const userRef = doc(db, user.uid, props.id);
        await updateDoc(userRef, { isCompleted: !props.isCompleted });
        console.log("doc updated");
    };

    const removeTodo = async () => {
        const userRef = doc(db, user.uid, props.id);
        await deleteDoc(userRef);
        console.log("deleted doc");
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
                    {props.createdAt === null ? "a few seconds ago" : moment(new Date(props.createdAt.seconds * 1000)).fromNow()}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        ...styles,
                        paddingTop: "35px",
                        paddingBottom: "35px",
                    }}
                >
                    {props.todoContent}
                </Typography>
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
