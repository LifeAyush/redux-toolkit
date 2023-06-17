import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  intitalState: [],
  reducers: {
    addUser: (state, action) => {},
    deleteUser: (state, action) => {},
    deleteAllUsers: (state, action) => {},
  },
});

export { userSlice };
