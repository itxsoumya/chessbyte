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

const Board = () => {
  const square = "w-20 h-20";
  return (
    <div className="flex justify-center">
      <table className="border border-green-500 text-6xl ">
        <tr>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackrook} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackknight} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackbishop} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackqueen} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackking} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackbishop} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackknight} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackrook} alt="" />
          </td>
        </tr>
        <tr>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
        </tr>
        <tr>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
        </tr>
        <tr>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
        </tr>
        <tr>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
        </tr>
        <tr>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whitepawn} alt="" />
          </td>
        </tr>
        <tr>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whiterook} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whiteknight} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whitebishop} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whitequeen} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whiteking} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whitebishop} alt="" />
          </td>
          <td className={`bg-green-400 ${square} text-center`}>
            <img className={`${square}`} src={whiteknight} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={whiterook} alt="" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Board;
