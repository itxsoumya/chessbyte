import { Chess } from "chess.js";
import { useDispatch, useSelector } from "react-redux";
import { setPgn } from "@/store/ChessGameSlice";
import type { AppDispatch, RootState } from "@/store/store";
import toast from "react-hot-toast";
import { useSocket } from "../socketContext"; // your context

const useSocketLogic = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {socket} = useSocket(); // from context
  const pgn = useSelector((state: RootState) => state.chessGame.pgn);
  const isGameConnected = useSelector(
    (state: RootState) => state.chessGame.isGameConnected
  );

  const LocalLabelMoveChecking = (move: { from: string; to: string }) => {
    try {
      const chess = new Chess();
      chess.loadPgn(pgn);
      chess.move(move);
      dispatch(setPgn(chess.pgn()));
      console.log(chess.ascii());
    } catch (e) {
      throw Error("Invalid Move");
    }
  };

  const ServerLevelChecking = (move: { from: string; to: string }) => {
    if (isGameConnected && socket?.readyState === WebSocket.OPEN) {
      try {
        socket.send(JSON.stringify({ type: "move", move }));
      } catch (e) {
        console.log("Error sending move:", e);
        toast.error("Error sending move");
      }
    } else {
      toast.error("WebSocket is not connected");
    }
  };

  const movePiece = (move: { from: string; to: string }) => {
    try {
      LocalLabelMoveChecking(move);
      ServerLevelChecking(move);
    } catch {
      toast.error("Invalid move");
    }
  };

  return { movePiece };
};

export default useSocketLogic;
