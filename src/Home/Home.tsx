
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import ListThumb from '../List/ListThumb';
import { selectLists } from '../store';

function Home() {

    const navigate = useNavigate();
    const lists = useAppSelector(selectLists);

    const openList = (id: string) => {
        // navigate to list group page
        navigate(`/list/${id}`);
    };

    return (
        <div className="Home">
            {lists.map(list => {
                return <div key={list.id}>
                    {list.title} , {list.list.length} item(s)
                </div>
            })}
            <button onClick={()=>navigate(`/new-task`)}>Add task</button>
        </div>
    );
}

export default Home;
