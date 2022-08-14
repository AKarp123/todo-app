import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signIn, signOut } from "../firebase";

export default function ButtonAppBar(props) {
    // const changeLogin = () => {
    //     props.toggleLogin(!props.loggedInState);
    // }

    const changeLogin = () => {
        if(user == null) {
            signIn();
        }
        else if(user) {
            signOut();
        }
    }

    const [user] = useAuthState(auth);
    
        
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Your Todos
                    </Typography>
                    <Button color="inherit" onClick={changeLogin}>{user ? "Log Out" : "Login"}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
