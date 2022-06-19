import { configureStore } from "@reduxjs/toolkit";

import  listReducer from "./List/listSlice";

const store = configureStore({
    reducer: {
        todo: listReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectLists = (state: RootState) => state.todo.lists;