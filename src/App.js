import React, { useState } from 'react';
import './styles/App.css';
import Profil from './components/Profil';
import InputSection from './components/InputSection';
import TaskSection from './components/TaskSection';

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText]
    });
  }

  function deleteItem(taskId) {
    setItems(prevItems => {
      return prevItems.filter( (item, index) => index !== taskId)
    }); 
  }

  return (
    <div className="App">
      <Profil />
      <InputSection 
        onAdd={addItem}/>
      <TaskSection 
        taskItems={items}
        onDelete={deleteItem}/>
    </div>
  );
}

export default App;
