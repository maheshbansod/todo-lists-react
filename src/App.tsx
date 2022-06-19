import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ListView from './List/List';
import NewTaskView from './List/NewTask';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<ListView />} />
          <Route path="/new-task" element={<NewTaskView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
