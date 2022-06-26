import { useEffect, useState } from "react";
import styles from './ListItem.module.css';
import { TodoItem, TodoItemStatus } from "../model/List";

type Props = {
    listItem: TodoItem;
    onTitleUpdate?: (title:string)=>any;
    onStatusUpdate?: (status: TodoItemStatus)=>any;
};

const ListItem = ({listItem, onTitleUpdate, onStatusUpdate}: Props) => {
    const [editing, setEditing] = useState(false);

    const [myTitle, setMyTitle] = useState(listItem.title);
    const [ImDone, setDone] = useState(listItem.status === 'done');

    const updateListTitle = () => {
        if(onTitleUpdate) {
            onTitleUpdate(myTitle);
        }
        setEditing(false);
    }

    useEffect(()=> {
        if(onStatusUpdate) {
            onStatusUpdate(ImDone?'done':'initial')
        }
    }, [ImDone])

    return <div className={styles.container}>
        {!editing && <input type="checkbox" checked={ImDone} onChange={setDone.bind(null, !ImDone)}/>}
        <input type="text" value={myTitle} onChange={(e) => setMyTitle(e.target.value)} disabled={!editing} />
        {!editing && <button type="button" onClick={setEditing.bind(null, true)}>edit</button>}
        {editing && <div>
            <button type="button" onClick={updateListTitle}>save</button>
            <button type="button" onClick={setEditing.bind(null, false)}>cancel</button>
        </div>}
    </div>
}

export default ListItem;