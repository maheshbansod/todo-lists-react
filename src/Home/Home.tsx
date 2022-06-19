
import { useNavigate } from 'react-router-dom';
import ListThumb from '../List/ListThumb';

const listIds = ["1", "2", "3"];

function Home() {

    const navigate = useNavigate();

    const openList = (id: string) => {
        // navigate to list group page
        navigate(`/list/${id}`);
    };

    return (
        <div className="Home">
            {listIds.map(id => <div onClick={openList.bind(null, id)}>
                List '{id}':
                <ListThumb listId={id} />
            </div>)}
        </div>
    );
}

export default Home;
