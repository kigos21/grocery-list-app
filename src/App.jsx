import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

function App() {
  /**
   * interface Item {
   *  count: number;
   *  name: string;
   *  bought: boolean;
   * }
   */

  const [items, setItems] = useState([
    {
      id: 1,
      count: 2,
      name: "sardines",
      bought: false,
    },
    {
      id: 2,
      count: 3,
      name: "coffee",
      bought: false,
    },
    {
      id: 3,
      count: 1,
      name: "apple",
      bought: false,
    },
  ]);

  const [currentId, setCurrentId] = useState(4);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "unchecked":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.bought) - Number(b.bought));
      break;
    default:
      break;
  }

  const resetForm = () => {
    // reset form states
    setCount(1);
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if blank or falsey
    if (!name.trim()) {
      resetForm();
      return;
    }

    // add item
    setItems((items) => [
      ...items,
      { id: currentId, count, name, bought: false },
    ]);
    setCurrentId((id) => (id += 1));

    resetForm();
  };

  // This function will find the selected item based on the id. It will set the form states
  // based on the item details. This will also delete the item on the list upon putting its
  // details in the form.
  const handleEdit = (id) => {
    const item = items.find((item) => item.id === id);

    setCount(item.count);
    setName(item.name);

    handleDelete(id);
  };

  const handleStatusChange = (id) => {
    const newItems = items.map((item) => {
      const { bought: currentState } = item;
      if (item.id === id) {
        return { ...item, bought: !currentState };
      } else {
        return item;
      }
    });

    setItems(newItems);
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleCountChange = (e) => {
    setCount(Number(e.target.value));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClear = () => {
    // eslint-disable-next-line no-restricted-globals
    const response = confirm("Are you sure you want to clear your list?");

    if (!response) {
      return;
    }

    setItems([]);
  };

  return (
    <div className="flex flex-col root-container">
      <Header />

      <ItemInput
        handleSubmit={handleSubmit}
        count={count}
        handleCountChange={handleCountChange}
        name={name}
        handleNameChange={handleNameChange}
      />

      <hr style={{ width: "100%", marginBottom: "-0.7rem" }} />

      <div className="flex util-section">
        <select
          name="sortBy"
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="form-select"
          style={{ width: "13rem" }}
        >
          <option value="input">Sort by input</option>
          <option value="name">Sort by name</option>
          <option value="unchecked">Sort by unchecked</option>
        </select>

        <button onClick={handleClear} className="btn btn-danger">
          Clear
        </button>
      </div>

      <ItemList
        items={sortedItems}
        handleEdit={handleEdit}
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />

      {items.length !== 0 && <Footer items={items} />}
    </div>
  );
}

export default App;
