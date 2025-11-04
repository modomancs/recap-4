import { useState } from "react";
import "./Color.css";

export default function Color({ color, onHandleDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [edit, setEdit] = useState("false");
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {confirmDelete ? (
        <>
          <p className="color-card-headline">Are you sure?</p>
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>
          <button onClick={() => onHandleDelete(color.id)}>DELETE</button>
        </>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>DELETE</button>
      )}
      {!edit ? (
        <>
          <button onClick={() => setEdit(!edit)}>Update Color</button>
        </>
      ) : (
        <button onClick={() => setEdit(!edit)}>Edit</button>
      )}
    </div>
  );
}
