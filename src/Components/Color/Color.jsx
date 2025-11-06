import { useEffect, useState } from "react";
import "./Color.css";
import CopyToClipboard from "../CopyToCliboard/CopyToClipboard";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onHandleDelete, onUpdateColor }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  const [accessibilityAPI, setAccessibilityAPI] = useState(null);

  useEffect(() => {
    async function getResult() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            mode: "cors",
            method: "POST",
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        setAccessibilityAPI(data);
      } catch (error) {
        console.error("API error:", error);
      }
    }

    getResult();
  }, [color.hex, color.contrastText]);

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
          <CopyToClipboard hexCode={color.hex} />
          <h4>{color.role}</h4>
          <p>Contrast: {color.contrastText}</p>
          {accessibilityAPI ? (
            <p
              style={{
                backgroundColor:
                  accessibilityAPI.overall === "Yup"
                    ? "lightgreen"
                    : accessibilityAPI.overall === "Kinda"
                    ? "khaki"
                    : accessibilityAPI.overall === "Nope"
                    ? "lightcoral"
                    : "transparent",
                color: accessibilityAPI.overall === "Nope" ? "white" : "black",
                width: "43%",
              }}
            >
              Contrast Score: {accessibilityAPI.overall}
            </p>
          ) : (
            <p>Checking accessibility...</p>
          )}
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
    //if edit is opposite(in this case true) and confirmDelete false
  );
}
