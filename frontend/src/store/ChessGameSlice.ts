import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Chess } from "chess.js";
import type { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface ChessGameSliceInterface {
  pgn: string;
  socket: WebSocket | null;
  isGameConnected: boolean;
  player1?: string;
  player2?: string;
  color: string;
}

const initialState: ChessGameSliceInterface = {
  pgn: new Chess().pgn(),
  socket: null,
  isGameConnected: false,
  color: "white",
};

const chessGame = createSlice({
  name: "chessGame",
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setGameConnected(state, action: PayloadAction<boolean>) {
      state.isGameConnected = action.payload;
    },
    setPgn(state, action: PayloadAction<string>) {
      state.pgn = action.payload;
    },
  },
});

// export const startAgame = createAsyncThunk(
//     "chessGame/startAgame",
//     async () => {
//         const newSocket = new WebSocket("ws://localhost:8080");
//         newSocket.onopen = () => {
//             console.log("WebSocket connected");
//             toast('websocket connected'  );
//             // newSocket.send(JSON.stringify({ type: "init_game" }));
//         };
//         newSocket.onmessage = (event) => {
//            console.log("Received message:", event.data);
//         };
//         newSocket.onerror = (error) => {
//             console.error("WebSocket error:", error);
//             toast.error('WebSocket error'  );
//         };
//         newSocket.onclose = () => {
//             console.log("WebSocket disconnected");
//             toast.error('WebSocket disconnected'  );
//         };
//         return newSocket;
//     }
// )

export const { setPgn, setColor, setGameConnected } = chessGame.actions;
export default chessGame.reducer;
