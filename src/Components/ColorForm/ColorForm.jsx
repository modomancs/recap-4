export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
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
          <ColorForm id="hex" name="Hex" />
        </fieldset>
        <br />
        <fieldset>
          {/* <legend>Contrast Text</legend>
          <ColorForm id="contrast" name="contrast" /> */}
          <br></br>
        </fieldset>
        <br />
        <button>Add Color</button>
      </fieldset>
      <br />
    </form>
  );
}
