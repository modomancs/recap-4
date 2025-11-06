import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  // buttonlabel to update button when clicking edit
  buttonLabel,
  onSubmitValue,
  //from colors.js
  initialInformation = {
    role: "some color",
    hex: "#123456",
    contrastText: "#ffffff",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitValue(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <br />
        <fieldset>
          <legend>Role</legend>
          <input
            type="text"
            id="role"
            name="role"
            defaultValue={initialInformation.role}
            required
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Hex</legend>
          <ColorInput
            id="hex"
            name="hex"
            defaultValue={initialInformation.hex}
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Contrast Text</legend>
          <ColorInput
            id="contrast"
            name="contrastText"
            defaultValue={initialInformation.contrastText}
          />
          <br></br>
        </fieldset>
        <br />
        <button type="submit">{buttonLabel || "Add Color"}</button>
      </fieldset>
      <br />
    </form>
  );
}
