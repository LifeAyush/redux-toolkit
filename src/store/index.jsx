import { ConfigureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/UserSlice';

const store = ConfigureStore({
    reducers:{
        users : userSlice.reducer,
    }
});

export default store;