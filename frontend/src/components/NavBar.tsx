import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-zinc-800x  sm:text-4xl text-xl border-2 shadow-lgx bg-zinc-400x not-dark:bg-zinc-50 dark:shadow-blue-300x shadow">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="underline cursor-pointer " onClick={() => navigate("/")}>
          <b>ChessByte.</b>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
