import Main from "./components/Main";
import * as React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import * as app from "./firebase"
import { useAuthState } from "react-firebase-hooks/auth";



const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {

    // const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [user, loading] = useAuthState(app.auth);
    return (
        <ThemeProvider theme={darkTheme}>
            <Navbar loggedInState={user} signIn={app.signIn}/>
            <div className="App" style={{marginTop: "5vh"}}>
                {loading ? <div>Loading...</div> : ""}
                {!user ? <div>Please login to use App!</div> : <Main />}
                
            </div>
        </ThemeProvider>
    );
}

export default App;
