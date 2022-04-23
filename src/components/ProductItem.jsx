// npm
import { Link } from "react-router-dom";

export default function ProductItem({ item, routeIds }) {
  const { name, price, imgURL, shortDescription } = item;
  const [categoryId, subId] = routeIds;
  return (
    <div className="product-item">
      <div>
        <img
          src={imgURL}
          alt={shortDescription}
          style={{ width: "220px", height: "200px", objectFit: "cover" }}
        />
      </div>
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      <h4>{price}</h4>
      <Link
        to={`/menu/${categoryId}/${subId}/${item.name}`}
        state={{ data: item }}
      >
        See more
      </Link>
    </div>
  );
}
