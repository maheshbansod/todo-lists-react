import { configureStore } from "@reduxjs/toolkit";

import  listReducer from "./List/listSlice";
import { localStorageMiddleware } from "./localStorageHelpers";

const store = configureStore({
    reducer: {
        todo: listReducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectLists = (state: RootState) => state.todo.lists;
export const selectList = (listId: string) => (state: RootState) => state.todo.lists.find(list => list.id == listId);