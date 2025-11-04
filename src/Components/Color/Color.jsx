import { useState } from "react";
import "./Color.css";

import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onHandleDelete, onUpdateColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  function handleSubmit(data) {
    onUpdateColor({ id: color.id, ...data });
    setEdit(false);
  }
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {edit ? (
        <>
          <ColorForm
            onSubmitValue={handleSubmit}
            initialInformation={color}
            buttonLabel="Update Color"
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
      {!edit && (
        <>
          {confirmDelete ? (
            <>
              <p className="color-card-headline">Are you sure?</p>
              <button onClick={() => setConfirmDelete(false)}>Cancel</button>
              <button onClick={() => onHandleDelete(color.id)}>DELETE</button>
            </>
          ) : (
            <button onClick={() => setConfirmDelete(true)}>DELETE</button>
          )}
        </>
      )}
    </div>
  );
}
