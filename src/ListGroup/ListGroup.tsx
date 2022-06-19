import { useParams } from "react-router-dom";

const ListGroupView = () => {
    const { id } = useParams();
    const title = "Code stuff"
    const todos: any[] = [];

    return <>
        <div>{title}</div>
        {todos.map(todo => <div>
            TodoListItem item={todo}
        </div>)}
    </>
};

export default ListGroupView;