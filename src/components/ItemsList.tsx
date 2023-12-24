import { ChangeEvent, useState } from "react";
import { Item } from "../App";

type Props = {
  items: Item[];
  onToggleItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

const ItemsList = ({ items, onDeleteItem, onToggleItem }: Props) => {
  const [sortedBy, setSortedBy] = useState<string>("input");

  let sortedItems: Item[] = items;

  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item, ind) => (
          <li key={ind}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            <span className={item.packed ? "line-through" : ""}>
              {item.quantity} {item.description}
            </span>

            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortedBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortedBy(e.target.value)
          }
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button
        //  onClick={onClearList}
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

export default ItemsList;
