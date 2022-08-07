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

export default function ButtonAppBar(props) {
    const changeLogin = () => {
        props.toggleLogin(!props.loggedInState);
    }

    
        
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
                    <Button color="inherit" onClick={changeLogin}>{props.loggedInState ? "Log Out" : "Login"}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
