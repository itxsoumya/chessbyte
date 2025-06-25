import Board from "./Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const Game = ()=>{


  return(
    <div className="bg-red-100x border-2x max-w-7xl mx-auto p-2 grid md:grid-cols-3">

      <div className="col-span-2">
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
      <Board/>
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

      <div className="bg-green-300x flex flex-col gap-5 justify-center items-center">
        <Button className="w-full">Play as a Guest</Button>
       <div className="flex gap-2">
        <Button>Login</Button>
        <Button>Signin</Button>
       </div>
      </div>




      
    </div>
  )
}



export default Game;
