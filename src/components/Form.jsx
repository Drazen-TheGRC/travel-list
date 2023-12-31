import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }

  console.log("hey from Form");
  return (
    <form className="add-form">
      <h3>What do you need for your 🗺️ trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(event) => setDescription(event.target.value)}
        type="text"
        value={description}
        placeholder="Item..."
      ></input>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default Form;
