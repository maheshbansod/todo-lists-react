import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ListGroupView from './List/List';

const listGroupIds = ["1", "2", "3"];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:id" element={<ListGroupView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
