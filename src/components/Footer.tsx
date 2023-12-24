import { Item } from "../App";

type Props = {
  items: Item[];
};

function Footer({ items }: Props) {
  const itemsLength = items.length;
  const packedItemsLength = items.filter((item) => item.packed).length;

  const percentage = items.length
    ? Math.round((packedItemsLength / itemsLength) * 100)
    : 0;

  if (!items.length)
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list 🚀</p>
      </footer>
    );

  return (
    <footer className="stats">
      {percentage === 100
        ? "You got everything! Ready to go ✈️"
        : ` 💼 You have ${items.length} items on your list, and you already packed ${packedItemsLength} (${percentage}%)`}
    </footer>
  );
}

export default Footer;
