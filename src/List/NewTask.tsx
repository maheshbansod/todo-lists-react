import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectLists } from "../store";
import { listItemAdded } from "./listSlice";

const NewTaskView = () => {
    const [title, setTitle] = useState("");
    const lists = useAppSelector(selectLists);
    const [list, setList] = useState(lists[0]);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const addTodo = () => {
        dispatch(listItemAdded(list, title));
        navigate(-1);
    };

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
            <select>
                {lists.map(list => <option key={list.id} onClick={setList.bind(null,list)} value={list.id}>{list.title}</option>)}
            </select>
        </div>
        <button onClick={addTodo}>Add</button>
    </>
};

export default NewTaskView;