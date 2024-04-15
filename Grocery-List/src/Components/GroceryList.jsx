import React, { useState } from "react";

const GroceryList = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item) {
      setList([...list, item]);
      setItem("");
    }
  };

  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const clearItems = () => {
    setList([]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Grocery Bud</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="e.g. eggs"
        className="border p-2 mr-2"
      />
      <button onClick={addItem} className="bg-blue-500 text-white p-2">
        Submit
      </button>

      <ul className="mt-4">
        {list.map((item, index) => (
          <li key={index} className="mb-2 flex justify-evenly">
            <span>{item}</span>

            <div>
              <button className="bg-green-500 text-white p-1 ml-2">✓</button>
              <button
                onClick={() => deleteItem(index)}
                className="bg-red-500 text-white p-1 ml-2"
              >
                ✗
              </button>
            </div>
          </li>
        ))}
      </ul>

      {list.length > 0 && (
        <button
          onClick={clearItems}
          className="bg-gray-500 text-white p-2 mt-4"
        >
          Clear Items
        </button>
      )}
    </div>
  );
};

export default GroceryList;
