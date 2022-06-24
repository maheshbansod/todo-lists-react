
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
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
            <div>
                {lists.map(list => {
                    return <div key={list.id} onClick={()=>openList(list.id)}>
                        {list.title} , {list.list.length} item(s)
                    </div>
                })}
                <button onClick={()=>navigate(`/new-task`)}>Add task</button>
            </div>
            <div>
                <Routes>
                    <Route path=":id" element={<ListView />} />
                </Routes>
            </div>
        </div>
    );
}

export default Home;
