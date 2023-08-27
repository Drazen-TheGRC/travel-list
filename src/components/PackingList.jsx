const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "T-shirt", quantity: 10, packed: false },
];

function PackingList({ items, onDeleteItem }) {
  console.log("hey from PackingList");
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item onDeleteItem={onDeleteItem} item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default PackingList;
