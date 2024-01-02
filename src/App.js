import React, { useState } from "react";
import Toolbar from "./Toolbar";
import Website from "./Website";
import Editor from "./Editor";

const App = () => {
  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const handleDrop = (e) => {
    const itemType = e.dataTransfer.getData("text/plain");
    setItems([...items, itemType]);
  };

  const handleSave = (content) => {
    console.log("Saved:", content);
    setEditMode(false);
  };

  return (
    <div>
      <h1> Static Website Editor </h1> <Toolbar />
      <Website items={items} onDrop={handleDrop} />{" "}
      {editMode && <Editor onSave={handleSave} />}{" "}
    </div>
  );
};

export default App;
