import { type FormEvent, useState } from "react";
import { Item } from "../App";

interface Props {
  onSubmit: (newItem: Item) => void;
}

const Form = ({ onSubmit }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { quantity, description, packed: false, id: Math.random() };

    onSubmit(newItem);
    setQuantity(1);
    setDescription("");
  };

  return (
    <form className="form p-y" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setQuantity(+e.target.value)
        }
      >
        {Array.from({ length: 20 }).map((_, ele) => (
          <option key={ele} value={ele + 1}>
            {ele + 1}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />

      <button disabled={!description || !quantity}>Add</button>
    </form>
  );
};

export default Form;
