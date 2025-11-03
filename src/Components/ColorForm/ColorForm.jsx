import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onSubmitValue }) {
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
            placeholder="Name of Color"
            id="role"
            name="name"
            required
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Hex</legend>
          <ColorInput id="hex" name="hex" defaultValue="#123456" />
        </fieldset>
        <br />
        <fieldset>
          <legend>Contrast Text</legend>
          <ColorInput id="contrast" name="contrast" defaultValue="#abcdef" />
          <br></br>
        </fieldset>
        <br />
        <button type="submit">Add Color</button>
      </fieldset>
      <br />
    </form>
  );
}
