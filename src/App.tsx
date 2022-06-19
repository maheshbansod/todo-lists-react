import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListGroupThumb from './ListGroup/ListGroupThumb';

const listGroupIds = ["1","2", "3"];

function App() {

  const openListGroup = (id: string) => {
    // navigate to list group page
  };

  return (
    <div className="App">
      {listGroupIds.map(id => <div onClick={openListGroup.bind(null, id)}>
        List group '{id}':
        <ListGroupThumb listGroupId={id}/>
      </div>)}
    </div>
  );
}

export default App;
