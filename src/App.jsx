import { useState } from "react";

import "./index.css";

import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(itemId) {
    console.log(itemId);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

export default App;
