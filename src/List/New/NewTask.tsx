import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectLists } from "../../store";
import { listItemAdded } from "../listSlice";
import NewListView from "./NewList";

const NewTaskView = () => {
    const [title, setTitle] = useState("");
    const lists = useAppSelector(selectLists);
    const [list, setList] = useState(lists[0]);
    const [listId, setListId] = useState("0");

    const [showNewListView, setShowNewListView] = useState(false);

    const NEW_LIST_OPTION_VALUE = "__new_list__";

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const addTodo = () => {
        dispatch(listItemAdded(list, title));
        navigate(-1);
    };

    useEffect(() => {
        if(listId === NEW_LIST_OPTION_VALUE) {
            const newList = lists[lists.length - 1];
            setListId(newList.id);
            setList(newList);
        }
    }, [lists]);

    return <>
        <div>
            Title:
            <input type="text"
                placeholder="What do you want to do?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            List:
            <select value={listId} onChange={(evt)=>{
                const { value } = evt.target;
                setListId(value)
                if(value === NEW_LIST_OPTION_VALUE) {
                    setShowNewListView(true);
                } else {
                    setShowNewListView(false);
                    const list = lists.find(list => list.id === value);
                    if(list)
                        setList(list);
                }
            }}>
                {lists.map(list => <option key={list.id} value={list.id}>{list.title}</option>)}
                <option value={NEW_LIST_OPTION_VALUE}>+ Add new list</option>
            </select>
        </div>
        <button onClick={addTodo}>Add</button>
        {showNewListView && <div>
                <NewListView onListAdded={setShowNewListView.bind(null, false)}/>
                <button type="button" onClick={setShowNewListView.bind(null, false)}>Cancel</button>
            </div>}
    </>
};

export default NewTaskView;