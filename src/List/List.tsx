import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectList } from "../store";

const ListView = () => {
    const { id } = useParams();
    const todoList = useAppSelector(selectList(id!))!;

    return <>
        {
            todoList.list.map(item => <div key={item.id}>
                <input type="checkbox" />
                {item.title}
            </div>)
        }
    </>
};

export default ListView;