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

const Board = ({ showSquareId=false }: { showSquareId?: boolean }) => {
  const pgn = "1. d4 d6 2. e4 g6 3. Nc3 Nf6";
  const [rotate, setRotate] = useState<boolean>(false);
  const [boardUI, setBoardUI] = useState<any>(null);
  const chess = useChess(pgn);
  const board = [];

  const [selected, setSelected] = useState(false);

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
          />
        );
      }
      board.push(
        <div className={`${squareColor} w-full aspect-square`}>
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

  console.log(chess.board());
  return <div className="grid grid-cols-8 aspect-square w-full border-2">{board}</div>;
};

export default Board;
