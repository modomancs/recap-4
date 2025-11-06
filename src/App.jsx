import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { nanoid } from "nanoid";

import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColor] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  //adding new color with random id
  function handleAddColor(data) {
    const newColor = {
      id: nanoid(),
      ...data,
    };
    setColor([newColor, ...colors]);
  }

  // deletes a color based on ID, it searches for colors that do not have the same id as the one i want to delete and keeps them
  function handleDeleteButton(idToDelete) {
    setColor(colors.filter((color) => color.id !== idToDelete));
  }

  function handleEditButton(updatedColor) {
    setColor(
      // replace object in the colors array with updated version based on its matching id
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitValue={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors... Please add one using the Form!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onHandleDelete={handleDeleteButton}
            onUpdateColor={handleEditButton}
          />
        ))
      )}
    </>
  );
}

export default App;
