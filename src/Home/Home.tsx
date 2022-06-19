
import ListGroupThumb from '../ListGroup/ListGroupThumb';
import { useNavigate } from 'react-router-dom';

const listGroupIds = ["1", "2", "3"];

function Home() {

    const navigate = useNavigate();

    const openListGroup = (id: string) => {
        // navigate to list group page
        navigate(`/list/${id}`);
    };

    return (
        <div className="Home">
            {listGroupIds.map(id => <div onClick={openListGroup.bind(null, id)}>
                List group '{id}':
                <ListGroupThumb listGroupId={id} />
            </div>)}
        </div>
    );
}

export default Home;
