import blackrook from "../assets/chess_pieces/black-rook.png";
import blackknight from "../assets/chess_pieces/black-knight.png";
import blackking from "../assets/chess_pieces/black-king.png";

import blackpawn from "../assets/chess_pieces/black-pawn.png";
import blackbishop from "../assets/chess_pieces/black-bishop.png";
import blackqueen from "../assets/chess_pieces/black-queen.png";

import whiteking from "../assets/chess_pieces/white-king.png";
import whitepawn from "../assets/chess_pieces/white-pawn.png";
import whiteknight from "../assets/chess_pieces/white-knight.png";
import whiterook from "../assets/chess_pieces/white-rook.png";
import whitebishop from "../assets/chess_pieces/white-bishop.png";
import whitequeen from "../assets/chess_pieces/white-queen.png";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import useChess from "@/hooks/useChess";
import toast from 'react-hot-toast';
import wrongmoveaudio from '../assets/audio/wrongmove.mp3'
import moveaudio from "../assets/audio/move.mp3"

const Board = ({ showSquareId=false }: { showSquareId?: boolean }) => {
  const pgn = "";
  const [rotate, setRotate] = useState<boolean>(false);
  const [boardUI, setBoardUI] = useState<any>(null);
  const chess = useChess(pgn);
  const board = [];
  
  const [selected, setSelected] = useState(false);

  const [movefrom,setMovefrom] = useState<null | string>(null)
  const [moveto,setMoveto] = useState<null | string>(null)

  console.log(movefrom,moveto)

  if (movefrom && moveto) {
    try{
      chess.move({
        from: movefrom,
        to: moveto
      })
      const audio = new Audio(moveaudio)
      audio.play()
    }catch(e){
      toast.error("Invalid Move")
      const audio = new Audio(wrongmoveaudio)
      audio.play()
      console.log('there is an error')
      console.log(e)
    }
    
    console.log(chess.ascii())
    console.log("move done")
    setMovefrom(null)
    setMoveto(null)
  }

  const mp: any = {
    br: blackrook,
    bn: blackknight,
    bb: blackbishop,
    bq: blackqueen,
    bk: blackking,
    bp: blackpawn,

    wr: whiterook,
    wn: whiteknight,
    wb: whitebishop,
    wq: whitequeen,
    wk: whiteking,
    wp: whitepawn,
  };

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareColor = (row + col) % 2 === 0 ? "bg-white" : "bg-green-500";
      const squareId = String.fromCharCode(97 + col) + (8 - row);
      const piece = chess.board()[row][col];

      let pieceImg = null;
      if (piece) {
        pieceImg = (
          <img
            className="w-full aspect-square"
            src={mp[piece.color + piece.type]}
            alt="no image"
            data-position={squareId}
            onClick={(e)=>{
              if(!movefrom){
                // setMovefrom(e.currentTarget.dataset.position!)
                setMovefrom(squareId)
              }else{
                // setMoveto(e.currentTarget.dataset.position!)
                setMoveto(squareId)
              }
            }}
          />
        );
      }
      board.push(
        <div className={`${squareColor} w-full aspect-square hover:border-2 ${movefrom==squareId || moveto==squareId?"border-2 border-zinc-900":""}`} key={squareId} data-position={squareId} onClick={(e)=>{
          if(!movefrom){
            setMovefrom(squareId)

            // setMovefrom(e.currentTarget.dataset.position!)
          }else{
            // setMoveto(e.currentTarget.dataset.position!)
            setMoveto(squareId)
          }
        }}>
          {/* {squareId} */}
          {showSquareId ? (
            <span className="absolute text-xs text-zinc-900">{squareId}</span>
          ) : (
            ""
          )}
          {pieceImg}
        </div>
      );
    }
  }

  // console.log(chess.board());
  return <div className="grid grid-cols-8 aspect-square w-full border-2">{board}</div>;
};

export default Board;
