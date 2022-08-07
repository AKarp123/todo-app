import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    return (
        <ThemeProvider theme={darkTheme}>
            <Navbar loggedInState={isLoggedIn} toggleLogin={setIsLoggedIn}/>
            <div className="App">
              Todo App
            </div>
        </ThemeProvider>
    );
}

export default App;
