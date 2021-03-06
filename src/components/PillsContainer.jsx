// npm
import { Link } from "react-router-dom";

export default function PillsContainer({ dishes }) {
  const Pills = dishes.map((item) => (
    <Link
      to={`/menu/dishes/${item.id}`}
      key={item.id}
      className="pill"
      style={{ padding: "10px" }}
    >
      {item.title}
    </Link>
  ));
  return <div className="pills-container">{Pills}</div>;
}
