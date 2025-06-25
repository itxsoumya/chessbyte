import Board from "./Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const Game = () => {
  return (
    <div className="bg-red-100x border-2x max-w-7xl mx-auto flex gap-5 max-sm:flex-col p-2">
      <div>
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
        {/* board */}
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
      <div className="bg-sky-100">Moves</div>
    </div>
  );
};

export default Game;
