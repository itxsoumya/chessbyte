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
import { useState } from "react";

const Board = () => {
  const square = "w-20 h-20";

  const [rotate, setRotate] = useState(false);
  const [boardUI, setBoardUI] = useState(null);

  const [chessBoard,setchessBoard]=useState([
    ["", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "Q", ""],
    ["r", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "", "K", "B", "N", "R"],
  ])

  const [selected,setSelected] = useState(false)
  

  const mp = {
    r: blackrook,
    n: blackknight,
    b: blackbishop,
    q: blackqueen,
    k: blackking,
    p:blackpawn,

    R: whiterook,
    N: whiteknight,
    B: whitebishop,
    Q: whitequeen,
    K: whiteking,
    P:whitepawn
  };

  useState(() => {
    let temp = [];
    for (let row = 0; row < 8; row++) {
      if (row == 0) {
        temp.push(
          <tr className={`text-lg text-center bg-gray-100`}>
            <td></td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td></td>
          </tr>
        );
      }
      temp.push(
        <tr key={row}>
          <td className="text-lg bg-gray-100 text-center p-2">{8 - row}</td>

          {[...Array(8)].map((_, col) => {
            const squareColor =
              (row + col) % 2 === 0 ? "bg-white" : "bg-green-500";
            const squareId = String.fromCharCode(97 + col) + (8 - row);

            let pieceImg = null;
            if (chessBoard[row][col]) {
              pieceImg = (
                <img
                  className={`${square}`}
                  src={mp[chessBoard[row][col]]}
                  alt=""
                  data-col={col}
                data-row={row}
                  onClick={(event)=>{
                    console.log(`col ${event.target.dataset.col} ${event.target.dataset.row}, `)
                }}
                />
              );
            }

            return (
              <td
                key={col}
                data-col={col}
                data-row={row}
                className={` ${square} text-center ${squareColor}`}
                
                onClick={(event)=>{
                    console.log(`col ${event.target.dataset.col} ${event.target.dataset.row}, `)
                }}
              >
                {pieceImg}
                {/* <span className="text-sm">
                    {squareId}
                </span> */}
              </td>
            );
          })}
          <td className="text-lg bg-gray-100 text-center p-2">{8 - row}</td>
        </tr>
      );

      if (row == 7) {
        temp.push(
          <tr className={`text-lg text-center bg-gray-100`}>
            <td></td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td></td>
          </tr>
        );
      }
    }
    setBoardUI(temp);
  }, [chessBoard]);

  
  return (
    <div className="flex justify-center">
      <table
        className={`border border-black-500 text-6xl ${
          rotate ? "rotate-180" : ""
        }`}
        
      >
        <tbody>

        {boardUI}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
