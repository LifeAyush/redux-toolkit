import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  intitalState: [],
  reducers: {
    addUser: (state, action) => {},
    deleteUser: (state, action) => {},
    deleteAllUsers: (state, action) => {},
  },
});

export { UserSlice };
