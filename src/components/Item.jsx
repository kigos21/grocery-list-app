/* eslint-disable react/prop-types */
export default function Item({
  id,
  count,
  name,
  bought,
  handleEdit,
  handleDelete,
  handleStatusChange,
}) {
  return (
    <div
      className={`flex item-row ${bought && "bought"}`}
      style={{
        border: "1px solid #ffffff20",
        borderRadius: "6px",
        padding: "4px",
        paddingLeft: "8px",
        alignItems: "center",
      }}
    >
      <span
        className={`${bought && "strikethrough"}`}
      >{`${count} ${name}`}</span>
      <div className="flex buttons">
        <button onClick={() => handleEdit(id)} className="btn btn-dark">
          Edit
        </button>
        <button onClick={() => handleDelete(id)} className="btn btn-danger">
          x
        </button>
        <button
          onClick={() => handleStatusChange(id)}
          className="btn btn-success"
        >
          /
        </button>
      </div>
    </div>
  );
}
