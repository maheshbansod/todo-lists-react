import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ListView from './List/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:id" element={<ListView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
