import Item from "./Item";

/* eslint-disable react/prop-types */
export default function ItemList({
  items,
  handleEdit,
  handleStatusChange,
  handleDelete,
}) {
  return (
    <div className="w-100 flex flex-col" style={{ gap: "0.5rem" }}>
      {items.map((item) => (
        <Item
          key={item.id}
          handleEdit={handleEdit}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete}
          {...item}
        />
      ))}
    </div>
  );
}
