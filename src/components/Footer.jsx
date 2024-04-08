export default function Footer({ items }) {
  const boughtCount = items.filter((item) => item.bought === true).length;

  return (
    <footer className="flex flex-col">
      <span>
        You have {items.length} items in your list, and you already bought{" "}
        {boughtCount}.
      </span>
      <span>Status: {Math.round((boughtCount / items.length) * 100)}%</span>
    </footer>
  );
}
