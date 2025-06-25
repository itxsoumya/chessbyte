import Board from "./Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-red-100x border-2x max-w-6xl mx-auto p-2 grid md:grid-cols-3 grid-cols-1">
      <div className="md:col-span-2">
        <div className="flex justify-between border">
          <div className="p-1 flex gap-2 items-center">
            <Avatar className="rounded-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span className="hover:underline cursor-pointer">UserName</span>
          </div>
          <div className="p-1">
            <Button>00:05</Button>
          </div>
        </div>
        <Board />
        <div className="flex justify-between border">
          <div className="p-1 flex gap-2 items-center">
            <Avatar className="rounded-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span className="hover:underline cursor-pointer">UserName</span>
          </div>
          <div className="p-1">
            <Button>00:05</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-2">
        
       <div className="bg-red-50x w-full grid grid-cols-2 gap-2">
       <Button variant={"outline"} className="col-span-2 h-16">Play as a Guest</Button>
        
        
        <Button onClick={()=>navigate("/login")} className="">Login</Button>
        <Button onClick={()=>navigate("/signup")} className="">Signin</Button>
       </div>
        
      </div>
    </div>
  );
};

export default Game;
