import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemsList from "./components/ItemsList";
import useLocalStorage from "./hooks/useLocalStorage";

export interface Item {
  id: number;
  quantity: number;
  description: string;
  packed: boolean;
}

const App = () => {
  const [items, setItems] = useLocalStorage<Item[]>([], "items");

  const addItem = (newItem: Item) => {
    setItems((prev) => [...prev, newItem]);
  };

  const onDeleteItem = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const onToggleItem = (id: number) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  return (
    <main className="app">
      <Header />
      <Form onSubmit={addItem} />

      <ItemsList
        items={items}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
      />

      <Footer items={items} />
    </main>
  );
};

export default App;
