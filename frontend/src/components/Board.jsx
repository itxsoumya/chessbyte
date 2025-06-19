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
      <table className="border border-black-500 text-6xl ">
        {/* border */}

        <tr className="text-lg text-center bg-gray-100">
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

        {/* actual board */}
        <tr>
          <td className="text-lg bg-gray-100 text-center p-2">8</td>
          <td className={` ${square} text-center`}>
            <img className={`${square}`} src={blackrook} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackknight} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackbishop} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400 `}>
            <img className={`${square}`} src={blackqueen} alt="" />
          </td>
          <td className={` ${square} text-center`}>
            <img className={`${square}`} src={blackking} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackbishop} alt="" />
          </td>
          <td className={` ${square} text-center`}>
            <img className={`${square}`} src={blackknight} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackrook} alt="" />
          </td>

          <td className="text-lg bg-gray-100 text-center p-2">8</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">7</td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={` ${square} text-center `}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={`${square} text-center bg-green-400`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className={` ${square} text-center`}>
            <img className={`${square}`} src={blackpawn} alt="" />
          </td>
          <td className="text-lg bg-gray-100 text-center">7</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">6</td>

          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className="text-lg bg-gray-100 text-center">6</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">5</td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className="text-lg bg-gray-100 text-center">5</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">4</td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className="text-lg bg-gray-100 text-center">4</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">3</td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className={`bg-green-400 ${square} text-center`}></td>
          <td className={`${square} text-center`}></td>
          <td className="text-lg bg-gray-100 text-center">3</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">2</td>
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
          <td className="text-lg bg-gray-100 text-center">2</td>
        </tr>
        <tr>
          <td className="text-lg bg-gray-100 text-center">1</td>
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
          <td className="text-lg bg-gray-100 text-center">1</td>
        </tr>

        {/* border */}
        <tr className="text-lg text-center bg-gray-100">
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
      </table>
    </div>
  );
};

export default Board;
