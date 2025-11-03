import { useState } from "react";

export default function ColorInput({ id, name, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  function handleAddButton(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={handleAddButton}
        required
      />
      <input type="color" value={value} onChange={handleAddButton} />
    </>
  );
}
