import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectList } from "../store";
import ListItem from "./item/ListItem";
import { listItemStatusUpdated, listItemTitleUpdated } from "./listSlice";
import { TodoItem, TodoItemStatus } from "./model/List";

const ListView = () => {
    const { id } = useParams();
    const todoList = useAppSelector(selectList(id!))!;

    const dispatch = useAppDispatch();

    const updateTitle = (title: string, item: TodoItem) => {
        dispatch(listItemTitleUpdated({
            title,
            item_id: item.id,
            list_id: id!,
        }))
    };

    const updateStatus = (status: TodoItemStatus, item: TodoItem) => {
        dispatch(listItemStatusUpdated({
            status,
            item_id: item.id,
            list_id: id!,
        }))
    }

    return <>
        {
            todoList.list.map(item =>
                <ListItem
                    key={item.id}
                    listItem={item}
                    onStatusUpdate={(status) => updateStatus(status, item)}
                    onTitleUpdate={(title) => updateTitle(title, item)} />)
        }
    </>
};

export default ListView;