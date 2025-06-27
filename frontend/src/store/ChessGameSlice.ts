import { createSlice } from "@reduxjs/toolkit";
import { Chess } from "chess.js";


interface ChessGameSliceInterface {
    chess: Chess;
    isGameStarted: boolean;
    player1?: string;
    player2?: string;
}


const initialState: Chess = new Chess();

const chessGame = createSlice({
    name: "chessGame",
    initialState,
    reducers: {
        movePiece(state, action) {
            const { from, to } = action.payload;
            state.move({ from, to });
            console.log(state.ascii())
        },
    },
})

export const { movePiece } = chessGame.actions;
export default chessGame.reducer;

