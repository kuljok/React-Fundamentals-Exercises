import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddItemForm from "./AddItemForm";
import DeleteItem from "./DeleteItem";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const getLastItem = () => {
      const [result] = items.slice(-1);
      return result;
  }

  const deleteLastItem = () => {
      setItems(items.slice(0, -1));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>Shopping List</h2>
      <AddItemForm onNewItem={addItem} />
      <DeleteItem item={getLastItem()} onDeleteItem={deleteLastItem} />

      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
