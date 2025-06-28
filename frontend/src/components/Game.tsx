import Board from "./Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useSocket } from "@/socketContext";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

const Game = () => {
  const navigate = useNavigate();
  const isGameConnected = useSelector(
    (state: RootState) => state.chessGame.isGameConnected
  );
  const pgn = useSelector((state: RootState) => state.chessGame.pgn);
  
  const [isWhiteTurn, setIsWhiteTurn] = useState(false);
  const color = useSelector((state: RootState) => state.chessGame.color);
  useEffect(()=>{
    const chess = new Chess();
    chess.loadPgn(pgn)
    if(color==='white'){
      if (chess.turn() === 'w'){
        setIsWhiteTurn(true)
      }else{
        setIsWhiteTurn(false)
      }
    }else{
      if (chess.turn() === 'w'){
        setIsWhiteTurn(false)
      }else{
        setIsWhiteTurn(true)
      }
    }

  },[pgn])

  const { startGame } = useSocket()


  return (
    <div className="bg-red-100x border-2x max-w-6xl mx-auto p-2 grid md:grid-cols-3 grid-cols-1">
      <div className="md:col-span-2">
        <div className={`flex justify-between border border-b-0 ${!isWhiteTurn?'border-t-green-400':''}`}>
          <div className="p-1 flex gap-2 items-center">
            <Avatar className="rounded-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span className="hover:underline cursor-pointer">Opponent</span>
          </div>
          <div className="p-1">
            <Button>00:05</Button>
          </div>
        </div>
        <Board />
        <div className={`flex justify-between border border-t-0 ${isWhiteTurn?'border-b-green-400':''}`}>
          <div className="p-1 flex gap-2 items-center">
            <Avatar className="rounded-sm">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <span className="hover:underline cursor-pointer">You</span>
          </div>
          <div className="p-1">
            <Button>00:05</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-2">
        {isGameConnected ? (
          <div>Game Has Started</div>
        ) : (
          <div className="bg-red-50x w-full grid grid-cols-2 gap-2">
            <Button
              variant={"outline"}
              className="col-span-2 h-16"
              onClick={() => startGame()}
            >
              Play as a Guest
            </Button>

            <Button onClick={() => navigate("/login")} className="">
              Login
            </Button>
            <Button onClick={() => navigate("/signup")} className="">
              Signin
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
