import { nanoid } from "@reduxjs/toolkit";

export class TodoList {
    id: string; // list id
    title: string; // list title
    list: TodoItem[]; /// list of items

    constructor(title: string, list: TodoItem[]) {
        this.id = nanoid();
        this.title = title;
        this.list = list;
    }
}

export class TodoItem {
    id: string; // item id
    title: string; // item title
    status: TodoItemStatus; // item status

    constructor(title: string) {
        this.id = nanoid();
        this.title = title;
        this.status = 'initial';
    }
}

type TodoItemStatus = 'done'|'ongoing'|'initial';