import React, { useState } from "react";

const Editor = ({ onSave }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleSave = () => {
    onSave({ text, image });
  };

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
      </label>{" "}
      <br />
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />{" "}
      </label>{" "}
      <br />
      <button onClick={handleSave}> Save </button>{" "}
    </div>
  );
};

export default Editor;
