
export interface TodoList {
    id: string; // list id
    title: string; // list title
    list: TodoItem[]; /// list of items
}

export interface TodoItem {
    id: string; // item id
    title: string; // item title
    status: TodoItemStatus; // item status
}

type TodoItemStatus = 'done'|'ongoing'|'initial';