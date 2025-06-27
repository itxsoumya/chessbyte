import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import chessGameReducer from "./ChessGameSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chessGame: chessGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
