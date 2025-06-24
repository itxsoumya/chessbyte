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
  // const square = "w-20 h-20 ";
  const square = "w-[38px] h-[38px] md:w-20 md:h-20 sm:w-15 sm:h-15";

  const [rotate, setRotate] = useState<boolean>(false);
  const [boardUI, setBoardUI] = useState<any>(null);

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
  

  const mp:any = {
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
          <tr className={`md:text-lg text-sm text-center light:bg-gray-100 text-zinc-900x `}>
            <td></td>
            <td>a</td>
            <td>b</td>
            <td>c</td> 
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
            <td></td>
          </tr>
        );
      }
      temp.push(
        <tr key={row}>
          <td className="text-sm md:text-lg light:bg-gray-100 text-center p-0.5 md:p-2">{8 - row}</td>

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
                  onClick={(event:any)=>{
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
                
                onClick={(event:any)=>{
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
          <td className="text-sm md:text-lg light:bg-gray-100 text-center p-0.5 md:p-2">{8 - row}</td>
        </tr>
      );

      if (row == 7) {
        temp.push(
          <tr className={`md:text-lg text-sm text-center light:bg-gray-100`}>
            <td></td>
            <td>a</td>
            <td>b</td>
            <td>c</td> 
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
            <td></td>
          </tr>
        );
      }
    }
    setBoardUI(temp);
  }, );

//   

  
  return (
    <div className="flex justify-center ">
      <table
        className={`border border-black-500 text-6xlcc ${
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
