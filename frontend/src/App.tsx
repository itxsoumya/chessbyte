import { Routes } from "react-router-dom";
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="p-2 sm:p-3 bg-green-500x min-h-screen">
        <NavBar />
        <br />

        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        
        
      </div>
    </ThemeProvider>
  );
};

export default App;
