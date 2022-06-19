import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem, TodoList } from "./model/List";

export interface ListsState {
    lists: TodoList[];
};

const initialState: ListsState = {
    lists: [{ id: "0", title: "Unlisted", list: [] }]
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        /**
         * Adds a list
         * @param state prev state
         * @param action payload of todo list
         */
        listAdded: {
            reducer: (state, action: PayloadAction<TodoList>) => {
                state.lists.push(action.payload);
            },
            prepare(title, list) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        list,
                    }
                }
            }
        },
        /**
         * Delete a list
         * @param state prev state
         * @param action payload containing the id of the list to delete
         */
        listDeleted: (state, action: PayloadAction<string>) => {
            let id = action.payload;
            state.lists = state.lists.filter(list => list.id === id);
        },
        /**
         * 
         * @param state prev state
         * @param action payload containing todo item to add and the id list to add it to
         */
        listItemAdded: {
            reducer: (state, action: PayloadAction<{ id: string, todoItem: TodoItem }>) => {
                let { id, todoItem } = action.payload;
                let todoList = state.lists.find(list => list.id === id);
                if (todoList)
                    todoList.list.push(todoItem);
                else console.error("listItemAdded : Couldn't find list id ", id);
            },
            prepare(list: TodoList, title: string) {
                const todoItem:TodoItem = {
                    id: nanoid(),
                    title,
                    status: 'initial',
                };
                return {
                    payload: {
                        id: list.id,
                        todoItem,
                    }
                }
            }
        },
    }
});

export const { listAdded, listDeleted, listItemAdded } = listSlice.actions;

export default listSlice.reducer;