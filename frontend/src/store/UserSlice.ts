import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  isPlaying: boolean;
}

const initialState: User | null = null;

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers: {}
})

export default UserSlice.reducer;