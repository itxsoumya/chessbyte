import { Routes } from "react-router-dom";
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Game from "./components/Game";

const App = () => {
  return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className=" min-h-screen">
        <NavBar />
        <br />

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/game" element={<Game/>} />
        </Routes>
        
        
      </div>
    </ThemeProvider>
  );
};

export default App;
