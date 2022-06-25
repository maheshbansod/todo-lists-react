

const LOCAL_STORAGE_LIST_KEY = 'todolistdata';

export default function getInitialListState() {
    let rawdata = localStorage.getItem(LOCAL_STORAGE_LIST_KEY);

    let data;
    if(!rawdata) {
        data =  [{ id: "0", title: "Unlisted", list: [] }];
    } else {
        data = JSON.parse(rawdata);
    }

    return data;
}

export const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
    // applying this middleware for all actions
    let result = next(action);
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(store.getState().todo.lists));
    return result;
};