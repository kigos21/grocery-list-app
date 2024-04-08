export default function ItemInput({
  handleSubmit,
  count,
  handleCountChange,
  name,
  handleNameChange,
}) {
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={(e) => handleSubmit(e)} className="flex item-form">
        <select
          name="count"
          id="count"
          value={count}
          onChange={(e) => handleCountChange(e)}
          className="form-select"
          style={{
            width: "4.5rem",
            border: "2px solid #9725f5",
          }}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Add an item..."
          value={name}
          onChange={(e) => handleNameChange(e)}
          className="form-control"
          style={{
            border: "2px solid #9725f5",
          }}
        />

        <button type="submit" className="btn btn-dark get-this-btn">
          Get&nbsp;this
        </button>
      </form>
    </div>
  );
}
