import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import logo from "../assets/logos/logo2-e.png"
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-zinc-800x  sm:text-3xl text-xl border-2 shadow-lgx bg-zinc-400x not-dark:bg-zinc-50 dark:shadow-blue-300x shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="underlinex cursor-pointer " onClick={() => navigate("/")}>
          {/* <b>ChessByte.</b> */}
          <img src={logo} className="w-20" alt="" />
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
