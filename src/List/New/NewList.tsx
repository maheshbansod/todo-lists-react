import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { listAdded } from "../listSlice";

type Props = {
    onListAdded?: (title: string)=>any;
}

// TODO: prevent duplicate lists??
const NewListView = ({onListAdded}:Props) => {
    const [title, setTitle] = useState("");

    const dispatch = useAppDispatch();

    const addList = () => {
        dispatch(listAdded(title, []));
        if(onListAdded)
            onListAdded(title);
    };

    return <>
        <div>
            Title:
            <input type="text"
                placeholder="What do you want to call this list?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <button onClick={addList}>Add</button>
    </>
};

export default NewListView;