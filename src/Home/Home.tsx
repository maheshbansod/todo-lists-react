
import { BrowserRouter, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import ListView from '../List/List';
import { selectLists } from '../store';
import styles from './Home.module.css';

function Home() {

    const navigate = useNavigate();
    const lists = useAppSelector(selectLists);

    const openList = (id: string) => {
        // navigate to list group page
        navigate(`/list/${id}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.lists}>
                {lists.map(list => {
                    return <NavLink to={list.id}
                        className={({isActive}) => isActive?styles.activeListItem:undefined }
                        key={list.id}>
                        {list.title} , {list.list.length} item(s)
                    </NavLink>
                })}
            </div>
            <div className={styles.listContent}>
                <button onClick={()=>navigate(`/new-task`)}>Add task</button>
                <Routes>
                    <Route path=":id" element={<ListView />} />
                </Routes>
            </div>
        </div>
    );
}

export default Home;
