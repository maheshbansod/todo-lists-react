import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NewTaskView from './List/New/NewTask';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/list/*" element={<Home />} />
          <Route path="/"  element={<Navigate replace to="/list" /> } />
          <Route path="/new-task" element={<NewTaskView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
