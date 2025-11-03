import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [colors, setColor] = useState(initialColors);
  function handleAddColor(data) {
    const newColor = { id: nanoid(), ...data };
    setColor([newColor, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitValue={handleAddColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
